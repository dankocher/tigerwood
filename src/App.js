import React from 'react';
import './styles/App.scss';
import {Header, Sections} from "./components";
import Test from "./Test";
import ajax, {isDeploy} from "./ajax";
import Document from "./components/Document";
// import Grids from "./components/Grids";

class App extends React.Component {

    state = {
        isMobile: false,
        width: 0,
        height: 0,
        scrollDirection: "",
        translates: null,
        showModal: false,
        currentPage: "",
        modalData: {
            product: null,
            variant: null,
            color: "#E86F00",

        }
    }

    componentDidMount() {
        this.getTranslates();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
        let path = window.location.pathname;
        if (isDeploy) {
            path = path.replace("/tigerwood", "");
        }
        switch (path) {
            case "/": return this.setState({currentPage: ""});
            case "/ordering": return this.setState({currentPage: "ordering"});
            case "/contract_terms": return this.setState({currentPage: "contract_terms"});
            case "/delivery": return this.setState({currentPage: "delivery"});
            case "/payments": return this.setState({currentPage: "payments"});

            default:
                window.location = isDeploy ? "/tigerwood" : "/"
        }
    }

    getTranslates = async () => {
        let translates = await ajax("/translates/ru.json")
        this.setState({translates});
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.handleScroll);
    }

    updateWindowDimensions = () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let isMobile = width <= 960;
        this.setState({isMobile, width, height})
        // this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleScroll = (e) => {
        const window = e.currentTarget;

        let scrollDirection = "";
        if (this.prev > window.scrollY) {
            scrollDirection = "up";
        } else if (this.prev < window.scrollY) {
            scrollDirection = "down";
        }
        if (scrollDirection !== this.state.scrollDirection) {
            this.setState({scrollDirection})
        }
        this.prev = window.scrollY;
    };

    showModal = () => {
        this.setState({showModal: true})
    }


  render() {
    const {isMobile, width, height, scrollDirection, translates, currentPage} = this.state;
    const animate = true;
    const animateOnlyFirstTime = false;
    const animateFromBottom = false;
    if (translates === null) return null;
    return <div className={`App`}>
        {/*<div className="screen-size">{`${width}x${height}`}</div>*/}


        <Header isMobile={isMobile} width={width} t={translates.header}/>
        { currentPage === "" ?
            <Sections isMobile={isMobile} width={width}
                      animate={animate}
                      animateOnlyFirstTime={animateOnlyFirstTime}
                      animateFromBottom={animateFromBottom}
                      scrollDirection={scrollDirection}
                      t={translates}
            />
            :
            <Document doc={currentPage}
                      isMobile={isMobile} width={width}
                      animateOnlyFirstTime={animateOnlyFirstTime}
                      animateFromBottom={animateFromBottom}
                      scrollDirection={scrollDirection}
                      t={translates}/>
        }
        {/*<Test/>*/}

        {/*<Grids/>*/}
    </div>
  }
}

export default App;

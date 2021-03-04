import React from 'react';
import './styles/App.scss';
import {Header, Sections} from "./components";
import Test from "./Test";
import ajax, {api_location, isDeploy} from "./ajax";
import Document from "./components/Document";
import Modal from "./components/Modal";
import disableScroll from 'disable-scroll';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Admin from "./components/Admin";

// import Grids from "./components/Grids";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.isAdmin = window.location.pathname === "/admin"
        this.state = {
            isMobile: false,
            width: 0,
            height: 0,
            scrollDirection: "",
            translates: null,
            currentPage: "",
            modal: {
                show: false,
                type: "product", // picture, video, product, review
                data: null,
            }
        }
    }


    componentDidMount() {
        this.getTranslates();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
        let path = window.location.pathname;
        if (path === "/admin") {
            return;
        }
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
        let translates = await ajax("/translates/ru.json");
        this.preload(translates.preload);
        this.setState({translates});
    }

    preload = (pictures) => {
        if(pictures) {
            pictures.forEach((picture) => {
                const img = new Image();
                img.src = api_location + "/" + picture;
            })
        }
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

    showModal = (modal) => {
        this.setState({modal});

        if(modal.show) {
            // if (this.state.isMobile) {
            //     disableBodyScroll(document.body);
            // } else {
            //     disableScroll.on();
            // }
            // document.body.style.top = window.scrollY + "px";
            // document.body.className = "non-scroll";
            // document.querySelector("#root .App .header").style.marginRight = "17px";
            document.body.style.overflowY = "hidden";
        } else {
            // enableBodyScroll(document.body)
            // disableScroll.off();
            // document.body.className = ""
            document.body.style.overflowY = "auto";
        }
    }


  render() {
    const {isMobile, width, height, scrollDirection, translates, currentPage, modal} = this.state;
    const animate = true;
    const animateOnlyFirstTime = false;
    const animateFromBottom = false;
    if (translates === null) return null;

    if (this.isAdmin) {
        return <Admin translates={translates}/>
    }

    return <div className={`App`}>
        {/*<div className="screen-size">{`${width}x${height}`}</div>*/}


        <Header isMobile={isMobile} width={width} t={translates.header} showModal={this.showModal}/>
        { currentPage === "" ?
            <Sections isMobile={isMobile} width={width}
                      animate={animate}
                      animateOnlyFirstTime={animateOnlyFirstTime}
                      animateFromBottom={animateFromBottom}
                      scrollDirection={scrollDirection}
                      t={translates}
                      showModal={this.showModal}
            />
            :
            <Document doc={currentPage}
                      isMobile={isMobile} width={width}
                      animateOnlyFirstTime={animateOnlyFirstTime}
                      animateFromBottom={animateFromBottom}
                      scrollDirection={scrollDirection}
                      t={translates}/>
        }

        {   !modal.show ? null :
            <Modal type={modal.type} data={modal.data}
                   t={translates.modal}
                   isMobile={isMobile} width={width}
                   showModal={this.showModal}/>
        }
        {/*<Test/>*/}

        {/*<Grids/>*/}
    </div>
  }
}

export default App;

import React from 'react';
import './styles/App.scss';
import {Header, Sections} from "./components";
// import Grids from "./components/Grids";

class App extends React.Component {

    state = {
        isMobile: false,
        width: 0
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        let width = window.innerWidth;
        let isMobile = width < 960;
        this.setState({isMobile, width})
        // this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

  render() {
    const {isMobile} = this.state;
    return <div className={`App`}>
        <Header isMobile={isMobile}/>
        <Sections isMobile={isMobile}/>
        {/*<Grids/>*/}
    </div>
  }
}

export default App;

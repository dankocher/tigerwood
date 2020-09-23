import React from 'react';
import './styles/App.scss';
import {Header, Sections} from "./components";
// import Grids from "./components/Grids";

class App extends React.Component {

    state = {
        isMobile: false,
        width: 0,
        height: 0,
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
        let height = window.innerHeight;
        let isMobile = width < 960;
        this.setState({isMobile, width, height})
        // this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

  render() {
    const {isMobile, width, height} = this.state;
    return <div className={`App`}>
        <div className="screen-size">{`${width}x${height}`}</div>
        <Header isMobile={isMobile} width={width}/>
        <Sections isMobile={isMobile} width={width}/>
        {/*<Grids/>*/}
    </div>
  }
}

export default App;

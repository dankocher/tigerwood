import React from 'react';
import './styles/App.scss';
import {Header, Sections} from "./components";
import Grids from "./components/Grids";

class App extends React.Component {

  render() {

    return <div className={`App`}>
        <Header/>
        <Sections/>
        <Grids/>
    </div>
  }
}

export default App;

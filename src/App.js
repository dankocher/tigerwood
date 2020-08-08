import React from 'react';
import './styles/App.scss';
import {Header, Sections} from "./components";

class App extends React.Component {

  render() {

    return <div className={`App`}>
        <Header/>
        <Sections/>
    </div>
  }
}

export default App;

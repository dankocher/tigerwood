import React from "react";
import "./styles.scss";

const getFromLocalStorage = (name) => {
    let value = localStorage.getItem('--grids-' + name);
    return value === true || value === "true" || value === undefined
}
const setToLocalStorage = (name, value) => {
    localStorage.setItem('--grids-' + name, value)
}

class Grids extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            body: getFromLocalStorage("body"),
            grids: getFromLocalStorage("grids"),
            margins: getFromLocalStorage("margins"),
        }
    }

    showView = async view => {
        await this.setState({[view]: !this.state[view]});
        setToLocalStorage(view, this.state[view])
    }

    render() {
        const {body, grids, margins} = this.state;
        return (
            <div className="--grids--">
                <div className="--controllers">
                    <div className={`--btn --btn-body${body ? "" : " -disabled"}`} onClick={() => this.showView("body")}/>
                    <div className={`--btn --btn-margins${margins ? "" : " -disabled"}`} onClick={() => this.showView("margins")}/>
                    <div className={`--btn --btn-grids${grids ? "" : " -disabled"}`} onClick={() => this.showView("grids")}/>
                </div>
                <div className={`--grid --body${body ? "" : " -disabled"}`}/>
                <div className={`--grid --margins${margins ? "" : " -disabled"}`}/>
                <div className={`--grid --grids${grids ? "" : " -disabled"}`}/>
            </div>
        )
    }
}

export default Grids

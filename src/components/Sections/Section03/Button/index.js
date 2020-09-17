import React from "react";
import "./styles.scss";

export default class Button extends React.Component {

    render() {
        const {name, selected, onClick} = this.props;

        return <div className={`-button${selected ? " -selected" : ""}`} onClick={onClick}>
            {name}
        </div>
    }
}

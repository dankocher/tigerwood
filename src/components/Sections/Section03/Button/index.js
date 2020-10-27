import React from "react";
import "./styles.scss";

export default class Button extends React.Component {

    render() {
        const {name, selected, onClick, className} = this.props;

        return <div className={`-button${selected ? " -selected" : ""} ${className}`} onClick={onClick}>
            {name}
        </div>
    }
}

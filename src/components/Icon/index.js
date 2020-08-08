import React from "react";
import icons from "./icons";

class Icon extends React.Component {

    render() {
        const {name} = this.props;
        return icons[name]
    }
}

export default Icon;

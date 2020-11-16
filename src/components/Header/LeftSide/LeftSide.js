import React from "react";
import Logo from "./Logo";
import "./styles.scss";

import formatText from "../../../utils/formatText";

class LeftSide extends React.Component {
    render() {
        const {isMobile, width, t} = this.props;
        return (
            <div className="h-side h-left">
                <Logo isMobile={width <= 960}/>
                <div className="site-description">
                    {formatText(t.site_description)}
                </div>
            </div>
        );
    }
}

export default LeftSide

import React from "react";
import Logo from "./Logo";
import "./styles.scss";

import t from "../../../translates";
import formatText from "../../../utils/formatText";

class LeftSide extends React.Component {
    render() {
        const {isMobile} = this.props;
        return (
            <div className="h-side h-left">
                <Logo isMobile={isMobile}/>
                <div className="site-description">
                    {formatText(t.site_description)}
                </div>
            </div>
        );
    }
}

export default LeftSide

import React from "react";
import Logo from "./Logo";
import "./styles.scss";

import t from "../../../translates";
import formatText from "../../../utils/formatText";

class LeftSide extends React.Component {
    render() {
        return (
            <div className="h-side h-left">
                <Logo/>
                <div className="site-description">
                    {formatText(t.site_description)}
                </div>
            </div>
        );
    }
}

export default LeftSide

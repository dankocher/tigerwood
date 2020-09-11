import React from "react";
import "./styles.scss";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

class Header extends React.Component {

    render() {
        const {isMobile} = this.props;
        return (
            <div className={`header`}>
                <div className="h-content">
                    <LeftSide isMobile={isMobile}/>
                    <RightSide isMobile={isMobile}/>
                </div>
            </div>
        );
    }
}

export default Header;

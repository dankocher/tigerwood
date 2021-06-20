import React from "react";
import "./styles.scss";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

class Header extends React.Component {

    render() {

        return (
            <div className={`header${this.props.currenPage === 'congratulations' ? ' no-border' : ""}`}>
                <div className="h-content">
                    <LeftSide {...this.props}/>
                    <RightSide {...this.props}/>
                </div>
            </div>
        );
    }
}

export default Header;

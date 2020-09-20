import React from "react";
import "./styles.scss";
import Icon from "../../Icon";
import t from "../../../translates";
import formatText from "../../../utils/formatText";

class RightSide extends React.Component {

    showMenu = () => {
        console.log("showMenu")
    }

    render() {
        const {width} = this.props;
        if (width <= 780) {
            return <div className="h-side h-right-mobile">
                <div className="h-button-menu" onClick={this.showMenu}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9H30V12H6V9ZM12 16.5H30V19.5H12V16.5ZM19.5 24H30V27H19.5V24Z" fill="black"/>
                    </svg>
                </div>
            </div>
        }
        return (
            <div className="h-side h-right">
                <div className="address">
                    <div className="address-icon">
                        <Icon name={"address"}/>
                    </div>
                    <div className="address-text">
                        {formatText(t.address)}
                    </div>
                </div>
                <div className="phone">
                    <div className="h-p-top">
                        <div className="phone-icon">
                            <Icon name={"phone"}/>
                        </div>
                        <div className="phone-number">{t.phone_number}</div>
                        <div className="mess whatsapp-icon"><Icon name={"whatsapp"}/></div>
                        <div className="mess telegram-icon"><Icon name={"telegram"}/></div>
                    </div>
                    <div className="h-p-bottom">
                        <div className="h-call-me">
                            {t.call_me}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightSide

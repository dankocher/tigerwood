import React from "react";
import "./styles.scss";
import Icon from "../../Icon";
import t from "../../../translates";
import formatText from "../../../utils/formatText";

class RightSide extends React.Component {
    render() {
        const {isMobile} = this.props;
        if (isMobile) {
            return <div className="h-side h-right">

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

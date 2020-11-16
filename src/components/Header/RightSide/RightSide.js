import React from "react";
import "./styles.scss";
import Icon from "../../Icon";
import t from "../../../translates";
import formatText from "../../../utils/formatText";
import MobileMenu from "./MobileMenu";

class RightSide extends React.Component {

    render() {
        const {width} = this.props;
        if (width <= 480) {
            return <MobileMenu
                Address={Address}
                PhoneNumber={PhoneNumber}
                CallMe={CallMe}
                Messengers={Messengers}
            />
        }
        return (
            <div className="h-side h-right">

                <Address/>
                <div className="phone">
                    <div className="h-p-top">
                        <PhoneNumber number={t.phone_number}/>
                        <Messengers/>
                    </div>
                    <div className="h-p-bottom">
                        <CallMe/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightSide;

const Address = props => <div className="address">
    <div className="address-icon"><Icon name={"address"}/></div>
    <div className="address-text">{formatText(t.address)}</div>
</div>;
const PhoneNumber = props => <>
    <div className="phone-icon"><Icon name={"phone"}/></div>
    <div className="phone-number">{props.number}</div>
</>;
const Messengers = props => (<>
        <div className="mess whatsapp-icon"><Icon name={"whatsapp"}/></div>
        <div className="mess telegram-icon"><Icon name={"telegram"}/></div>
</>);
const CallMe = props => <div className="h-call-me">{t.call_me}</div>;

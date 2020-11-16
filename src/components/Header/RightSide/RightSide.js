import React from "react";
import "./styles.scss";
import Icon from "../../Icon";
import MobileMenu from "./MobileMenu";

class RightSide extends React.Component {

    render() {
        const {width, t} = this.props;
        if (width <= 480) {
            return <MobileMenu
                t={t}
                Address={Address}
                PhoneNumber={PhoneNumber}
                CallMe={CallMe}
                Messengers={Messengers}
            />
        }
        return (
            <div className="h-side h-right">

                <Address address={t.address}/>
                <div className="phone">
                    <div className="h-p-top">
                        <PhoneNumber number={t.phone_number}/>
                        <Messengers
                            whatsapp={t.whatsapp}
                            telegram={t.telegram}
                        />
                    </div>
                    <div className="h-p-bottom">
                        <CallMe call_me={t.call_me}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightSide;

const Address = props => <div className="address">
    <div className="address-icon"><Icon name={"address"}/></div>
    <div className="address-text">{props.address}</div>
</div>;
const PhoneNumber = props => <>
    <div className="phone-icon"><Icon name={"phone"}/></div>
    <div className="phone-number">{props.number}</div>
</>;
const Messengers = props => (<>
        <a href={`https://wa.me/${props.whatsapp}`} _target={"blank"} className="mess whatsapp-icon"><Icon name={"whatsapp"}/></a>
        <a href={`https://t.me/${props.telegram}`} _target={"blank"} className="mess telegram-icon"><Icon name={"telegram"}/></a>
</>);
const CallMe = props => <div className="h-call-me">{props.call_me}</div>;

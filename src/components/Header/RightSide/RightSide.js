import React from "react";
import "./styles.scss";
import Icon from "../../Icon";
import t from "../../../translates";
import formatText from "../../../utils/formatText";
import {instanceOf} from "prop-types";

class RightSide extends React.Component {

    state = {
        showMenu: false,
        completeOpen: false
    }

    componentDidMount() {
        window.document.addEventListener("scroll", this.scrollEvent)
    }

    componentWillUnmount() {
        window.document.removeEventListener("scroll", this.scrollEvent)
    }
    scrollEvent = () => {
        this.showMenu(false);
    }

    showMenu = (status) => {
        const {showMenu} = this.state;
        let newStatus = status;
        if (status !== true && status !== false) {
            newStatus = !showMenu
        }
        if (newStatus !== showMenu) {
            this.setState({showMenu: newStatus})
        }
    }

    onScrollMenu = (e) => {
        e.preventDefault();
        return false;
    }

    render() {
        const {width} = this.props;
        const {showMenu, completeOpen} = this.state;
        if (width <= 480) {
            return <div className="h-side h-right-mobile">
                <div className="h-button-menu" onClick={this.showMenu}>
                    {showMenu ?
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0001 7.879L17.4251 0.454002L19.5461 2.575L12.1211 10L19.5461 17.425L17.4251 19.546L10.0001 12.121L2.5751 19.546L0.454102 17.425L7.8791 10L0.454102 2.575L2.5751 0.454002L10.0001 7.879Z" fill="black"/>
                        </svg> :
                        < svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9H30V12H6V9ZM12 16.5H30V19.5H12V16.5ZM19.5 24H30V27H19.5V24Z" fill="black"/>
                        </svg>
                    }
                </div>
                <div className={`-m-menu-container${showMenu ? " -open" : ""}${completeOpen ? " -complete-open" : ""}`} onScroll={this.onScrollMenu}>
                    <div className={`-m-menu`}>
                        <div className="-m-menu-content">
                            <Address/>
                            <div className="-m-phone">
                                <PhoneNumber number={t.phone_number}/>
                            </div>
                            <div className="-or">или</div>
                            <CallMe/>
                            <div className="-messengers">
                                <Messengers/>
                            </div>
                        </div>
                    </div>
                    <div className="-overlay" onMouseDown={() => this.showMenu(false)}/>
                </div>
            </div>
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

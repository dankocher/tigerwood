import React from "react";

class MobileMenu extends React.Component {

    state = {
        showMenu: false,
        firstTime: " first-time"
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
            this.setState({showMenu: newStatus, firstTime: ""})
        }
    }

    onScrollMenu = (e) => {
        e.preventDefault();
        return false;
    }

    render() {
        const {showMenu, firstTime} = this.state;

        const {Address, PhoneNumber, CallMe, Messengers, t} = this.props;

        return (
            <div className="h-side h-right-mobile">
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
                <div className={`-m-menu-container${showMenu ? " -open" : ""}`} onScroll={this.onScrollMenu}>
                    <div className={`-m-menu${firstTime}`}>
                        <div className="-m-menu-content">
                            <Address address={t.address}/>
                            <a href={`tel:${t.phone_number}`} className="-m-phone">
                                <PhoneNumber number={t.phone_number}/>
                            </a>
                            <div className="-or">{t.or}</div>
                            <CallMe call_me={t.call_me} onClick={() => this.props.showModal({
                                show: true,
                                type: "default",
                                data: t.modal
                            })}/>
                            <div className="-messengers">
                                <Messengers
                                    whatsapp={t.whatsapp}
                                    telegram={t.telegram}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-overlay" onMouseDown={() => this.showMenu(false)}/>
                </div>
            </div>
        )
    }
}

export default MobileMenu;

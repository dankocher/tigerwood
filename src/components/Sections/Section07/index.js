import React from "react";
import InputMask from "react-input-mask";
import "./styles.scss";
import ButtonArrow from "../../ButtonArrow";
import {api_location} from "../../../ajax";

const SECTION_NUMBER = "07"

export default class Section extends React.Component {

    state = {
        phone: "",
        name: "",
        phone_warn: false,
        name_warn: false,
    }

    send = () => {
        const {phone, name} = this.state;
        let warn = false;
        if (phone === "") {
            this.setState({phone_warn: true});
            warn = true
        }
        if (name === "") {
            this.setState({name_warn: true});
            warn = true
        }
        if (warn === true) {
            return;
        }
        this.setState({
            phone: "",
            name: "",
            phone_warn: false,
            name_warn: false,
        });
        window.open(api_location + "/" + this.props.t.filename)
    }

    onChange = e => {
        console.log(e)
        let warn_param = e.target.name + "_warn"
        this.setState({
            [e.target.name]: e.target.value,
            [warn_param]: false
        })
    }

    render() {
        const {phone, name, phone_warn, name_warn} = this.state;
        const {t} = this.props;

        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated}`}>
                <div className={`---content`}>
                    <div className="-s7-header">
                        <div className="-header-1 slideInDown delay1">{t.header_1}</div>
                        <div className="-header-2 slideInDown delay2">{t.header_2}</div>
                        <div className="-header-2 slideInDown delay3">{t.header_3}</div>
                    </div>
                    <div className="-form">
                        {/*<input type="text" className="-text-input --phone" name={"phone"}/>*/}
                        <InputMask className={`-text-input --phone slideInDown delay4${phone_warn ? " -warn" : ""}`} name={"phone"} onChange={this.onChange} value={phone} type={"tel"} placeholder={t.placeholder_phone} mask="+375 (99) 999 99 99" maskChar=" "/>
                        <input className={`-text-input --name slideInDown delay5${name_warn ? " -warn" : ""}`} name={"name"} onChange={this.onChange} value={name} type={"text"} placeholder={t.placeholder_name} autoComplete={"off"} autoCorrect={"off"}/>
                        {/*<Button className={"slideInDown delay6"} onClick={this.send}/>*/}

                        <ButtonArrow
                            className={"-s07-button slideInDown delay6"}
                            topText={t.button_text_1}
                            bottomText={t.button_text_2}
                            width={223}
                            onClick={this.send}
                            arrowWidth={47}
                        />
                        <div className="-description slideInDown delay7">
                            {t.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const arrow = <span className={"arrow"}><svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M47.3536 4.35356C47.5488 4.1583 47.5488 3.84171 47.3536 3.64645L44.1716 0.46447C43.9763 0.269208 43.6597 0.269208 43.4645 0.46447C43.2692 0.659732 43.2692 0.976315 43.4645 1.17158L46.2929 4L43.4645 6.82843C43.2692 7.02369 43.2692 7.34028 43.4645 7.53554C43.6597 7.7308 43.9763 7.7308 44.1716 7.53554L47.3536 4.35356ZM-4.37114e-08 4.5L47 4.5L47 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="white"/>
// </svg>
// </span>
//
// function Button(props) {
//     return (
//     <div className={`-s07-button ${props.className}`} onClick={props.onClick}>
//         <div className="b-top-text">{t.button_text_1}</div>
//         <div className="b-bottom-text">{t.button_text_2}{arrow}</div>
//     </div>
//     )
// }

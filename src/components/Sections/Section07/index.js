import React from "react";
import InputMask from "react-input-mask";
import "./styles.scss";
import t from "./text.json";
import formatText from "../../../utils/formatText";

const SECTION_NUMBER = "07"

export default class Section extends React.Component {

    state = {
        phone: "",
        name: ""
    }

    send = () => {
        console.log(this.state);
        this.setState({
            phone: "",
            name: ""
        })
    }

    onChange = e => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {phone, name} = this.state;

        return (
            <div className={`section --s${SECTION_NUMBER}`}>
                <div className={`---content`}>
                    <div className="-s7-header">
                        <div className="-header-1">{t.header_1}</div>
                        <div className="-header-2">{t.header_2}</div>
                        <div className="-header-2">{t.header_3}</div>
                    </div>
                    <div className="-form">
                        {/*<input type="text" className="-text-input --phone" name={"phone"}/>*/}
                        <InputMask className="-text-input --phone" name={"phone"} onChange={this.onChange} value={phone} type={"tel"} placeholder={t.placeholder_phone} mask="+375 (99) 999 99 99" maskChar=" "/>
                        <input className="-text-input --name" name={"name"} onChange={this.onChange} value={name} type={"text"} placeholder={t.placeholder_name} autoComplete={"off"} autoCorrect={"off"}/>
                        <Button onClick={this.send}/>
                        <div className="-description">
                            {formatText(t.description)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const arrow = <span className={"arrow"}><svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.3536 4.35356C47.5488 4.1583 47.5488 3.84171 47.3536 3.64645L44.1716 0.46447C43.9763 0.269208 43.6597 0.269208 43.4645 0.46447C43.2692 0.659732 43.2692 0.976315 43.4645 1.17158L46.2929 4L43.4645 6.82843C43.2692 7.02369 43.2692 7.34028 43.4645 7.53554C43.6597 7.7308 43.9763 7.7308 44.1716 7.53554L47.3536 4.35356ZM-4.37114e-08 4.5L47 4.5L47 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="white"/>
</svg>
</span>

function Button(props) {
    return (
    <div className="-s07-button" onClick={props.onClick}>
        <div className="b-top-text">{t.button_text_1}</div>
        <div className="b-bottom-text">{t.button_text_2}{arrow}</div>
    </div>
    )
}

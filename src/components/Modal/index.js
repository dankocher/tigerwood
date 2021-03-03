import React from "react";
import "./styles.scss"
import InputMask from "react-input-mask";
import ButtonArrow from "../ButtonArrow";
import {api_location} from "../../ajax";
import Product from "./Product";
import Review from "./Review/Review";

export default class Modal extends React.Component {

    state = {
        show: false,
        phone: "",
        name: "",
        phone_warn: false,
        name_warn: false,
        playing: true
    }
    componentDidMount() {
        this.showModal()
    }

    showModal = () => {
        setTimeout(() => {
            this.setState({show: true})
        }, 50);
    }

    hideModal = () => {
        this.setState({show: false})
        setTimeout(() => {
            this.props.showModal({
                show: false,
                data: null,
                type: ""
            })
        }, 300)
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
        // TODO: SEND

        this.hideModal();
    }

    onChange = e => {
        let warn_param = e.target.name + "_warn"
        this.setState({
            [e.target.name]: e.target.value,
            [warn_param]: false
        })
    }

    play = evt => {
        const playing = this.state.playing;
        if (playing) {
            this.video.pause();
        } else {
            this.video.play();
        }
        this.setState({playing: !playing})
    }

    getData = () => {
        const {type, data, width} = this.props;

        switch (type) {
            case "picture": return width < 1100 ? null : <img className={'picture-image'} src={api_location + "/pictures/" + data.picture}/>
            case "video":
                const {playing} = this.state;
                const video_url = api_location + "/video/" + data.video;
                const preview_url = api_location + "/video/preview.jpg";
                return  <div className="--video" onClick={this.play}>
                    <video  preload="auto" poster={preview_url} ref={video => this.video = video} autoPlay={true} onEnded={() => this.setState({playing: false})}>
                        <source src={video_url} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                        <source src={video_url} type='video/ogg; codecs="theora, vorbis"'/>
                        <source src={video_url} type='video/webm; codecs="vp8, vorbis"'/>
                        Тег video не поддерживается вашим браузером.
                        <a href={video_url}>Скачайте видео</a>.
                    </video>
                    <div className={`-play-button ${playing ? "-play" : "-stop"}`}/>
                </div>;
            case "product": return <Product data={data} width={width}/>;
            case "review": return <Review data={data} width={width}/>;
            default: return null;
        }
    }

    render() {
        const {show, phone, phone_warn, name, name_warn} = this.state;
        const {data, t, type} = this.props;

        return <div className={"modal-container"}>
            <div className={`overlay${show ? ' -show' : ""}`} onClick={this.hideModal}/>
                <div className={`modal ${type}${show ? ' -show' : ""}`}>
                    <CloseButton onClick={this.hideModal}/>
                    <div className={"--data"}>
                        {
                            this.getData()
                        }
                    </div>
                    <div className={"--form"}>
                        <div className="title">{data.title}</div>
                        <div className="text-inputs">
                            <InputMask className={`-text-input --phone slideInDown delay4${phone_warn ? " -warn" : ""}`} name={"phone"} onChange={this.onChange} value={phone} type={"tel"} placeholder={t.placeholder_phone} mask="+375 (99) 999 99 99" maskChar=" "/>
                            <input className={`-text-input --name slideInDown delay5${name_warn ? " -warn" : ""}`} name={"name"} onChange={this.onChange} value={name} type={"text"} placeholder={t.placeholder_name} autoComplete={"off"} autoCorrect={"off"}/>
                        </div>

                        <ButtonArrow
                            className={"--button slideInDown delay6"}
                            topText={data.button_text_1}
                            bottomText={data.button_text_2}
                            width={223}
                            hideArrow={true}
                            onClick={this.send}
                        />
                        <div className="-description slideInDown delay7">
                            {t.description}
                        </div>
                    </div>
                </div>
            </div>
    }
}

const CloseButton = props => {

    return <div className="close-button" onClick={props.onClick}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM14.8766 14.9891L13.3297 14.982L11 12.2047L8.67266 14.9797L7.12344 14.9867C7.02031 14.9867 6.93594 14.9047 6.93594 14.7992C6.93594 14.7547 6.95234 14.7125 6.98047 14.6773L10.0297 11.0445L6.98047 7.41406C6.95215 7.37971 6.93643 7.3367 6.93594 7.29219C6.93594 7.18906 7.02031 7.10469 7.12344 7.10469L8.67266 7.11172L11 9.88906L13.3273 7.11406L14.8742 7.10703C14.9773 7.10703 15.0617 7.18906 15.0617 7.29453C15.0617 7.33906 15.0453 7.38125 15.0172 7.41641L11.9727 11.0469L15.0195 14.6797C15.0477 14.7148 15.0641 14.757 15.0641 14.8016C15.0641 14.9047 14.9797 14.9891 14.8766 14.9891Z" fill="black" fill-opacity="0.7"/>
        </svg>
    </div>
}

import React from "react";
import "./styles.scss"
import InputMask from "react-input-mask";
import ButtonArrow from "../ButtonArrow";
import {api_location} from "../../ajax";
import Product from "./Product";
import Review from "./Review/Review";
import ajaxAdmin from "../Admin/ajaxAdmin";
import api from "../Admin/apiAdmin";
import sendRequest from "../../utils/sendRequest";

// const AmoCRMButton = require( 'amocrm-js' );

const URL_HASH = "#modal";

class Modal extends React.Component {

    state = {
        show: false,
        phone: "",
        name: "",
        phone_warn: false,
        name_warn: false,
        playing: true
    }
    componentDidMount() {
        this.showModal();
        if (window.location.pathname !== "/admin") {
            window.history.pushState({}, "", "#modal");
        }
        window.addEventListener('hashchange', () => {
            if (window.location.hash !== URL_HASH) {
                this.hideModal()
            }
        })
    }

    showModal = () => {
        setTimeout(() => {
            this.setState({show: true})
        }, 50);
    }

    hideModal = () => {
        this.setState({show: false})
        setTimeout(() => {
            if (window.location.hash === URL_HASH) {
                window.history.replaceState(null, null, ' ');
            }
            this.props.showModal({
                show: false,
                data: null,
                type: ""
            })
        }, 300)
    }

    send = async () => {
        // this.hideModal();
        // return this.props.onFinish();

        const {phone, name} = this.state;
        let warn = false;
        if (phone === "" || !phone.match(/^\+375 \((17|29|33|44|25)\) [0-9]{3} [0-9]{2} [0-9]{2}$/)) {
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

        const {type, data} = this.props;

        sendRequest({name, phone, type, data})

        // const crm = new AmoCRMButton({
        //     domain: 'tigerwoodby',
        //     auth: {
        //         client_id: '961a92e2-b60e-4c9f-a78b-d6f03f1ea01a', // ID интеграции
        //         client_secret: 'LcT8pQ8tnenz1KKIrmJBQXRleU3iF84dSiaz6z3Jm5KWfZXmfLqcKe2AM7foHotc', // Секретный ключ
        //         // redirect_uri: 'redirectUri', // Ссылка для перенаправления
        //         code: 'def502008a1ba7b22a3e67b5c0b4af87f9d4622e7c0e3b8419b7542d613414f2eca4dc3d30eaa5abfc0d8a5f387e4a95ad3fa20239a3db1f9775acd871e90860141582776ef8800ebbeece784d298021c146e4c3bb2431b2087291fa41d49a9f4915d6b12ad5a20d14b6977ed0a21ec8ed1149fed04c14bce6e289dc1fc803e7ee594b3371eb5f098104d6d849e4eb93b7d1cdb73f57fd88a7941b4575e07eb0648f0bb96e06effa2661d219562ef471399f74fdc12b3591e948c75e4eb8c0cc6962cec8f452124cc75b1fa3e3e39d963ad8fffc09b75fcba2b156fc21ad867e7fce68fe540bb17b6a9a21a93abd67654522501270ae660a6b1142d1748fec0f8dd49984e66c92eeb3826c413045d9c8026b2abdf19ebaaef5e9ae2ea414465e0798a98231ac08329350a2911467a6157fbe3c7c7aeff386373e4a5f949383e6d675883737059cf7a9e223e09db94c31699a8b3db349a2eaeda7d1412eb9acf84fdf8e39fffd88347a00264d1e6a53f99f2a858720b47a7ce615ae57d14355b43d57b30d83a21aa84d0f1024b76e43796dfa41bdba3b729433f8e0485b4c39697736d750aa7f6129f759419b891eee4ec45d81cc431ab03079079ae126385668775454912c5b415422',
        //
        //         redirect_uri: 'https://3dea21ea6c8f.ngrok.io/',
        //         // server: {
        //         //     port: 3000
        //         // }
        //     },
        // });
        //
        // const data = await crm.request.get("/api/v4/leads");
        // console.log(data);
        // //
        // // console.log(crm)
        // // const response = await crm.request( 'GET', '/api/v4/account' );
        // // console.log(response)

        this.hideModal();
        this.props.onFinish();
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

export default Modal;

const CloseButton = props => {

    return <div className="close-button" onClick={props.onClick}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM14.8766 14.9891L13.3297 14.982L11 12.2047L8.67266 14.9797L7.12344 14.9867C7.02031 14.9867 6.93594 14.9047 6.93594 14.7992C6.93594 14.7547 6.95234 14.7125 6.98047 14.6773L10.0297 11.0445L6.98047 7.41406C6.95215 7.37971 6.93643 7.3367 6.93594 7.29219C6.93594 7.18906 7.02031 7.10469 7.12344 7.10469L8.67266 7.11172L11 9.88906L13.3273 7.11406L14.8742 7.10703C14.9773 7.10703 15.0617 7.18906 15.0617 7.29453C15.0617 7.33906 15.0453 7.38125 15.0172 7.41641L11.9727 11.0469L15.0195 14.6797C15.0477 14.7148 15.0641 14.757 15.0641 14.8016C15.0641 14.9047 14.9797 14.9891 14.8766 14.9891Z" fill="black" fill-opacity="0.7"/>
        </svg>
    </div>
}

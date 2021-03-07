import React from "react";
import "./styles.scss";

import image from "./images/s5-video.jpg";
import {api_location} from "../../../ajax";

const SECTION_NUMBER = "06"

export default class Section extends React.Component {

    state = {
        playing: false
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

    render() {
        const {t} = this.props;
        const {playing} = this.state;
        const video_url = api_location + "/video/" + t.video;
        const preview_url = api_location + "/video/" + t.preview;
        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated}`}>
                <div className={`---content`}>
                    <div className="-s06-header">
                        <div className="-s06-header-1 slideInDown delay1">{t.header_1}</div>
                        <div className="-s06-header-2 slideInDown delay2">{t.header_2}</div>
                        <div className="-s06-header-3 slideInDown delay3">{t.header_3}</div>
                    </div>
                    <div className="-s5-video">
                        <div className="-video-content slideInRight">
                            <div className="--video" onClick={this.play}>
                                <video  preload="auto" poster={preview_url} ref={video => this.video = video}>
                                    <source src={video_url} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                                    <source src={video_url} type='video/ogg; codecs="theora, vorbis"'/>
                                    <source src={video_url} type='video/webm; codecs="vp8, vorbis"'/>
                                    Тег video не поддерживается вашим браузером.
                                    <a href={video_url}>Скачайте видео</a>.
                                </video>
                                <div className={`-play-button ${playing ? "-play" : "-stop"}`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

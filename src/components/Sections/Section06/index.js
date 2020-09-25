import React from "react";
import "./styles.scss";
import t from "./text.json";

import image from "./images/s5-video.jpg";

const SECTION_NUMBER = "06"

export default class Section extends React.Component {

    render() {

        return (
            <div className={`section --s${SECTION_NUMBER}`}>
                <div className={`---content`}>
                    <div className="-s06-header">
                        <div className="-s06-header-1">{t.header_1}</div>
                        <div className="-s06-header-2">{t.header_2}</div>
                        <div className="-s06-header-3">{t.header_3}</div>
                    </div>
                    <div className="-s5-video">
                        <div className="-video-content">
                            <img src={image} alt=""/>
                            <div className="-play-button"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
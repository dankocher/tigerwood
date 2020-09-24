import React from "react";
// import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import "./styles.scss";
import t from "./text.json";
import formatText from "../../../utils/formatText";
// import Map from "./Map";

const SECTION_NUMBER = "11"

const coordinates = [53.907684, 27.484621]

export default class Section extends React.Component {

    state = {
        template: null
    }
    createTemplateLayoutFactory = ymaps => {

        const svgSize = this.props.isMobile ? 50 : 70;
        if (ymaps && !this.state.template) {
            this.setState({
                template: ymaps.templateLayoutFactory.createClass(
                    `<div class="-s-marker-container">
                        <div class="-marker"><svg width="${svgSize}" height="${svgSize}" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.9037 20.2648C41.1307 19.8395 41.3165 19.4143 41.4404 18.9891C41.7087 18.1386 41.75 17.3436 41.6468 16.5671C41.5642 15.7905 41.3372 15.0695 40.9656 14.3484C40.594 13.6274 40.0573 12.9248 39.4587 12.4071C38.8601 11.8894 38.1995 11.5382 37.5803 11.3163C36.9817 11.0944 36.4243 10.9835 35.9083 11.002C35.3922 11.002 34.8968 11.1314 34.4633 11.3718C34.0298 11.6306 33.6376 12.0189 33.1216 12.5181C32.7087 12.9248 32.1927 13.4055 31.6973 13.9047C29.9014 13.35 27.961 13.0542 25.9587 13.0542C23.9564 13.0542 22.0161 13.35 20.2202 13.9047C19.7248 13.387 19.2087 12.9248 18.7959 12.5181C18.2798 12.0189 17.8876 11.6306 17.4541 11.3718C17.0206 11.1129 16.5252 11.002 16.0092 11.002C15.4931 11.002 14.9564 11.0944 14.3372 11.3163C13.7385 11.5382 13.0573 11.8894 12.4587 12.4071C11.8601 12.9248 11.3234 13.6274 10.9518 14.3484C10.5803 15.0695 10.3532 15.7905 10.2706 16.5671C10.1881 17.3436 10.2294 18.1386 10.4771 18.9891C10.6009 19.4143 10.8073 19.8395 11.0138 20.2648C9.13532 22.8347 8 25.9408 8 29.2872C8 38.8828 19.3532 52.1206 24.039 57.168C25.0711 58.2773 26.9495 58.2773 27.9817 57.168C32.6261 52.1206 44 38.8828 44 29.2872C44 25.9408 42.8647 22.8347 40.9037 20.2648ZM13.8417 19.9505C13.6766 19.7101 13.5528 19.3773 13.4289 19.0075C13.2638 18.4899 13.1193 17.9167 13.1193 17.399C13.1193 16.8814 13.2431 16.4191 13.4289 16.0864C13.6147 15.7536 13.883 15.5317 14.1101 15.4208C14.3372 15.3098 14.5229 15.3283 14.6674 15.4208C14.8326 15.5132 14.9564 15.7166 15.1422 15.9569C15.328 16.1973 15.555 16.5116 15.8647 16.8814C16.0711 17.1217 16.2982 17.4175 16.4633 17.6764C15.5138 18.342 14.6261 19.1 13.8417 19.9505ZM26 35.0557C22.4495 35.0557 19.5803 32.4857 19.5803 29.3057C19.5803 26.1257 22.4495 23.5557 26 23.5557C29.5505 23.5557 32.4197 26.1257 32.4197 29.3057C32.4197 32.4857 29.5505 35.0557 26 35.0557ZM38.5711 19.0075C38.4472 19.3588 38.3234 19.6916 38.1583 19.9505C37.3739 19.1185 36.4862 18.3604 35.5161 17.6949C35.6812 17.436 35.9083 17.1587 36.1147 16.8999C36.4243 16.5301 36.6514 16.2158 36.8372 15.9754C37.0229 15.7351 37.1468 15.5317 37.3119 15.4393C37.4771 15.3468 37.6628 15.3283 37.8693 15.4393C38.0963 15.5502 38.344 15.7536 38.5505 16.1048C38.7362 16.4376 38.8601 16.8998 38.8601 17.4175C38.8807 17.9167 38.7362 18.4899 38.5711 19.0075Z" fill="#9B51E0"/>
                            </svg>
                        </div>
                        <div class="-marker-content">
                            <div class="-m-title">${t.m_title}</div>
                            <div class="-m-address">${t.m_address}</div>
                            <div class="-m-time">${t.m_time}</div>
                        </div>
                    </div>`
                ),
            });
        }
    };
    render() {
        const {isMobile} = this.props;
        let center = isMobile ? [53.9242684, 27.524621] : coordinates;
        let zoom = isMobile ? 12 : 14;
        let iconImageOffset = isMobile ? [-40, -99] : [-70, -160]
        return (
            <div className={`section --s${SECTION_NUMBER}`}>
                <div className={`---content`}>

                    <YMaps
                        query={{
                            apiKey: '4b74abc0-ac62-4239-b2b2-5dabca5594ac&lang=ru_RU',
                        }}
                        version={"2.1"}
                    >
                        <div className='ymap-container'>
                            <Map
                                defaultState={{ center, zoom }}
                                width="100%"
                                height="100%"
                                onLoad={this.createTemplateLayoutFactory}
                                modules={["geoObject.addon.balloon", "geoObject.addon.hint", "templateLayoutFactory", "layout.ImageWithContent"]}
                            >
                                <Placemark
                                    geometry={coordinates}
                                    options={{
                                        iconLayout:'default#imageWithContent',
                                        iconContentLayout: this.state.template,
                                        iconImageSize: [0, 0],
                                        iconImageOffset,
                                        iconContentOffset: [0, 0],
                                    }}
                                />
                            </Map>
                        </div>
                    </YMaps>

                </div>
            </div>
        );
    }
}

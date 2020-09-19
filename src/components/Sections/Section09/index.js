import React from "react";
import "./styles.scss";
import t from "./text.json";
import formatText from "../../../utils/formatText";

const SECTION_NUMBER = "09"

export default class Section extends React.Component {

    render() {

        return (
            <div className={`section --s_${SECTION_NUMBER}`}>
                <div className={`---content`}>
                    <div className="-s9-text">
                        <div className="-header-1">{t.header_1}</div>
                        <div className="-header-2">{t.header_2}</div>
                        <div className="delivery-text">
                            <div className="delivery-title">{t.delivery.title}</div>
                            <ul className="delivery-features">{
                                t.delivery.features.map((f, i) => (
                                    <li key={i} className="-f">{f}</li>
                                ))
                            }</ul>

                            <div className="-pickup">
                                <div className="pickup-title">{formatText(t.pickup)}</div>
                                <div className="pickup-address">{t.pickup_address}</div>
                            </div>

                            <div className="delivery-title --russia">{t.delivery_russia.title}</div>
                            <ul className="delivery-features --russia">{
                                t.delivery_russia.features.map((f, i) => (
                                    <li key={i} className="-f">{f}</li>
                                ))
                            }</ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




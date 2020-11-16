import React from "react";
import "./styles.scss";
import formatText from "../../../utils/formatText";

const SECTION_NUMBER = "09"

export default class Section extends React.Component {

    render() {
        const {t} = this.props;

        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated} slideInRightAfter`}>
                <div className={`---content`}>
                    <div className="-s9-text">
                        <div className="-header-1 slideInDown delay1">{t.header_1}</div>
                        <div className="-header-2 slideInDown delay2">{t.header_2}</div>
                        <div className="delivery-text">
                            <div className="delivery-title slideInDown delay3">{t.delivery.title}</div>
                            <ul className="delivery-features slideInDown delay4">{
                                t.delivery.features.map((f, i) => (
                                    <li key={i} className={`-f slideInDown delay${i+4}`}>{f}</li>
                                ))
                            }</ul>

                            <div className="-pickup">
                                <div className="pickup-title slideInDown delay6">{formatText(t.pickup)}</div>
                                <div className="pickup-address slideInDown delay7">{t.pickup_address}</div>
                            </div>

                            <div className="delivery-title --russia slideInDown delay8">{t.delivery_russia.title}</div>
                            <ul className="delivery-features --russia slideInDown delay9">{
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




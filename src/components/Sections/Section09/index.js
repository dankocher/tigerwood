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
                            <div className="delivery-title slideInDown delay3">{t.delivery_title}</div>
                            <ul className="delivery-features slideInDown delay4">
                                <li className={`-f slideInDown delay4`}>{t.delivery_feature_1}</li>
                                <li className={`-f slideInDown delay5`}>{t.delivery_feature_2}</li>
                                <li className={`-f slideInDown delay6`}>{t.delivery_feature_3}</li>
                                <li className={`-f slideInDown delay7`}>{t.delivery_feature_4}</li>
                              </ul>

                            <div className="-pickup">
                                <div className="pickup-title slideInDown delay6">{formatText(t.pickup)}</div>
                                <div className="pickup-address slideInDown delay7">{t.pickup_address}</div>
                            </div>

                            <div className="delivery-title --russia slideInDown delay8">{t.delivery_russia_title}</div>
                            <ul className="delivery-features --russia slideInDown delay9">
                                <li className="-f">{t.delivery_feature_russia_1}</li>
                                <li className="-f">{t.delivery_feature_russia_2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




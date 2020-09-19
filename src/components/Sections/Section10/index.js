import React from "react";
import "./styles.scss";
import t from "./text.json";
import formatText from "../../../utils/formatText";

const SECTION_NUMBER = "10"

export default class Section extends React.Component {

    render() {

        return (
            <div className={`section --s_${SECTION_NUMBER}`}>
                <div className={`---content`}>
                    <div className="-header-1">{t.header_1}</div>
                    <div className="-header-2">{t.header_2}</div>
                </div>
            </div>
        );
    }
}


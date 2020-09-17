import React from "react";
import "./styles.scss";
import t from "./text.json";
import formatText from "../../../utils/formatText";

const SECTION_NUMBER = "07"

export default class Section extends React.Component {

    render() {

        return (
            <div className={`section --s_${SECTION_NUMBER}`}>
                <div className={`--s_${SECTION_NUMBER}-content`}>

                </div>
            </div>
        );
    }
}


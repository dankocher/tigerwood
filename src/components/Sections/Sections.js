import React from "react";
import "./styles.scss";
import formatText from "../../utils/formatText";

import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";

import t from "../../translates";

const sections = [1, 2, 3];

class Sections extends React.Component {
    //
    // state = {
    //     content: "test"
    // }

    getTestSection = (amount = 100) => {
        let content = "";
        for (let i = 1; i <= amount; i++) {
            content += t.lorem_ipsum
            if (i < amount) {
                content += "\n"
            }
        }

        return content;
    }

    getSection = i => {
        switch (i) {
            case 1: return <Section01 key={`section-01`}/>
            case 2: return <Section02 key={`section-02`}/>
            case 3: return <Section03 key={`section-03`}/>
            default: return formatText(this.getTestSection(100), "section --temporal")
        }
    }

    render() {
        return (
            <div className={`sections`}>
                <div className="content">
                    {sections.map(i => this.getSection(i))}
                </div>
            </div>
        );
    }
}

export default Sections;



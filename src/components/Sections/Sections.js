import React from "react";
import "./styles.scss";
// import formatText from "../../utils/formatText";

// import Section01 from "./Section01";
// import Section02 from "./Section02";
// import Section03 from "./Section03";
// import Section04 from "./Section04";
// import Section05 from "./Section05";
// import Section06 from "./Section06";
// import Section07 from "./Section07";
// import Section08 from "./Section08";
// import Section09 from "./Section09";
// import Section10 from "./Section10";
// import Section11 from "./Section11";

// import t from "../../translates";
import Section from "./Section";

const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

class Sections extends React.Component {
    //
    // state = {
    //     content: "test"
    // }

    // getTestSection = (amount = 100) => {
    //     let content = "";
    //     for (let i = 1; i <= amount; i++) {
    //         content += t.lorem_ipsum
    //         if (i < amount) {
    //             content += "\n"
    //         }
    //     }
    //
    //     return content;
    // }

    // getSection = i => {
    //     switch (i) {
    //         case 1: return <Section01 key={`section-01`} {...this.props}/>
    //         case 2: return <Section02 key={`section-02`} {...this.props}/>
    //         case 3: return <Section03 key={`section-03`} {...this.props}/>
    //         case 4: return <Section04 key={`section-04`} {...this.props}/>
    //         case 5: return <Section05 key={`section-05`} {...this.props}/>
    //         case 6: return <Section06 key={`section-06`} {...this.props}/>
    //         case 7: return <Section07 key={`section-07`} {...this.props}/>
    //         case 8: return <Section08 key={`section-08`} {...this.props}/>
    //         case 9: return <Section09 key={`section-09`} {...this.props}/>
    //         case 10: return <Section10 key={`section-10`} {...this.props}/>
    //         case 11: return <Section11 key={`section-11`} {...this.props}/>
    //         default: return formatText(this.getTestSection(100), "section --temporal")
    //     }
    // }

    render() {
        return (
            <div className={`sections`}>
                <div className="content">
                    {sections.map(i => <Section number={i} {...this.props}/>)}
                </div>
            </div>
        );
    }
}

export default Sections;



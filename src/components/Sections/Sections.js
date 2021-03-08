import React from "react";
import "./styles.scss";
import Section from "./Section";
// const Section = React.lazy(() => import("./Section"));

class Sections extends React.Component {

    render() {
        return (
            <div className={`sections`}>
                <div className="content">
                    {this.props.t.sections.map(i => <Section number={i} {...this.props}/>)}
                </div>
            </div>
        );
    }
}

export default Sections;



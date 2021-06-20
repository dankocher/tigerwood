import React from "react";
import "./styles.scss";
import Section from "./Section";

class Sections extends React.Component {

    render() {
        return (
            <div className={`sections`}>
                <div className="content">
                    {
                        this.props.number ?
                            <Section number={this.props.number} {...this.props}/>
                            :
                            this.props.t.sections.map(i => <Section number={i} {...this.props}/>)
                    }
                </div>
            </div>
        );
    }
}

export default Sections;

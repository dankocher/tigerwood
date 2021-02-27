import React from "react";
import "./styles.scss"
import Section11 from "../Sections/Section11";
import Section12 from "../Sections/Section12";
import ajax from "../../ajax";

export default class Document extends React.Component {

    state = {
        title: "",
        text: null,
    }

    componentDidMount() {
        this.getDocument()
    }

    getDocument = async () => {
        let document = await ajax(`/documents/${this.props.doc}.json`);
        const {title, text} = document;
        let text_array = text.split("\n");
        this.setState({title, text: text_array})
    }

    render() {

        const  {title, text} = this.state;

        if (text === null) return null;
        return <div className="sections">
            <div className="content">

                {
                    <div className="section document animated">
                        <div className="title">
                            {title}
                        </div>
                        <div className="text">
                            {
                                text.map((t,i) => (
                                    <p key={`text${i}`}>{t}</p>
                                ))
                            }
                        </div>

                    </div>
                }

                {/*<Section11  t={this.props.t.section_11}/>*/}
                <Section12 {...this.props} t={this.props.t.section_12}/>
            </div>
        </div>
    }
}

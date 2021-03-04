import React from "react";
import "./styles.scss";
import Section01 from "../../Sections/Section01";
import Section02 from "../../Sections/Section02";
import Section03 from "../../Sections/Section03";
import Section04 from "../../Sections/Section04";
import Section05 from "../../Sections/Section05";
import Section06 from "../../Sections/Section06";
import Section07 from "../../Sections/Section07";
import Section08 from "../../Sections/Section08";
import Section09 from "../../Sections/Section09";
import Section10 from "../../Sections/Section10";
import Section11 from "../../Sections/Section11";
import Section12 from "../../Sections/Section12";

import Header from "../../Header/Header";
import Modal from "../../Modal";
import {compareObjects} from "../../../utils/compareObjects";

export default class AdminSection extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            t: {...this.props.t},
            ready: false
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (!compareObjects(nextProps.t, this.props.t)) {
            this.setState({ready: false});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!compareObjects(prevProps.t, this.props.t)) {
            this.setState({t: this.props.t, ready: false});
            this.checkReady()
        }
    }

    componentDidMount() {
        this.checkReady()
    }

    checkReady = () => {
        switch (this.props.section) {
            // case "header": case "modal": case "section_1": case "section_2": case "section_4": case "section_5":
            // case "section_6": case "section_7": case "section_9": case "section_11": case "section_12":
            //     return this.setState({ready: true});
            case "section_3":
                //TODO: get products
                return this.setState({ready: false});
            case "section_8":
            //TODO: get reviews
                return this.setState({ready: false});
            case "section_10":
                //TODO: get show_rums
                return this.setState({ready: false});
            default: return this.setState({ready: true});

        }
    }

    getSection = (section) => {
        const {t} = this.state;
        switch (section) {
            case "header":
                return <>
                    <Header {...this.props} t={this.state.t}/>
                </>
            case "modal":
                return <Modal {...this.props} t={this.state.t} data={{
                    title: t.title,
                    button_text_1: t.button_text_1,
                    button_text_2: t.button_text_2,
                }} type={"default"} show={true}/>
            case "section_1": return <Section01 animated={false} {...this.props} t={this.state.t}/>
            case "section_2": return <Section02 animated={false} {...this.props} t={this.state.t}/>
            case "section_3": return <Section03 animated={false} {...this.props} t={this.state.t}/>
            case "section_4": return <Section04 animated={false} {...this.props} t={this.state.t}/>
            case "section_5": return <Section05 animated={false} {...this.props} t={this.state.t}/>
            case "section_6": return <Section06 animated={false} {...this.props} t={this.state.t}/>
            case "section_7": return <Section07 animated={false} {...this.props} t={this.state.t}/>
            case "section_8": return <Section08 animated={false} {...this.props} t={this.state.t}/>
            case "section_9": return <Section09 animated={false} {...this.props} t={this.state.t}/>
            case "section_10": return <Section10 animated={false} {...this.props} t={this.state.t}/>
            case "section_11": return <Section11 animated={false} {...this.props} t={this.state.t}/>
            case "section_12": return <Section12 animated={false} {...this.props} t={this.state.t}/>
        }
    }

    changeTranslate = (alias, value) => {
        let t = {
            ...this.state.t,
            [alias]: value
        };
        this.setState({t})
        if (this.props.saveTranslates) {
            this.props.saveTranslates(this.props.section, t)
        }
    }


    render() {
        const {section} = this.props;
        const {t, ready} = this.state;

        if (!ready) return null;

        return <div className="admin-section">
            <div className={'preview'}>
                {
                    this.getSection(section)
                }
            </div>
            <div className={"edit"}>
                <table className="translates">
                    <tbody>
                    {
                        Object.keys(t).map(alias => (
                            alias === "modal" || alias === "modal_video" || alias === "section_name" ? null :
                                <tr key={alias} className="translate">
                                    <td>{alias}</td>
                                    <td><textarea value={t[alias]} onChange={(e) => this.changeTranslate(alias, e.target.value)}/></td>
                                </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    }
}

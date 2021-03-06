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
import Product from "../../Modal/Product";
import {api_location} from "../../../ajax";
import AutoResizeTextarea from "../../AutoResizeTextarea";
import Products from "../Products";

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
        this.setState({ready: true});
    }

    getSection = (section) => {
        const {t} = this.state;
        switch (section) {
            case "products": return <Products t={this.props.translates.section_3}
                                    products={this.props.products}
                                    saveProducts={this.props.saveProducts}
                                    sortProducts={this.props.sortProducts}/>

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
            case "section_3": return <>
                <Section03 animated={false} {...this.props} t={this.state.t}/>
                <hr/>
                <Product width={500} data={{...productModel, t: this.state.t}}/>
            </>
            case "section_4": return <Section04 animated={false} {...this.props} t={this.state.t}/>
            case "section_5": return <Section05 animated={false} {...this.props} t={this.state.t}/>
            case "section_6": return <Section06 animated={false} {...this.props} t={this.state.t}/>
            case "section_7": return <Section07 animated={false} {...this.props} t={this.state.t}/>
            case "section_8": return <Section08 animated={false} {...this.props} t={this.state.t}/>
            case "section_9": return <Section09 animated={false} {...this.props} t={this.state.t}/>
            case "section_10": return <Section10 animated={false} {...this.props} t={this.state.t}/>
            case "section_11": return <Section11 animated={false} {...this.props} t={this.state.t}/>
            case "section_12": return <Section12 animated={false} {...this.props} t={this.state.t}/>
            default: return null;
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
                            alias === "modal" || alias === "modal_video" || alias === "section_name"
                            || alias === "options" || alias === "default_option"
                                ? null :
                                <tr key={alias} className="translate">
                                    <td>{alias}</td>
                                    <td>
                                        {/*<textarea value={t[alias]} onChange={(e) => this.changeTranslate(alias, e.target.value)}/>*/}
                                        <AutoResizeTextarea className={"translate-text"}
                                                            value={(t[alias] || "").toString()}
                                                            onChange={(value) => this.changeTranslate(alias, value)}
                                                            minHeight={20}
                                                            maxHeight={500}/>
                                    </td>
                                </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    }
}


const productModel = {
    "name": "Compact plus",
    "price": "от 153USD",
    "picture": api_location + "/products/001-natural.jpg",
    "pictures": ["001-natural.jpg", "001-natural.jpg", "001-natural.jpg"],
    "modules": 1,
    "features": [
        "Лесница",
        "Горка",
        "Трапеция"
    ],
    "facilities": [
        "Складывается и раскладывается за 1 минуту",
        "Сборка без инструмента",
        "Можно использовать в помещении и на улице",
        "Модули меняются местами",
        "Модули можно использовать по отдельности",
        "Можно дополнять"
    ],
    "included": [
        "Комплектация выбранными элементами",
        "Экологичная упаковка",
        "Доставка (Бесплатная от 300 руб.)",
        "Сборка – собран на производстве",
        "Фирменная раскраска",
        "Онлайн поддержка по вопросам развития ребенка",
        "Электронная книга по финансовой грамотности для самых маленьких",
        "Гарантия 12 месяцев"
    ]
};

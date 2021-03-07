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
import Reviews from "../Reviews";
import ShowRum from "../ShowRum";
import ModalEdit from "../ModalEdit";
import OptionsEdit from "../OptionsEdit";
import DropZone from "../../DropZone";
import Switch from "react-switch";
import addPicture from "../icons/add_picture.svg";
import addFile from "../icons/add_file.svg";
import addVideo from "../icons/add_video.svg";

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

            case "reviews": return <Reviews
                                    reviews={this.props.reviews}
                                    saveReviews={this.props.saveReviews}
                                    sortReviews={this.props.sortReviews}/>;

            case "show-rums": return <ShowRum
                                    showRums={this.props.show_rums}
                                    saveShowRums={this.props.saveShowRums}
                                    sortShowRums={this.props.sortShowRums}/>;

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
                {!t.modal ? null : <ModalEdit t={t.modal} onChange={(value) => this.changeTranslate("modal", value)}/>}
                {!t.modal_video ? null : <ModalEdit t={t.modal_video} onChange={(value) => this.changeTranslate("modal_video", value)}/>}
                {!t.options ? null : <OptionsEdit options={t.options} default_option={t.default_option}
                                               onChange={this.changeTranslate}/>}
                <table className="translates">
                    <tbody>
                    {   t.site_animations === undefined ? null :
                        <tr className={"translate"}>
                            <td>site_animations</td>
                            <td>
                                <Switch onChange={value => this.changeTranslate("site_animations", value)} checked={t.site_animations} />
                            </td>
                        </tr>
                    }
                    {
                        Object.keys(t).map(alias => (
                            alias === "modal" || alias === "modal_video"
                            || alias === "options" || alias === "default_option" || alias === "video" || alias === "preview"
                            || alias === "filename" || alias === "site_animations"
                                ? null :
                                <tr key={alias} className="translate">
                                    <td>{alias}</td>
                                    <td>
                                        {/*{alias === "video" ? <span>Видео нужно вручную скопировать в папку <b>api/video</b> на сервере и вставить название в след. поле</span> : null}*/}
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
                    {!t.video ? null :
                        <>
                            <tr className={"translate"}>
                                <td>video</td>
                                <td>
                                    <DropZone onUpload={name => this.addPicture("video", name)} path={"video"}>
                                        <div className="--add-picture -video">
                                            <video>
                                                <source src={api_location + "/video/" + t.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                                            </video>
                                            <div className="-hover-pic-container">
                                                <img className={'hover-pic'} src={addVideo} alt=""/>
                                            </div>
                                        </div>
                                    </DropZone>
                                </td>
                            </tr>
                            <tr className={"translate"}>
                                <td>preview</td>
                                <td>
                                    <DropZone onUpload={(name) => this.changeTranslate("preview", name)} path={"video"}>
                                        <div className="--add-picture -preview">
                                            <img className={'-picture -preview'} src={api_location + "/video/" + t.preview || addPicture} alt=""/>
                                            <div className="-hover-pic-container">
                                                <img className={'hover-pic'} src={addPicture} alt=""/>
                                            </div>
                                        </div>
                                    </DropZone>
                                </td>
                            </tr>
                        </>

                    }
                    {!t.filename ? null :
                        <tr className={"translate"}>
                            <td>filename</td>
                            <td>
                                <DropZone onUpload={(name) => this.changeTranslate("filename", name)} path={""} notRename={true}>
                                    <div className="--add-picture -preview">
                                        Перетащите файлы сюда
                                        <div className="-hover-pic-container">
                                            <img className={'hover-pic'} src={addFile} alt=""/>
                                        </div>
                                    </div>
                                </DropZone>
                                <div><a href={api_location + "/" + t.filename} target={"__blank"}>{t.filename}</a></div>
                            </td>
                        </tr>
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

import React from "react";
import Login from "./Login";
import "./styles.scss";
import ajaxAdmin from "./ajaxAdmin";
import api from "./apiAdmin";
import LeftMenu from "./LeftMenu";
import AdminSection from "./AdminSection";
import arrayMove from "array-move";
import ajax from "../../ajax";

const SESSION_NAME = "tgw_session";
const SECTION_NAME = "tgw_section";

class Admin extends React.Component {

    constructor(props) {
        super(props);

        let session = localStorage.getItem(SESSION_NAME);
        let section = localStorage.getItem(SECTION_NAME) || "products";
        this.state = {
            session,
            section,
            showButtonSave: false,
            products: []
        };
        this.translates = props.translates;
    }

    translates = {}

    componentDidMount() {
        this.checkSession(this.state.session)
        this.getProducts()
    }
    getProducts = async () => {
        let products = await ajax("/products.json");
        this.setState({products})
    }
    setSection = section => {
        this.setState({section})
        localStorage.setItem(SECTION_NAME, section)
    }

    checkSession = async (session) => {
        if (session) {
            let res = await ajaxAdmin(api.checkSession, {session});
            if (res.ok) {
                this.setState({session});
                localStorage.setItem(SESSION_NAME, session)
            }
        }
    }

    logout = async () => {
        let res = await ajaxAdmin(api.logout);
        if (res.ok) {
            this.setState({session: null});
            localStorage.removeItem(SESSION_NAME)
        }
    }
    saveTranslates = (section, t) => {
        this.translates = {
            ...this.translates,
            [section]: t
        }
        this.setState({showButtonSave: true});
    }

    sortProducts = ({oldIndex, newIndex}) => {
        this.setState(({products}) => ({
            products: arrayMove(products, oldIndex, newIndex),
        }));
        this.setState({showButtonSave: true})
    }
    saveProducts = products => {
        this.setState({products, showButtonSave: true});
    }
    saveReviews = (section, t) => {
        //TODO
        this.setState({showButtonSave: true})
    }
    saveShowRums = (section, t) => {
        //TODO
        this.setState({showButtonSave: true})
    }

    saveToServer = async () => {
        let resTranslates = await ajaxAdmin(api.saveJson, {file: "translates/ru.json", data: this.translates});
        let resProducts = await ajaxAdmin(api.saveJson, {file: "products.json", data: this.state.products});
        if (resTranslates.ok && resProducts.ok) {
            this.setState({showButtonSave: false})
        }
    }

    add = () => {
        if (this.state.section === "products") {
            const modelProduct = {
                "name": "",
                "modules": 1,
                "features": [],
                "natural": {
                    "price": "",
                },
                "color": {
                    "price": "",
                }
            };
            this.setState({
                products: [
                    ...this.state.products, modelProduct
                ]
            })
        }
    }

    render() {
        const {session, section, showButtonSave, products, reviews, show_rums} = this.state;

        return <div className="Admin">
            {   !session ?
                <Login onLogin={this.checkSession}/>
                :
                <div className={"admin-panel"}>
                    <div className="left-menu">
                        <div className="left-menu-container">
                            <LeftMenu {...this.props} onChange={this.setSection} selected={section}/>
                        </div>
                    </div>
                    <div className="content">
                            <div className="header-top">
                                <div className="left-side">
                                    {section === "products" || section === "reviews" || section === "show-rums" ?
                                        <button className="add-item" onClick={this.add}>Добавить</button> : null
                                    }
                                </div>
                                <div className="right-side">
                                    {showButtonSave ? <button onClick={() => this.saveToServer()}>Сохранить</button> : null}
                                    <div className={'logout-button'} onClick={this.logout}>Выйти</div>
                                </div>
                            </div>
                        <div className="content-container">
                            {
                                section === null ? null :
                                    <AdminSection section={section} {...this.props} t={this.props.translates[section] || {}}
                                                  products={products}
                                                  reviews={reviews}
                                                  show_rums={show_rums}
                                                  showModal={() => {}}
                                                  saveTranslates={this.saveTranslates}
                                                  sortProducts={this.sortProducts}
                                                  saveProducts={this.saveProducts}
                                                  saveReviews={this.saveReviews}
                                                  saveShowRums={this.saveShowRums}
                                    />
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    }
}

export default Admin;
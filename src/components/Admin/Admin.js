import React from "react";
import Login from "./Login";
import "./styles.scss";
import ajaxAdmin from "./ajaxAdmin";
import api from "./apiAdmin";
import LeftMenu from "./LeftMenu";
import AdminSection from "./AdminSection";
import arrayMove from "array-move";
import ajax from "../../ajax";
import AmoCRMButton from "./AmoCRMButton";

const SESSION_NAME = "tgw_session";
const SECTION_NAME = "tgw_section";

class Admin extends React.Component {

    constructor(props) {
        super(props);

        let session = localStorage.getItem(SESSION_NAME);
        let section = localStorage.getItem(SECTION_NAME) || "products";
        this.state = {
            session: "test",
            section,
            showButtonSave: false,
            products: [],
            reviews: [],
            show_rums: [],
            translates: {}
        };
    }

    componentDidMount() {
        this.checkSession(this.state.session);
    }

    checkSession = async (session) => {
        if (session) {
            let res = await ajaxAdmin(api.checkSession, {session});
            if (res.ok) {
                this.setState({session});
                localStorage.setItem(SESSION_NAME, session);

                this.getTranslates();
                this.getProducts();
                this.getReviews();
                this.getShowRums();
            } else {
                this.logout();
            }
        }
    }

    getTranslates = async () => {
        let translates = await ajax("/translates/ru.json");
        this.setState({translates});
    }
    getProducts = async () => {
        let products = await ajax("/products.json");
        this.setState({products})
    }
    getReviews = async () => {
        let reviews = await ajax("/reviews.json");
        this.setState({reviews})
    }
    getShowRums = async () => {
        let show_rums = await ajax("/show-rum.json");
        this.setState({show_rums})
    }
    setSection = section => {
        this.setState({section})
        localStorage.setItem(SECTION_NAME, section)
    }


    logout = async () => {
        let res = await ajaxAdmin(api.logout);
        if (res.ok) {
            this.setState({session: null});
            localStorage.removeItem(SESSION_NAME)
            localStorage.removeItem(SECTION_NAME)
        }
    }
    saveTranslates = (section, t) => {
        const translates = {
            ...this.state.translates,
            [section]: t
        }
        this.setState({translates, showButtonSave: true});
    }

    saveProducts = products => {
        this.setState({products, showButtonSave: true});
    }
    sortProducts = ({oldIndex, newIndex}) => {
        this.setState(({products}) => ({
            products: arrayMove(products, oldIndex, newIndex),
            showButtonSave: true
        }));
    }

    saveReviews = (reviews) => {
        this.setState({reviews, showButtonSave: true})
    }
    sortReviews = ({oldIndex, newIndex}) => {
        this.setState(({reviews}) => ({
            reviews: arrayMove(reviews, oldIndex, newIndex),
            showButtonSave: true
        }));
    }

    saveShowRums = (show_rums) => {
        this.setState({show_rums, showButtonSave: true})
    }
    sortShowRums = ({oldIndex, newIndex}) => {
        this.setState(({show_rums}) => ({
            show_rums: arrayMove(show_rums, oldIndex, newIndex),
            showButtonSave: true
        }));
    }

    saveToServer = async () => {
        let resTranslates = await ajaxAdmin(api.saveJson, {file: "translates/ru.json", data: this.state.translates});
        let resProducts = await ajaxAdmin(api.saveJson, {file: "products.json", data: this.state.products});
        let resReviews = await ajaxAdmin(api.saveJson, {file: "reviews.json", data: this.state.reviews});
        let resShowRums = await ajaxAdmin(api.saveJson, {file: "show-rum.json", data: this.state.show_rums});
        if (resTranslates.ok && resProducts.ok && resReviews.ok && resShowRums.ok) {
            this.setState({showButtonSave: false});
            // this.checkSession(this.state.session);
            this.props.updateTranslates();
        }
    }

    add = () => {
        switch (this.state.section) {
            case "products" :
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
                break;
            case "reviews":
                this.setState({
                    reviews: [...this.state.reviews, {pictures: []}]
                })
                break;
            case "show-rums":
                this.setState({
                    show_rums: [...this.state.show_rums, {name: "", features: []}]
                })
                break;
            default: break;
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
                                    <AmoCRMButton hideInputs={true}/>
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
                                                  sortProducts={this.sortProducts}
                                                  saveProducts={this.saveProducts}

                                                  reviews={reviews}
                                                  saveReviews={this.saveReviews}
                                                  sortReviews={this.sortReviews}

                                                  show_rums={show_rums}
                                                  saveShowRums={this.saveShowRums}
                                                  sortShowRums={this.sortShowRums}

                                                  showModal={() => {}}
                                                  saveTranslates={this.saveTranslates}
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

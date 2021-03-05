import React from "react";
import Login from "./Login";
import "./styles.scss";
import ajaxAdmin from "./ajaxAdmin";
import api from "./apiAdmin";
import LeftMenu from "./LeftMenu";
import AdminSection from "./AdminSection";

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
            showButtonSave: false
        };
        this.translates = props.translates;
    }

    translates = {}

    componentDidMount() {
        this.checkSession(this.state.session)
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
        this.setState({showButtonSave: true})
    }
    saveTranslatesToServer = async () => {
        let res = await ajaxAdmin(api.saveJson, {file: "translates/ru.json", data: this.translates});
        if (res.ok) {
            this.setState({showButtonSave: false})
        }
    }

    render() {
        const {session, section, showButtonSave} = this.state;

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
                                {showButtonSave ? <button onClick={() => this.saveTranslatesToServer()}>Сохранить</button> : null}

                                <div className={'logout-button'} onClick={this.logout}>Выйти</div>
                            </div>
                        <div className="content-container">
                            {
                                section === null ? null :
                                    <AdminSection section={section} {...this.props} t={this.props.translates[section] || {}}
                                                  showModal={() => {}}
                                                  saveTranslates={this.saveTranslates}/>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    }
}

export default Admin;

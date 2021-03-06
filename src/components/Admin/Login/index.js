import React from "react";
import "./styles.scss";
import ajaxAdmin from "../ajaxAdmin";
import api from "../apiAdmin";
const crypto = require('crypto');

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "",
            pass: "",
        };
    }

    login = async  () => {

        const {user} = this.state;
        const pass = crypto.createHash('sha1').update(this.state.pass).digest('hex');
        let res = await ajaxAdmin(api.login, {pass, user});
        if (res.ok) {
            this.props.onLogin(res.session_id)
        } else {
            alert("Неверный пользователь или пароль")
        }
    }

    render() {
        const {pass, user} = this.state;

        return <div className="login">
            <div className="block">
                <input type="text" placeholder={"Пользователь"} value={user} onChange={e => this.setState({user: e.target.value})}/>
                <input type="password" placeholder={"Пароль"} value={pass} onChange={e => this.setState({pass: e.target.value})}/>
                <button type="pass" className="user" onClick={this.login}>Войти</button>
            </div>
        </div>
    }
}

import React from "react";
import "./styles.scss";
import ajax from "../../../ajax";
import ajaxAdmin from "../ajaxAdmin";
import api from "../apiAdmin";

const AmoCRM = require( 'amocrm-js' );


class AmoCRMButton extends React.Component {

    state = {
        domain: "",
        client_id: "",
        client_secret: "",
        redirect_uri: "",
    }

    componentDidMount() {
        this.getConfig()
    }

    getConfig = async () => {
        let res = await ajax("/amocrm_config.json");
        const {domain, client_id, client_secret, redirect_uri} = res;
        this.setState({domain, client_id, client_secret, redirect_uri});
    }

    connect = () => {
        const {domain, client_id, client_secret, redirect_uri} = this.state;
        const crm = new AmoCRM({
            domain,
            auth: {client_id, client_secret, redirect_uri},
        });

        const url = crm.connection.getAuthUrl();
        window.open(url, '_blank');
    }

    saveToServer = async () => {
        let res = await ajaxAdmin(api.saveJson, {file: "amocrm_config.json", data: {...this.state}})
    }

    onChange = async (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {domain, client_id, client_secret, redirect_uri} = this.state;
        return <div className="-amo-section">
            <table>
                <tbody>
                <tr>
                    <td></td>
                    <td>
                        <b>Настройки для amoCRM</b><br/><br/>
                    </td>
                </tr>
                <tr>
                    <td>Домен:</td>
                    <td>
                        <input type="text" className="-host" name="domain" value={domain} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                </tr>
                <tr>
                    <td>Секретный ключ:</td>
                    <td>
                        <input type="text" className="-host" name="client_secret" value={client_secret} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                </tr>
                <tr>
                    <td>ID интеграции:</td>
                    <td>
                        <input type="text" className="-host" name="client_id" value={client_id} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                </tr>
                <tr>
                    <td>URL переадрезации:</td>
                    <td>
                        <input type="text" className="-host" name="redirect_uri" value={redirect_uri} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button onClick={this.connect}>Пройти верификацию</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}

export default AmoCRMButton;

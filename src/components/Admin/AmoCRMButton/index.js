import React from "react";
import "./styles.scss";
import ajax from "../../../ajax";
import ajaxAdmin from "../ajaxAdmin";
import api from "../apiAdmin";

const AmoCRM = require( 'amocrm-js' );


class AmoCRMButton extends React.Component {

    state = {
        email: "",
        subject: "",
        domain: "",
        client_id: "",
        client_secret: "",
        redirect_uri: "",
        pipeline_id: "",
        product_field_id: "",
        product_field_value: "",
        source: "",
        status: null,
        error: ""
    }

    componentDidMount() {
        this.getConfig()
        this.checkService();
    }

    getConfig = async () => {
        let res = await ajax("/amocrm_config.json");
        this.setState({...res});
    }

    checkService = async () => {
        let res = await ajaxAdmin(api.checkStatus);
        if (res.ok) {
            this.setState({status: true});
        } else {
            this.setState({status: false, error: res.error});
        }
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
        const {domain, client_id, client_secret, redirect_uri, pipeline_id, product_field_id, product_field_value, source, email, subject} = this.state;

        let res = await ajaxAdmin(api.saveJson, {file: "amocrm_config.json", data: {...this.state}})
    }

    onChange = async (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {email, subject, domain, client_id, client_secret, redirect_uri, pipeline_id, status, product_field_id, product_field_value, error, source, source_field_id, source_filed_value} = this.state;
        if (this.props.hideInputs) {
            return <div className="-amo-section" style={{backgroundColor: "transparent"}}>
                <div className={'-buttons'}>
                    {status ? null : <button onClick={this.connect}>Пройти верификацию</button>}
                    {status === null ? <span className={"status"}>Идет проверка...</span> :
                        <span className={`status ${status ? '-work' : '-error'}`}>{status === true ? "Интеграция работает!" : error}</span>}
                </div>
            </div>
        }
        return <div className="-amo-section">
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <b>Настройки Email</b><br/><br/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Email:</td>
                        <td>
                            <input type="text" className="-host" name="email" value={email} onChange={this.onChange} onBlur={this.saveToServer}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Тема:</td>
                        <td>
                            <input type="text" className="-host" name="subject" value={subject} onChange={this.onChange} onBlur={this.saveToServer}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><hr/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <b>Настройки для amoCRM</b><br/><br/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                    Домен:</td>
                    <td>
                    <input type="text" className="-host" name="domain" value={domain} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                    </tr>
                    <tr>
                    <td>Название источника:</td>
                    <td>
                    <input type="text" className="-host" name="source" value={source} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    ID поле источника:</td>
                    <td>
                    <hr/>
                    <input type="text" className="-host" name="source_field_id" value={source_field_id} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                    </tr>
                    <tr>
                    <td>Название источника:</td>
                    <td>
                    <input type="text" className="-host" name="source_filed_value" value={source_filed_value} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    ID поле продукта:</td>
                    <td>
                    <hr/>
                    <input type="text" className="-host" name="product_field_id" value={product_field_id} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                    </tr>
                    <tr>
                    <td>Тип продукта:</td>
                    <td>
                    <input type="text" className="-host" name="product_field_value" value={product_field_value} onChange={this.onChange} onBlur={this.saveToServer}/>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    ID воронки:</td>
                    <td>
                    <hr/>
                    <input type="text" className="-host" name="pipeline_id" value={pipeline_id} onChange={this.onChange} onBlur={this.saveToServer}/>
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
                        <div className={'-buttons'}>
                            <button onClick={this.connect}>Пройти верификацию</button>
                            {status === null ? <span className={"status"}>Идет проверка...</span> :
                                <span className={`status ${status ? '-work' : '-error'}`}>{status === true ? "Интеграция работает!" : error}</span>}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}

export default AmoCRMButton;

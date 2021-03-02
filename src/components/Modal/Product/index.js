import React from "react";
import "./styles.scss";
import {api_location} from "../../../ajax";

import includedIcon from "./included.svg";
import facilitiesIcon from "./facilities.svg";

export default class Product extends React.Component {

    state = {
        selected: 0
    }

    setSelected = selected => {
        this.setState({selected})
    }

    render() {
        const {data: {pictures = [], picture, features = [], price, included = [], facilities = [], name, modules, t}} = this.props;
        const {selected} = this.state;
        return <div className="modal-product">
            <div className="-pictures">
                <div className="-picture">
                    {
                        selected === "included" || selected === "facilities" ?
                            <div className={'-description-section'}>
                                <img className="-big-picture" src={picture} alt=""/>
                                <div className={`-title -${selected}`}>{t[selected]}</div>
                                {(this.props.data[`${selected}`] || []).map(f => (<span key={`${f}`} className={'-fasc'}>• {f}</span>))}
                            </div> :
                        <img className="-big-picture" src={api_location + "/products/" + pictures[selected]} alt=""/>
                    }
                </div>
                <div className="pictures-list">
                    {
                        pictures.map((p, i) => (
                            <img className={`--picture-option${selected === i ? " -selected" : ""}`} key={`${p}-${i}`} src={api_location + "/products/" + p} alt={name} onClick={() => this.setSelected(i)}/>
                        ))
                    }
                    <img className={`--picture-option${selected === 'facilities' ? " -selected" : ""}`} src={facilitiesIcon} onClick={() => this.setSelected("facilities")} alt={""}/>
                    <img className={`--picture-option${selected === 'included' ? " -selected" : ""}`} src={includedIcon} onClick={() => this.setSelected("included")} alt={""}/>
                </div>
            </div>
            <div className="bottom-section">
                <div className="-header">
                    <div className="-name">{name}</div>
                    <div className={"char-cont"}>
                        <div className="-modules">{t[`modules_${modules}`]}</div>
                        <div className="-price">{`${price}*`}</div>
                    </div>
                </div>
                <div className="-features">
                    {features.map((f, i) => (<>
                        {i===0 ? null : <i> </i>}
                        <span key={`${f}`} className={'-feature'}>•&#160;{f}</span></>))}
                </div>
                <div className="byn-bank-course">{t.byn_bank_course}</div>
            </div>
        </div>
    }
}

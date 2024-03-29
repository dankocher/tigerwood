import React from "react";
import "./styles.scss";
import formatText from "../../../utils/formatText";
import Mobile from "./Mobile";


const SECTION_NUMBER = "04"

export default class Section extends React.Component {

    render() {
        const {width, t} = this.props;
        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated}`}>
                <div className={`---content`}>
                        <div className="-s4-header slideInDown delay1">{t.header}</div>
                    {
                        width <= 1216 ? <Mobile t={t}/> :
                            <Picture t={t}/>
                    }
                </div>
            </div>
        );
    }
}

const Tail1 = <svg width="97" height="22" viewBox="0 0 97 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1C24 21.9999 55 30.9998 96 1" stroke="#F2994A" strokeWidth="2"/>
</svg>
const Tail2 = <svg width="189" height="59" viewBox="0 0 189 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 42.0001C56 59 129 79.9995 188 1" stroke="#9B51E0" strokeWidth="2"/>
</svg>
const Tail3 = <svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.00015 1C-1.33319 41 45.0004 92 107 75" stroke="#EB5757" strokeWidth="2"/>
</svg>
const Tail4 = <svg width="190" height="42" viewBox="0 0 190 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 41.0002C1.5 5.8335 85 -17 189 21.9999" stroke="#6FCF97" strokeWidth="2"/>
</svg>
const Tail5 = <svg width="192" height="146" viewBox="0 0 192 146" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 144C39 148.333 174.5 96 138 63.5C91.4973 22.0935 164.5 0.999987 191.5 1" stroke="#F3C336" strokeWidth="2"/>
</svg>
const Tail6 = <svg width="381" height="78" viewBox="0 0 381 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M379.5 1C376.5 44.5 172.2 104.6 1 61" stroke="#16C2F0" strokeWidth="2"/>
</svg>





const Picture = props => (<div className="-s4-picture-content">
    <Feature _class={"-f1 slideInDown delay1"} number={"01"} name={props.t.feature_1} tail={Tail1}/>
    <Feature _class={"-f2 slideInDown delay2"} number={"02"} name={props.t.feature_2} tail={Tail2}/>
    <Feature _class={"-f3 slideInDown delay3"} number={"03"} name={props.t.feature_3} tail={Tail3}/>
    <Feature _class={"-f4 slideInDown delay4"} number={"04"} name={props.t.feature_4} tail={Tail4}/>
    <Feature _class={"-f5 slideInDown delay5"} number={"05"} name={props.t.feature_5} tail={Tail5}/>
    <Feature _class={"-f6 slideInDown delay6"} number={"06"} name={props.t.feature_6} tail={Tail6}/>
</div>);

function Feature(props) {
    const {tail, _class, number, name} = props;
    return (<div className={`-s4-p-feature ${_class}`}>
        <div className="-number">{number}</div>
        <div className="-text">{formatText(name)}</div>
        <div className="-tail">{tail}</div>
    </div>)
}



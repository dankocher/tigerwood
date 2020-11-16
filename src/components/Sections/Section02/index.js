import React from "react";
import "./styles.scss";
import picture from "./images/s2-bg.png"

const SECTION_NUMBER = "02"

export default class Section extends React.Component {

    render() {
        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated}`}>
                <div className={`---content`}>
                    <S2Picture {...this.props}/>
                    <S2Header {...this.props}/>
                    <S2Button {...this.props}/>
                </div>
            </div>
        );
    }
}

const S2Picture = props => <div className="-s02-picture slideInRight">
    <img src={picture} alt={props.t.picture_alt || ""}/>
</div>

const S2Header = props => ( <div className="-s02-header">
    <div className="-s02-h-text1 slideInDown delay1">{props.width <= 800 ? props.t.m_text_header_1 : props.t.text_header_1}</div>
    <div className="-s02-h-text2 slideInDown delay2">{props.width <= 800 ? props.t.m_text_header_2 : props.t.text_header_2}</div>
    <div className="-s02-h-text3 slideInDown delay3">{props.width <= 800 ? props.t.m_text_header_3 : props.t.text_header_3}</div>
</div>)

const S2Button = props => <div className="-s02-button slideInDown delay4">
    <div className="-b-text1">{props.t.button_text_1}</div>
    <div className="-b-text2">{props.t.button_text_2}</div>

    <div className="b-right-circle">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M29 19V29H13V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M31 14H11V19H31V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 29V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 14H16.5C15.837 14 15.2011 13.7366 14.7322 13.2678C14.2634 12.7989 14 12.163 14 11.5C14 10.837 14.2634 10.2011 14.7322 9.73223C15.2011 9.26339 15.837 9 16.5 9C20 9 21 14 21 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 14H25.5C26.163 14 26.7989 13.7366 27.2678 13.2678C27.7366 12.7989 28 12.163 28 11.5C28 10.837 27.7366 10.2011 27.2678 9.73223C26.7989 9.26339 26.163 9 25.5 9C22 9 21 14 21 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <filter id="filter0_d" x="-1" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>

    </div>
</div>

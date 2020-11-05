import React from "react";
import t from "../Sections/Section01/text.json";
import "./styles.scss";

export default class ButtonArrow extends React.Component {

    render() {
        const {className, topText, bottomText, width} = this.props;
        const arrowWidth = this.props.arrowWidth || 86;

        return ( <div className={`-arrow-button ${className}`} style={{width}}>
            <div className="b-top-text">{topText}</div>
            <div className="b-bottom-text">{bottomText}
                <div className={"arrow"}>
                    <svg width={arrowWidth} height="8" viewBox={`0 0 ${arrowWidth} 8`} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/*<path d="M85.3536 4.35356C85.5488 4.1583 85.5488 3.84172 85.3536 3.64645L82.1716 0.464473C81.9763 0.269211 81.6597 0.269211 81.4645 0.464473C81.2692 0.659735 81.2692 0.976318 81.4645 1.17158L84.2929 4.00001L81.4645 6.82843C81.2692 7.0237 81.2692 7.34028 81.4645 7.53554C81.6597 7.7308 81.9763 7.7308 82.1716 7.53554L85.3536 4.35356ZM-4.37114e-08 4.5L85 4.50001L85 3.50001L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="white"/>*/}
                        <path d={`m0 4h${arrowWidth-1}`} fill="none" stroke="#fff" strokeWidth="1px"/>
                        <path d={`m${arrowWidth-4} 7 3-3-3-3`} fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px"/>

                    </svg>
                </div>
            </div>
        </div>)
    }
}

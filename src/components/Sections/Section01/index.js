import React from "react";
import "./styles.scss";
import Icon01 from "./icons/Icon1";
import Icon02 from "./icons/Icon2";
import Icon03 from "./icons/Icon3";
import formatText from "../../../utils/formatText";
import ButtonArrow from "../../ButtonArrow";

const SECTION_NUMBER = "01"

export default class Section extends React.Component {

    render() {
        const {t} = this.props;
        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated}`}>
                <div className="-s01-bg slideInRight"/>
                <S1header{...this.props}/>
                <Icons {...this.props}/>
                <ButtonArrow className={"-s01-button slideInDown delay4"}
                             topText={t.button_text_1}
                             bottomText={t.button_text_2}
                             width={378}
                             arrowWidth={86}
                             onClick={() => this.props.showModal({
                                     show: true,
                                     type: "picture",
                                     data: t.modal
                                 })}
                />
                <Box {...this.props} onClick={() => this.props.showModal({
                    show: true,
                    type: "video",
                    data: t.modal_video
                })}/>
            </div>
        );
    }
}

const S1header = props => <div className="-s01-header">
        <div className="header_1 slideInDown delay1">
            {props.t.text_header_1}
        </div>
        <div className="header_2 slideInDown delay2">
            {props.t.text_header_2}
        </div>
        <div className="header_3 slideInDown delay3">
            {props.t.text_header_3}
        </div>
    </div>;

const Icons = props => (<div className="-s01-icons">
    <div className="qual-icon slideInDown delay2">
        <Icon01 {...props}/>
        <div className="-i-t-icon">
            {formatText(props.t.text_icon_1)}
        </div>
    </div>
    <div className="qual-icon slideInDown delay3">
        <Icon02 {...props}/>
        <div className="-i-t-icon">
            {formatText(props.t.text_icon_2)}
        </div>
    </div>
    <div className="qual-icon slideInDown delay4">
        <Icon03 {...props}/>
        <div className="-i-t-icon">
            {formatText(props.t.text_icon_3)}
        </div>
    </div>
</div>)

const Box = props => ( <div className="-s01-box slideInDown delay5" onClick={props.onClick}>
    <div className="box-top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2329 0.790283C10.814 0.793529 8.4753 1.65754 6.63533 3.22767C4.79535 4.79779 3.57425 6.97151 3.19061 9.35974C3.10791 9.8809 0.599609 23.2098 0.599609 23.2098L8.05993 19.7136C9.40649 20.5091 10.9184 20.9833 12.4781 21.0993C14.0378 21.2154 15.6033 20.97 17.0527 20.3824C18.5022 19.7948 19.7965 18.8808 20.8351 17.7114C21.8737 16.542 22.6286 15.1488 23.041 13.6402C23.4534 12.1315 23.5123 10.548 23.213 9.01292C22.9137 7.4778 22.2643 6.03242 21.3153 4.78918C20.3664 3.54594 19.1435 2.53836 17.7416 1.84479C16.3398 1.15122 14.7969 0.790363 13.2329 0.790283ZM12.7434 5.25401C13.0129 5.25413 13.2763 5.33414 13.5002 5.48393C13.7242 5.63372 13.8987 5.84656 14.0017 6.09554C14.1047 6.34452 14.1316 6.61845 14.0789 6.88269C14.0263 7.14694 13.8964 7.38963 13.7058 7.58008C13.5152 7.77053 13.2724 7.90018 13.0081 7.95263C12.7438 8.00509 12.4699 7.978 12.221 7.87478C11.9721 7.77157 11.7594 7.59686 11.6098 7.37277C11.4602 7.14867 11.3804 6.88524 11.3805 6.61579C11.3804 6.43684 11.4156 6.25962 11.4841 6.09429C11.5526 5.92895 11.653 5.77875 11.7796 5.65226C11.9062 5.52577 12.0565 5.42549 12.2219 5.35716C12.3872 5.28882 12.5645 5.25377 12.7434 5.25401ZM14.7306 16.683H11.6388C11.455 16.683 11.2786 16.6099 11.1486 16.4799C11.0185 16.3499 10.9455 16.1735 10.9455 15.9896C10.9455 15.8057 11.0185 15.6294 11.1486 15.4994C11.2786 15.3693 11.455 15.2963 11.6388 15.2963H12.0728V10.8087H11.9923C11.7898 10.8087 11.5946 10.7329 11.4452 10.5961C11.2959 10.4593 11.2032 10.2715 11.1854 10.0698C11.1676 9.86803 11.2261 9.66694 11.3492 9.50615C11.4724 9.34536 11.6513 9.23654 11.8507 9.20113C11.879 9.19546 12.7672 9.01986 13.4663 8.88164C13.5677 8.86143 13.6725 8.864 13.7728 8.88915C13.8732 8.91429 13.9668 8.9614 14.0468 9.02708C14.1267 9.09275 14.1912 9.17535 14.2353 9.26892C14.2795 9.3625 14.3024 9.46471 14.3024 9.5682V15.2963H14.7306C14.9145 15.2963 15.0908 15.3693 15.2209 15.4993C15.3509 15.6294 15.424 15.8057 15.424 15.9896C15.424 16.1735 15.3509 16.3499 15.2209 16.4799C15.0908 16.6099 14.9145 16.683 14.7306 16.683L14.7306 16.683Z" fill="black"/>
        </svg>
        <div className="b-t-text">{formatText(props.t.block_text_1)}</div>
    </div>
    <div className="box-bottom">
        <div className="button-play"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0785 8.29839C17.0191 8.17937 16.9227 8.08287 16.8036 8.02354L0.885865 0.0647161C0.583426 -0.0864493 0.2157 0.0362336 0.0645701 0.338708C0.0220615 0.423761 -3.58159e-05 0.517567 5.63402e-08 0.612664V16.5303C-0.000143433 16.8685 0.273813 17.1427 0.611945 17.1429C0.707042 17.1429 0.800848 17.1208 0.885901 17.0783L16.8036 9.11944C17.1062 8.96859 17.2293 8.60101 17.0785 8.29839Z" fill="#FF7A00"/>
        </svg>
        </div>
        <div className="b-t-2">
            <div className="b-t-text-2">{props.t.block_text_2}</div>
            <div className="b-t-text-2a">{props.t.block_text_2a}</div>
        </div>
    </div>
</div>)

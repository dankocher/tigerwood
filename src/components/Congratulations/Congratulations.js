import React, {useEffect} from "react";
import "./styles.scss"
import Sections from "../Sections/Sections";
import image from "./images/image.png";

const Congratulations = ({isMobile, width, onFinish, t, animateOnlyFirstTime, animateFromBottom, scrollDirection}) => {

    const $t = t;
    t = $t.congratulations;

    useEffect(() => {
        window.onpopstate = (ev) => {
            onFinish();
        }
    }, []);

    return <div className={'congratulations'}>
        <div className="congratulations-container">

            <div className="congratulations-content">
                <div className="c-content">
                    <div className="content-text">
                        <div className="title">{t.title}</div>
                        <div className="description">{t.description}</div>
                        {width < 960 ? null : <ButtonBack title={t.back} onPress={onFinish}/>}
                    </div>
                    <div className="picture-container">
                        <img className={'picture'} src={image} alt=""/>
                    </div>
                    {width >= 960 ? null :
                        < ButtonBack title = {t.back} onPress={onFinish}/>
                    }
                </div>


            </div>
        </div>


        { width < 960 ? null :
            <Sections number={12} {
                ...{isMobile, width, t: $t, animateOnlyFirstTime, animateFromBottom, scrollDirection}
            }/>
        }
    </div>;
}

export default Congratulations;

const back = <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.33333 1.33331L1 4.66665L4.33333 7.99998" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 4.66663H6.33333C10.0153 4.66663 13 7.65129 13 11.3333V12" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const ButtonBack = ({title, onPress}) => {
    return <div className="button-back" onClick={onPress}>
        {back}
        <span className={"button-title"}>{title}</span>
    </div>
}

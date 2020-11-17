import React from "react";
import "./styles.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideIcon from "./icons/SlideIcon";
import NextPrevButtons from "../../../NextPrevButtons";

const screens = [1, 2, 3, 4, 5, 6];

export default class Mobile extends React.Component {

    state = {
        slideIndex: 0,
        animateProducts: "slideInDown"
    }
    slides = 1;

    gotoNext = () => {
        let {slideIndex} = this.state;
        slideIndex = slideIndex + this.slides
        if (slideIndex >= screens.length-1) {
            slideIndex = screens.length-1;
        }
        this.slider.slickGoTo(slideIndex)
    }

    gotoPrev = () => {
        let {slideIndex} = this.state;
        slideIndex = slideIndex - this.slides
        if (slideIndex < 1 ) {
            slideIndex = 0
        }
        this.slider.slickGoTo(slideIndex)
    }

    render() {
        const { animateProducts, slideIndex} = this.state;
        const slides = 1;
        this.slides = slides;
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            beforeChange: (current, next) => this.setState({ slideIndex: next })

        };
        let maxSlides = screens.length - slides;
        maxSlides = maxSlides < 1 ? 1 : maxSlides;
        const {t} = this.props;
        return (
            <div className={"--mobile"}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    {
                        screens.map((s, i) => <Slide key={i} {...this.props} index={i} slide={s} t={t}/>)
                    }
                </Slider>
                <NextPrevButtons arrowColor={"#07ACF2"}
                                 backgroundColor={"#ecfbff"}
                                 className={""}
                                 nextClassName={`${animateProducts} delay2`}
                                 prevClassName={`${animateProducts} delay3`}
                                 prevEnabled={slideIndex > 0}
                                 nextEnabled={Math.abs(slideIndex) < maxSlides}
                                 onNext={this.gotoNext}
                                 onPrev={this.gotoPrev}
                />
            </div>
        );
    }
}

const Slide = props => {

    return <div className={`-f-slide slideInDown delay${props.index}`}>
            <SlideIcon slide={props.slide}/>
            <div className="-f-title">{props.t[`feature_${props.slide}`]}</div>
    </div>
}

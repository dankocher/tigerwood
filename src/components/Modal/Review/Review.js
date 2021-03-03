import React from "react";
import "./styles.scss";
import {api_location} from "../../../ajax";
import Slider from "react-slick";

export default class Review extends React.Component {

    state = {
        selected: 0
    }

    getPicture = src => {
        return <img className={"big-picture"} src={src} alt=""/>
    }

    render() {
        const {selected} = this.state;
        const {width, data: {picture, pictures}} = this.props;
        let picturesList = pictures || [picture];


        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            beforeChange: (current, next) => this.setState({ selected: next }),
            afterChange: (current) => this.setState({selected: current})
        };

        return <div className="review-modal">
            <div className="review-container">
                {   width > 960 ?
                    <>
                    <div className="picture-container">
                        {this.getPicture(api_location + "/reviews/" + picturesList[selected])}
                    </div>
                    <div className="pictures-list">
                        {
                            picturesList.map((p, i) => (
                                <img className={selected === i ? "-selected" : ""} src={api_location + "/reviews/" + p} alt="" onClick={() => this.setState({selected: i})}/>
                            ))
                        }
                    </div>
                    </>
                    :
                    <Slider {...settings} ref={slider => (this.slider = slider)}>
                        {
                            picturesList.map((p, i) => (
                                <div className="slide-pic-container">
                                    <img className={`slide-picture${selected === i ? " -selected" : ""}`} src={api_location + "/reviews/" + p} alt=""  onClick={() => this.slider.slickGoTo(i)}/>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>
        </div>
    }
}

import React from "react";
import "./styles.scss";
import {api_location} from "../../../ajax";

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
        let picturesList = pictures || [picture]
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
                    null
                }
            </div>
        </div>
    }
}

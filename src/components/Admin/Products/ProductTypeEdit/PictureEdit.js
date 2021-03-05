import React from "react";
import {api_location} from "../../../../ajax";
import Handle from "../../Handle";
import trash from "../icons/trash.svg"

export default class PictureEdit extends React.Component {

    render() {

        const {picture} = this.props;
        return <div className="picture-edit">
            <Handle />
            <div className="pic-container">
                <img src={api_location + "/products/" + picture}/>
            </div>
            <div className="buttons">
                <div className="delete-button" onClick={this.props.deletePicture}>
                    <img src={trash}/>
                </div>
            </div>
        </div>
    }
}

import React from "react";
import {api_location} from "../../../../ajax";
import Handle from "../../Handle";
import trash from "../icons/trash.svg"
import "./picture.scss"
import {sortableElement} from "react-sortable-hoc";

class PictureEdit extends React.Component {

    render() {

        const {picture} = this.props;
        return <>
            <div className="pic-container">
                <img src={api_location + "/products/" + picture}/>
            </div>
            <div className="buttons">
                <div className="delete-button" onClick={this.props.deletePicture}>
                    <img src={trash}/>
                </div>
            </div>
        </>
    }
}
const SortableItem = sortableElement((props) => (
    <div className="picture-edit">
        <Handle />
        <PictureEdit {...props}/>
    </div>
));

export default SortableItem;

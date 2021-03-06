import React from "react";
import {sortableContainer, sortableElement, sortableHandle} from 'react-sortable-hoc';
import Handle from "../Handle";
import trash from "./icons/trash.svg";
import addPicture from "./icons/add_picture.svg";
import {api_location} from "../../../ajax";
import DropZone from "../../DropZone";
import ajaxAdmin from "../ajaxAdmin";
import apiAdmin from "../apiAdmin";
import arrayMove from "array-move";

class ReviewItem extends React.Component {

    deletePicture = async (evt, index) => {
        evt.preventDefault();
        let {review} = this.props;
        let pictures = review.pictures || [];
        console.log(pictures)

        let name = pictures[index];
        // let res = await ajaxAdmin(apiAdmin.deletePicture, {path: "reviews/" + name})

        pictures = [
            ...pictures.slice(0, index), ...pictures.slice(index + 1, pictures.length)
        ];


        this.props.onChange({
            ...review,
            picture: pictures[0],
            pictures: pictures
        });
    }
    sortPictures = ({oldIndex, newIndex}) => {
        const {review} = this.props;
        let pictures = review.pictures || [];

        let newPictures = arrayMove(pictures, oldIndex, newIndex);
        this.props.onChange({
            ...review,
            picture: newPictures[0],
            pictures: newPictures
        });
    }

    addPicture = name => {
        const {review} = this.props;
        let pictures = review.pictures || [review.picture] || [];
        pictures = [...pictures, name];
        this.props.onChange({
            ...review,
            picture: pictures[0],
            pictures: pictures
        });
    }

    render() {
        const {review, t} = this.props;
        return <div className={'review-item-content'}>

            <SortablePicturesContainer onSortEnd={this.sortPictures} lockAxis={"x"} axis={"x"} useDragHandle>
                {
                    (review.pictures || []).map((p, i) => (
                        <SortablePicture index={i} picture={p} deletePicture={(evt) => this.deletePicture(evt, i)}/>
                    ))
                }
            </SortablePicturesContainer>

            <DropZone onUpload={this.addPicture} path={"reviews"}>
                <div className="add-picture">
                    <img src={addPicture} alt=""/>
                </div>
            </DropZone>
        </div>

    }
}

const SortablePicturesContainer = sortableContainer(({children}) => {
    return <div className="pictures-items-container">{children}</div>;
});

const PictureHandle = sortableHandle(props => {
    return (props.children);
});


const SortablePicture = sortableElement((props) => (
    <div className="picture-item">
        <div className="delete-button" onClick={props.deletePicture}>
            <img src={trash}/>
        </div>
        <PictureHandle>
            <div className="-r-pic">
                <img src={api_location + "/reviews/" +props.picture}/>
            </div>
        </PictureHandle>
    </div>
));

const SortableItem = sortableElement((props) => (
    <div className="review-item">
        <Handle />
        <ReviewItem {...props}/>
        <div className="delete-button" onClick={props.deleteReview}>
            <img src={trash}/>
        </div>
    </div>
));

export default SortableItem;

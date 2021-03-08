import React from "react";
import "./styles.scss";
import PictureEdit from "./PictureEdit";
import {sortableContainer} from "react-sortable-hoc";
import arrayMove from "array-move";
import addPicture from "../../icons/add_picture.svg";
import DropZone from "../../../DropZone";
import ajaxAdmin from "../../ajaxAdmin";
import apiAdmin from "../../apiAdmin";

class ProductTypeEdit extends React.Component {


    changePrice = e => {
        let value = e.target.value;
        let data = {
            ...this.props.data,
            price: "от " + value + "USD"
        }
        this.props.onChange(this.props.type, data)
    }

    deletePicture = async index => {
        const {data} = this.props;
        let pictures = data.pictures || [];

        let name = pictures[index];
        let res = await ajaxAdmin(apiAdmin.deletePicture, {path: "products/" + name})

        pictures = [
            ...pictures.slice(0, index), ...pictures.slice(index + 1, pictures.length)
        ];

        this.props.onChange(this.props.type, {
            ...data,
            picture: pictures[0],
            pictures
        });
    }
    sortPictures = ({oldIndex, newIndex}) => {
        const {data} = this.props;
        let pictures = data.pictures || [];

        let newPictures = arrayMove(pictures, oldIndex, newIndex);
        this.props.onChange(this.props.type, {
            ...data,
            picture: newPictures[0],
            pictures: newPictures
        });
    }

    addPicture = name => {
        const {data} = this.props;
        let pictures = data.pictures || [];
        pictures = [...pictures, name];
        this.props.onChange(this.props.type, {
            ...data,
            picture: pictures[0],
            pictures: pictures
        });
    }

    render() {
        const {type, data, t} = this.props;
        let option = t.options.find(o => o.id === type);

        const pictures = data.pictures || [];

        return <div className={'product-edit-type-content'}>
            <div className="edit-type-header">
                <div className="type">{option.value}</div>
                <div className="price">от{
                    <input value={data.price.replace(/\D/g,'')} onChange={this.changePrice}/>
                }USD</div>
            </div>
            <SortableContainer onSortEnd={this.sortPictures} useDragHandle lockAxis={"y"}>
                {
                    pictures.map((p, i) => (
                        <PictureEdit key={`picture-${i}`} index={i} picture={p} deletePicture={() => this.deletePicture(i)}/>
                    ))
                }
            </SortableContainer>
            <DropZone onUpload={this.addPicture} path={"products"}>
                <div className="add-picture">
                    <div><img src={addPicture} alt=""/></div>
                    <div>591x591</div>
                </div>
            </DropZone>
        </div>

    }
}

export default ProductTypeEdit;

const SortableContainer = sortableContainer(({children}) => {
    return <div className="pictures-edit">{children}</div>;
});

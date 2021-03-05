import React from "react";
import "./styles.scss";
import PictureEdit from "./PictureEdit";

class ProductTypeEdit extends React.Component {


    changePrice = e => {
        let value = e.target.value;
        let data = {
            ...this.props.data,
            price: "от " + value + "USD"
        }
        this.props.onChange(this.props.type, data)
    }

    deletePicture = index => {
        const {data} = this.props;
        let pictures = data.pictures || [];

        pictures = [
            ...pictures.splice(0, index-1), ...pictures.splice(index, pictures.length-1)
        ];

        this.props.onChange(this.props.type, {
            ...data,
            picture: pictures[0],
            pictures
        })
    }

    render() {
        const {type, data, t} = this.props;
        let option = t.options.find(o => o.id === type);

        const pictures = data.pictures || [data.picture];

        return <div className={'product-edit-type-content'}>
            <div className="edit-type-header">
                <div className="type">{option.value}</div>
                <div className="price">от{
                    <input value={data.price.replace(/\D/g,'')} onChange={this.changePrice}/>
                }USD</div>
            </div>
            <div className="pictures-edit">
                {
                    pictures.map((p, i) => (
                        <PictureEdit picture={p} deletePicture={() => this.deletePicture(i)}/>
                    ))
                }
            </div>
        </div>

    }
}

export default ProductTypeEdit;

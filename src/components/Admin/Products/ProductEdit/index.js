import React from "react";
import "./styles.scss";
import AutoResizeTextarea from "../../../AutoResizeTextarea";
import ProductTypeEdit from "../ProductTypeEdit";

class ProductEdit extends React.Component {

    saveParam = (param, value) => {
        const {products, selected} = this.props;
        products[selected][param] = value
        this.props.saveProducts(products);
    }

    saveSerialize = (param, value) => {
        value = value.split("\n");
        this.saveParam(param, value)
    }

    render() {
        const {products, selected, t} = this.props;

        const product = products[selected];

        return <div className={'product-edit-item-content'}>
            <div className="edit-content">
                <input className={'edit-name'}
                                    value={product.name}
                                    placeholder={"Название"}
                                    onChange={(event) => this.saveParam("name", event.target.value)}
                />
                <select className={"edit-modules"} defaultValue={product.modules}
                        onChange={(event) => this.saveParam("modules", event.target.value)}>
                    <option value="1" selected={products.selected == "1"}>{t.modules_1}</option>
                    <option value="2" selected={products.selected == "2"}>{t.modules_2}</option>
                    <option value="3" selected={products.selected == "3"}>{t.modules_3}</option>
                </select>
                <button onClick={this.props.onClose}>Закрыть</button>
            </div>
            <hr/>

            <div className="type-edit-container">
                <ProductTypeEdit
                    t={t}
                    type={'natural'}
                    data={product.natural}
                    onChange={this.saveParam}
                />
                <ProductTypeEdit
                    t={t}
                    type={'color'}
                    data={product.color}
                    onChange={this.saveParam}
                />
            </div>


            <hr/>
            <div className="edit-text">
                <div className="-text-name">Особенности:</div>
                <AutoResizeTextarea
                    className={"product-text-edit"}
                    minHeight={20}
                    value={(product.features || []).join("\n")}
                    onChange={(value) => this.saveSerialize("features", value)}
                />
                <div className="-text-name">Возможности:</div>
                <AutoResizeTextarea
                    className={"product-text-edit"}
                    minHeight={20}
                    value={(product.facilities || []).join("\n")}
                    onChange={(value) => this.saveSerialize("facilities", value)}
                />
                <div className="-text-name">В стоимость включено:</div>
                <AutoResizeTextarea
                    className={"product-text-edit"}
                    minHeight={20}
                    value={(product.included || []).join("\n")}
                    onChange={(value) => this.saveSerialize("included", value)}
                />
            </div>
        </div>

    }
}

export default ProductEdit;

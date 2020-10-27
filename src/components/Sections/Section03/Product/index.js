import React from "react";
import "./styles.scss";
import t from "../text.json";

import image from "../images/product-01.png"
import formatText from "../../../../utils/formatText";

export default class Product extends React.Component {

    render() {
        const {product, index, className} = this.props;
        let position = (index+1) % 4;

        let side = ""
        switch (position) {
            case 1: side = "left"; break;
            case 2: side = "center-left"; break;
            case 3: side = "center-right"; break;
            default: case 0: side = "right"; break;
        }

        return (
            <div className={`-s03-product --${side} ${className}`}>
                <div className="-product-top">
                    <div className="-product-picture">
                        <img src={image} alt={product.name}/>
                    </div>
                    <div className="-product-name">
                        <div className="-p-name">{formatText(product.name)}</div>
                        <div className="-p-price">{product.price}</div>
                    </div>
                    <div className="-product-description">
                        <div className="-p-d-name">{product.name}</div>
                        <ul className="-p-d-features">{
                            product.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))
                        }</ul>
                        <div className="-p-d-price">{product.price}</div>
                    </div>
                </div>
                <div className="-product-button">
                    {t.button_order}
                </div>
            </div>
        );
    }
}

import React from "react";
import "./styles.scss";
import {sortableElement, sortableHandle} from 'react-sortable-hoc';
import Handle from "../../Handle";

class ProductItem extends React.Component {

    render() {
        const {product, t} = this.props;
        return <div className={'product-item-content'} onClick={this.props.onSelect}>
            <div className="p-name">{product.name}</div>
            <div className="right-section">
                <div className="p-modules">{t[`modules_${product.modules}`]}</div>
                {product.natural ? <div className="p-price">{product.natural.price}</div> : null}
                {product.color ? <div className="p-price -color">{product.color.price}</div> : null}
            </div>
        </div>

    }
}

const SortableItem = sortableElement((props) => (
    <div className="product-item">
        <Handle />
        <ProductItem {...props}/>
    </div>
));

export default SortableItem;

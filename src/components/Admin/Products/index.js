import React from "react";
import "./styles.scss";
import ProductItem from "./ProductItem";
import {sortableContainer} from 'react-sortable-hoc';
import ProductEdit from "./ProductEdit";

export default class Products extends React.Component {

    state = {
        selected: null
    }

    // componentDidMount() {
    //     setTimeout(() =>{
    //         this.onSelect(0)
    //     }, 500)
    // }

    onSelect = selected => {
        this.setState({selected})
        if (selected === null) {
            document.body.style.overflowY = "auto";
        } else {
            document.body.style.overflowY = "hidden";
        }
    }

    deleteProduct = index => {

        let {products} = this.props;

        products = [
            ...products.splice(0, index), ...products.splice(index+1, products.length)
        ];

        this.props.saveProducts(products)
    }

    render() {
        const {products, saveProducts} = this.props;
        const {selected} = this.state;

        return <div className="admin-products">
            {selected === null ? null : <ProductEdit selected={selected} products={products}
                                                     saveProducts={saveProducts}
                                                     t={this.props.t}
                                                     onClose={() => this.onSelect(null)}
            />}
            <SortableContainer onSortEnd={this.props.sortProducts} useDragHandle>
                {
                    products.map((product, i) => (
                        <ProductItem key={`product-${i}`} index={i} product={product} t={this.props.t}
                                     onSelect={() => this.onSelect(i)} deleteProduct={() => this.deleteProduct(i)}/>
                    ))
                }
            </SortableContainer>
        </div>
    }
}


const SortableContainer = sortableContainer(({children}) => {
    return <div className="products-items-container">{children}</div>;
});

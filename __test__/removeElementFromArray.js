let PRODUCTS = [
    {name: 0},
    {name: 1},
    {name: 2},
    {name: 3},
    {name: 4}
]

const deleteProduct = index => {

    let products = PRODUCTS;

    products = [
        ...products.slice(0, index), ...products.slice(index+1, products.length)
    ];

    console.log(products)
}

deleteProduct(0)

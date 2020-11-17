import React from "react";
import "./styles.scss";

import Selector from "./Selector";
import Button from "./Button";

// import products from "./data/products.json"
import Product from "./Product";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ajax, {api_location} from "../../../ajax";

const SECTION_NUMBER = "03"


export default class Section extends React.Component {

    constructor(props) {
        super(props);
        let options = this.props.t.options.map((option) => (
            {id: option.id, value: option.value}
        ))

        this.state = {
            selected: this.props.t.default_option || "natural",
            selectedModule: 1,
            options,
            products: []
        }
    }
    allProducts = [];

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        this.allProducts = await ajax("/products/data.json");
        this.filterProducts();
    }

    filterProducts = (selectedModule) => {
        if (selectedModule === undefined) {
            selectedModule = this.state.selectedModule;
        }
        let products = this.allProducts.filter(p => p.modules === selectedModule && p[this.state.selected] !== undefined)
        this.setState({products})
    }

    select = selected => {
        this.setState({selected})
    }

    selectModule = selectedModule => {
        this.setState({selectedModule});
        this.filterProducts(selectedModule);
    }

    render() {
        const {selected, selectedModule, options, products} = this.state;
        const {width, t} = this.props;
        let section_width = width > (1216) ? 1216 : width - 40;
        let slides = parseInt(section_width / 300)
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: slides,
            slidesToScroll: slides,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated}`}>
                <div className={`---content`}>
                    <div className="-s03-text-header-1 slideInDown delay1">{t.text_header_1}</div>
                    <div className="-s03-text-header-2 slideInDown delay2">{t.text_header_2}</div>

                    <div className="-s03-filters">
                        <Selector className="slideInDown delay2" selected={selected} options={options} onSelect={this.select} />
                        <span className={"-f-buttons"}>
                            <Button className={"slideInDown delay3"} name={t.button_1_module} selected={selectedModule === 1} onClick={() => this.selectModule(1)}/>
                            <Button className={"slideInDown delay3"} name={t.button_2_module} selected={selectedModule === 2} onClick={() => this.selectModule(2)}/>
                            <Button className={"slideInDown delay4"} name={t.button_3_module} selected={selectedModule === 3} onClick={() => this.selectModule(3)}/>
                        </span>
                    </div>
                    <div className="-s03-products">
                        <div className="products-content" style={{width: slides === 1 ? '100%' : slides * 300}}>
                            <Slider {...settings}>
                                {
                                    products.map((product, i) => (
                                        <Product className={`slideInDown delay${3+i}`} key={`product-${i}`}
                                                 product={{
                                                    name: product.name,
                                                    picture: api_location + "/products/pictures/" + product[selected].picture,
                                                    price: product[selected].price,
                                                    features: product.features
                                                }}
                                                 index={i} t={t}/>))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slideInDown delay5`}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9688 2.1163V0.304578C11.9688 0.147547 11.7883 0.0608283 11.6664 0.156922L1.10081 8.40927C1.01104 8.47908 0.938407 8.56847 0.88844 8.67063C0.838474 8.77278 0.8125 8.885 0.8125 8.99872C0.8125 9.11244 0.838474 9.22466 0.88844 9.32681C0.938407 9.42897 1.01104 9.51836 1.10081 9.58817L11.6664 17.8405C11.7906 17.9366 11.9688 17.8499 11.9688 17.6929V15.8811C11.9688 15.7663 11.9149 15.6561 11.8258 15.5858L3.38831 8.99989L11.8258 2.41161C11.9149 2.3413 11.9688 2.23114 11.9688 2.1163Z" fill="#24D26D"/>
            </svg>
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slideInDown delay6`}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0312301 15.8837L0.03123 17.6954C0.03123 17.8525 0.211699 17.9392 0.333573 17.8431L10.8992 9.59073C10.989 9.52092 11.0616 9.43153 11.1116 9.32937C11.1615 9.22722 11.1875 9.115 11.1875 9.00128C11.1875 8.88756 11.1615 8.77534 11.1116 8.67319C11.0616 8.57103 10.989 8.48164 10.8992 8.41183L0.333575 0.159484C0.209357 0.0633898 0.0312315 0.150107 0.0312315 0.307139L0.0312314 2.11886C0.0312313 2.2337 0.0851368 2.34386 0.1742 2.41417L8.61169 9.00011L0.174198 15.5884C0.0851357 15.6587 0.0312302 15.7689 0.0312301 15.8837Z" fill="#24D26D"/>
            </svg>
        </div>
    );
}

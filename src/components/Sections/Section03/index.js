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
import NextPrevButtons from "../../NextPrevButtons";

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
            products: [],
            slideIndex: 0,
            animateProducts: "slideInDown"
        }
    }
    slides = 1;
    allProducts = [];

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        this.allProducts = await ajax("/products.json");
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

    selectModule = async selectedModule => {
        this.setState({selectedModule, animateProducts: "", slideIndex: 0});
        this.slider.slickGoTo(0);
        this.filterProducts(selectedModule);
    }

    gotoNext = () => {
        let {slideIndex, products} = this.state;
        slideIndex = slideIndex + this.slides
        if (slideIndex >= products.length-1) {
            slideIndex = products.length-1;
        }
        this.slider.slickGoTo(slideIndex)
    }

    gotoPrev = () => {
        let {slideIndex} = this.state;
        slideIndex = slideIndex - this.slides
        if (slideIndex < 1 ) {
            slideIndex = 0
        }
        this.slider.slickGoTo(slideIndex)
    }

    render() {
        const {selected, selectedModule, options, products, animateProducts, slideIndex} = this.state;
        const {width, t} = this.props;
        let section_width = width > (1216) ? 1216 : width - 40;
        let slides = parseInt(section_width / 300)
        this.slides = slides;
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: slides,
            slidesToScroll: slides,
            arrows: false,
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };
        let maxSlides = products.length - slides;
        maxSlides = maxSlides < 1 ? 1 : maxSlides;

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
                            <Slider {...settings} ref={slider => (this.slider = slider)}>
                                {
                                    products.map((product, i) => (
                                        <Product className={`${animateProducts} delay${3+i}`} key={`product-${i}`}
                                                 product={{
                                                    name: product.name,
                                                    picture: api_location + "/products/" + product[selected].picture,
                                                    price: product[selected].price,
                                                    features: product.features
                                                }}
                                                 index={i} t={t}/>))
                                }
                            </Slider>
                            <NextPrevButtons arrowColor={"#24D26D"}
                                             backgroundColor={"#C9F6DC"}
                                             className={""}
                                             nextClassName={`${animateProducts} delay5`}
                                             prevClassName={`${animateProducts} delay6`}
                                             prevEnabled={slideIndex > 0}
                                             nextEnabled={Math.abs(slideIndex) < maxSlides}
                                             onNext={this.gotoNext}
                                             onPrev={this.gotoPrev}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

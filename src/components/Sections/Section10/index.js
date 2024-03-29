import React from "react";
import "./styles.scss";
// import picture_wide from "./images/product-wide-1.jpg"
// import picture from "./images/product-1.png"
// import products from "./data/products.json";
import ajax, {api_location} from "../../../ajax";

const SECTION_NUMBER = "10"

export default class Section extends React.Component {

    state = {
        current: 0,
        left: 0,
        galleryWidth: 0,
        products: []
    }
    gallery = null;

    componentDidMount() {
        this.getProducts()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.current !== this.state.current || prevState.galleryWidth !== this.state.galleryWidth || this.props.width !== prevProps.width)
            this.updatePicturePosition()
    }

    getProducts = async () => {
        const products = await ajax("/show-rum.json");
        this.setState({products})
        this.updatePicturePosition()
    }

    updatePicturePosition = () => {
        const galleryWidth = this.gallery.offsetWidth;
        const {current} = this.state;
        this.setState({
            left: -current * galleryWidth, galleryWidth
        })
    }

    prevProduct = () => {
        const {current} = this.state;
        if (current === 0)
            return;
        this.setState({
            current: current-1
        });
    }

    nextProduct = () => {
        const {current, products} = this.state;
        if (current === products.length-1)
            return;
        this.setState({
            current: current+1
        });
    }

    render() {
        const {current, left, galleryWidth, products} = this.state;
        const {width, t} = this.props;

        const product = products[current];
        const isMobile = width <= 1100;

        let pictureSize = {width: galleryWidth, height: galleryWidth * 526/701}
        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated}`}>
                <div className={`---content`}>
                    <div className="-header-1 slideInDown delay1">{isMobile ? t.m_header_1 : t.header_1}</div>
                    <div className="-header-2 slideInDown delay2">{isMobile ? t.m_header_2 : t.header_2}</div>
                    <div className="-gallery slideInDown delay3">
                        <div className="-pictures" ref={gallery => this.gallery = gallery} style={{height: pictureSize.height}}>
                            <div className="-pictures-container" style={{left, width: "auto"}} >
                                {   galleryWidth === 0 ? null :
                                    products.map((p, i) => (
                                        <div key={p.picture} className={"picture-container"} style={pictureSize}>
                                            <img src={api_location + "/show-rum/" + p.picture} alt={p.picture} style={pictureSize}/>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="-gallery-buttons">
                                <LeftButton disabled={current === 0} onClick={this.prevProduct} inMobile={isMobile}/>
                                <RightButton disabled={current === products.length-1} onClick={this.nextProduct} inMobile={isMobile}/>
                            </div>
                        </div>
                        <div className="-info">
                            { !product ? null :
                                <div className="-info-content">
                                    <div className="-complex">
                                        <div className="--title">{t.complex}</div>
                                        <div className="--c-name">{product.name}</div>
                                    </div>
                                    <div className="-features">
                                        <span>{t.pluses}: </span>
                                        {product.features.map(f => (<span key={`${f}`}>• {f}</span>))}
                                    </div>
                                    <div className="-button-want" onClick={() => this.props.showModal({
                                        show: true,
                                        type: "empty",
                                        data: {...product, ...t.modal}
                                    })}>
                                        {t.button_want_it}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function LeftButton(props) {
    let size = props.isMobile ? 14.61 : 24;
    return <div className={`-g-button -left${props.disabled ? " -disabled" : ""}`} onClick={props.onClick}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9688 5.11679V3.30507C16.9688 3.14804 16.7883 3.06132 16.6664 3.15741L6.10081 11.4098C6.01104 11.4796 5.93841 11.569 5.88844 11.6711C5.83847 11.7733 5.8125 11.8855 5.8125 11.9992C5.8125 12.1129 5.83847 12.2251 5.88844 12.3273C5.93841 12.4295 6.01104 12.5188 6.10081 12.5887L16.6664 20.841C16.7906 20.9371 16.9688 20.8504 16.9688 20.6933V18.8816C16.9688 18.7668 16.9149 18.6566 16.8258 18.5863L8.38831 12.0004L16.8258 5.4121C16.9149 5.34179 16.9688 5.23163 16.9688 5.11679Z" fill="#07ACF2"/>
        </svg>
    </div>
}

function RightButton(props) {
    let size = props.isMobile ? 14.61 : 24;
    return <div className={`-g-button -right${props.disabled ? " -disabled" : ""}`} onClick={props.onClick}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.03123 18.8832L7.03123 20.6949C7.03123 20.852 7.2117 20.9387 7.33357 20.8426L17.8992 12.5902C17.989 12.5204 18.0616 12.431 18.1116 12.3289C18.1615 12.2267 18.1875 12.1145 18.1875 12.0008C18.1875 11.8871 18.1615 11.7749 18.1116 11.6727C18.0616 11.5705 17.989 11.4812 17.8992 11.4113L7.33357 3.159C7.20936 3.0629 7.03123 3.14962 7.03123 3.30665L7.03123 5.11837C7.03123 5.23321 7.08514 5.34337 7.1742 5.41368L15.6117 11.9996L7.1742 18.5879C7.08514 18.6582 7.03123 18.7684 7.03123 18.8832Z" fill="#07ACF2"/>
        </svg>
    </div>
}


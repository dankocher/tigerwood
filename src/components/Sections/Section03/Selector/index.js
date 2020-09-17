import React from "react";
import "./styles.scss";
import OutsideClick from "../../../OutsideClick";

class Selector extends React.Component {

    state = {
        show: false
    }
    handleClickOutside = () => {
        if (this.state.show) {
            this.hide()
        }
    }

    show = () => {
        console.log("show selector")
        this.setState({show: true})
    }

    hide = () => {
        console.log("hide selector")
        this.setState({show: false})
    }

    render() {
        const {selected, options} = this.props;
        return (
            <OutsideClick onClickOutside={this.handleClickOutside}>
                <div className="-selector" onClick={this.show}>
                    <div className="-name">{options[selected].value}</div>
                    {Icon}

                </div>
            </OutsideClick>
        )
    }
}

// export default onClickOutside(Selector);
// export default enhanceWithClickOutside(Selector);
export default Selector;

const Icon = <div className="-icon">
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1315 0.1875H0.868974C0.561161 0.1875 0.389286 0.5125 0.579911 0.734375L5.71116 6.68437C5.85804 6.85469 6.14085 6.85469 6.28929 6.68437L11.4205 0.734375C11.6112 0.5125 11.4393 0.1875 11.1315 0.1875Z" fill="black"/>
    </svg>
</div>

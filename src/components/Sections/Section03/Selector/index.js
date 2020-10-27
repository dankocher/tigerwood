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
        if (this.state.show) {
            return this.hide();
        }
        this.setState({show: true})
    }

    hide = () => {
        this.setState({show: false})
    }

    select = (id) => {
        this.props.onSelect(id);
        this.hide();
    }

    render() {
        const {className, selected, options} = this.props;
        const {show} = this.state;
        return (
            <OutsideClick onClickOutside={this.handleClickOutside}>
                <div className={`-selector-container${show ? " open" : ""}`}>
                    <div className={`-selector ${className}${show ? " open" : ""}`} onClick={this.show}>
                        <div className="-name">{options[selected].value}</div>
                        <Icon open={show}/>

                    </div>
                    <div className={`-options${show ? " show" : ""}`}>
                        {options.map(o => (
                            <div className="-option" onClick={() => this.select(o.id)}>{o.value}</div>
                        ))}
                    </div>
                </div>
            </OutsideClick>
        )
    }
}

// export default onClickOutside(Selector);
// export default enhanceWithClickOutside(Selector);
export default Selector;

const Icon = props => <div className={`-icon${props.open ? " open" : ""}`}>
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1315 0.1875H0.868974C0.561161 0.1875 0.389286 0.5125 0.579911 0.734375L5.71116 6.68437C5.85804 6.85469 6.14085 6.85469 6.28929 6.68437L11.4205 0.734375C11.6112 0.5125 11.4393 0.1875 11.1315 0.1875Z" fill="black"/>
    </svg>
</div>

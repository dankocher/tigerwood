import React, {Component} from 'react';
import './styles.scss';
import PropTypes from "prop-types";

class AutoResizeTextarea extends Component {

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        onHeightChange: PropTypes.func,
        style: PropTypes.object,
        minHeight: PropTypes.number,
        maxHeight: PropTypes.number,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        autoFocus: PropTypes.bool
    };

    state = {
        height: 0,
        width: 0,
        value: "",
        overflowY: "hidden"
    };

    componentWillMount() {
        if (this.props.minHeight !== undefined) {
            this.setState({height: this.props.minHeight});
        }
        this.initialize(this.props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.initialize(nextProps);
    }

    initialize = async props => {
        await this.setState({value: props.value});
        this.startSize();
    };

    componentDidMount() {
        this.startSize()
    }
    startSize = async () => {
        if (this.textarea !== null && this.div !== null) {
            await this.setState({width: this.textarea.offsetWidth});
            let height = this.div.offsetHeight;
            if (this.div.offsetHeight > this.props.maxHeight) {
                height = this.props.maxHeight;
                this.setState({overflowY: "scroll"});
            } else {
                this.setState({overflowY: "hidden"});
            }
            this.setState({height});
            if (this.props.onHeightChange !== undefined) {
                this.props.onHeightChange(height);
            }
        }
    };

    onChange = async value => {
        if (this.props.onChange !== undefined) {
            await this.setState({value});
            let height = this.div.offsetHeight;
            if (this.div.offsetHeight > this.props.maxHeight) {
                height = this.props.maxHeight;
                this.setState({overflowY: "scroll"});
            } else {
                this.setState({overflowY: "hidden"});
            }
            this.setState({height});
            if (this.props.onHeightChange !== undefined) {
                this.props.onHeightChange(height);
            }
            this.props.onChange(value);
        }
    };

    render() {

        const {onFocus, onBlur, style, className, placeholder, maxHeight, autoFocus} = this.props;
        const {width, overflowY} = this.state;

        const {value} = this.state;
        return <div className={'autoresize-textarea'}>
            <div style={{...style, width, maxWidth: width, minHeight: this.props.minHeight}} className={`a-div ${className || ""}`}
                 ref={div => this.div = div}>
                {value.split('\n').map((item, i) => {
                    return <span key={i}>{item}<br/></span>;
                })}
            </div>
            <textarea style={{...style, height: this.state.height, maxHeight, overflowY: overflowY}} className={`a-text ${className || ""}`}
                      ref={textarea => this.textarea = textarea}
                      value={value}
                      onChange={e => this.onChange(e.target.value)}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      autoFocus={autoFocus}
                      placeholder={placeholder}
            />
        </div>
    }
}

export default AutoResizeTextarea;

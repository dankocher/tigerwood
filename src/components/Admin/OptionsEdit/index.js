import React from "react";
import "./styles.scss"
import AutoResizeTextarea from "../../AutoResizeTextarea";

class OptionsEdit extends React.Component {



    changeOption = (id, value) => {
        let index = this.props.options.findIndex(o => o.id === id);
        const {options} = this.props;
        options[index].value = value
        if (this.props.onChange) {
            this.props.onChange("options", options);
        }
    }

    changeTranslate = (alias, value) => {
        let t = {
            ...this.props.t,
            [alias]: value
        };
        if (this.props.onChange) {
            this.props.onChange(alias, value)
        }
    }

    render() {
        const {options, default_option} = this.props;
        return <div className="options-edit">
            <div className="options-name"></div>
            <table className="translates">
                <tbody>
                {
                    options.map(option => (
                        <tr key={option.id} className="translate">
                            <td>{option.id}</td>
                            <td>
                                {/*<textarea value={t[alias]} onChange={(e) => this.changeTranslate(alias, e.target.value)}/>*/}
                                <AutoResizeTextarea className={"translate-text"}
                                                    value={(option.value || "").toString()}
                                                    onChange={(value) => this.changeOption(option.id, value)}
                                                    minHeight={20}
                                                    maxHeight={500}/>
                            </td>
                        </tr>
                    ))
                }
                <tr className={"translate"}>
                    <td>default_option</td>
                    <td>
                        <select name="" id="" defaultValue={default_option}
                                onChange={(e) => this.props.onChange("default_option", e.target.value)}>
                            {
                                options.map((option, i) => (
                                    <option value={option.id}>{option.value}</option>
                                ))
                            }
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}

export default OptionsEdit

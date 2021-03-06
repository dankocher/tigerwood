import React from "react";
import "./styles.scss"
import AutoResizeTextarea from "../../AutoResizeTextarea";

class ModalEdit extends React.Component {


    changeTranslate = (alias, value) => {
        let t = {
            ...this.props.t,
            [alias]: value
        };
        if (this.props.onChange) {
            this.props.onChange(t)
        }
    }

    render() {
        const {t} = this.props;
        return <div className="modal-edit">
            <div className="modal-name">Модальное окно</div>
            <table className="translates">
                <tbody>
                {
                    Object.keys(t).map(alias => (
                        alias === "filename" || alias === "picture" || alias === "video" ? null :
                            <tr key={alias} className="translate">
                                <td>{alias}</td>
                                <td>
                                    {/*<textarea value={t[alias]} onChange={(e) => this.changeTranslate(alias, e.target.value)}/>*/}
                                    <AutoResizeTextarea className={"translate-text"}
                                                        value={(t[alias] || "").toString()}
                                                        onChange={(value) => this.changeTranslate(alias, value)}
                                                        minHeight={20}
                                                        maxHeight={500}/>
                                </td>
                            </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    }
}

export default ModalEdit

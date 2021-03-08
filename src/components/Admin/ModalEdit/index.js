import React from "react";
import "./styles.scss"
import AutoResizeTextarea from "../../AutoResizeTextarea";
import DropZone from "../../DropZone";
import {api_location} from "../../../ajax";
import addPicture from "../icons/add_picture.svg";
import addVideo from "../icons/add_video.svg";

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

    addPicture = (param, name) => {
        let t = {
            ...this.props.t,
            [param]: name
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
                        alias === "filename" || alias === "picture" || alias === "preview" || alias === "video" ? null :
                            <tr key={alias} className="translate">
                                <td>{alias}</td>
                                <td>
                                    {/*{alias === "video" ? <span>Видео нужно вручную скопировать в папку <b>api/video</b> на сервере и вставить название в след. поле</span> : null}*/}
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
                {
                    !t.picture ? null :
                        <tr className={"translate"}>
                            <td>picture</td>
                            <td>
                                <DropZone onUpload={name => this.addPicture("picture", name)} path={"pictures"}>
                                    <div className="--add-picture">
                                        <img className={'-picture'} src={api_location + "/pictures/" + t.picture || addPicture} alt=""/>
                                        <div className="-hover-pic-container">
                                            <img className={'hover-pic'} src={addPicture} alt=""/>
                                            484x810
                                        </div>
                                    </div>
                                </DropZone>
                            </td>
                        </tr>
                }
                {  !t.video ? null : <>

                        <tr className={"translate"}>
                            <td>video</td>
                            <td>
                                <DropZone onUpload={name => this.addPicture("video", name)} path={"video"}>
                                    <div className="--add-picture -video">
                                        <video>
                                            <source src={api_location + "/video/" + t.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                                        </video>
                                        <div className="-hover-pic-container">
                                            <img className={'hover-pic'} src={addVideo} alt=""/>
                                            700x522
                                        </div>
                                    </div>
                                </DropZone>
                            </td>
                        </tr>
                        <tr className={"translate"}>
                            <td>preview</td>
                            <td>
                                <DropZone onUpload={(name) => this.addPicture("preview", name)} path={"video"}>
                                    <div className="--add-picture -preview">
                                        <img className={'-picture'} src={api_location + "/video/" + t.preview || addPicture} alt=""/>
                                        <div className="-hover-pic-container">
                                            <img className={'hover-pic'} src={addPicture} alt=""/>
                                            700x522
                                        </div>
                                    </div>
                                </DropZone>
                            </td>
                        </tr>
                    </>
                }
                </tbody>
            </table>
        </div>
    }
}

export default ModalEdit

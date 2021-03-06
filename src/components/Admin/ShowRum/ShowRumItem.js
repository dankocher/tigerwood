import React from "react";
import {sortableContainer, sortableElement, sortableHandle} from 'react-sortable-hoc';
import Handle from "../Handle";
import trash from "./icons/trash.svg";
import addPicture from "./icons/add_picture.svg";
import {api_location} from "../../../ajax";
import DropZone from "../../DropZone";

class ShowRumItem extends React.Component {

    addPicture = name => {
        const {show_rum} = this.props;
        this.props.onChange({
            ...show_rum,
            picture: name,
        });
    }

    onChangeParam = (param, value) => {
        const {show_rum} = this.props;

        this.props.onChange({
            ...show_rum,
            [param]: value
        })
    }

    saveSerialize = (param, value) => {
        value = value.split("\n");
        this.onChangeParam(param, value)
    }

    render() {
        const {show_rum, t} = this.props;
        return <div className={'show-rum-item-content'}>
            <input value={show_rum.name || ""} placeholder={"Название"} onChange={e => this.onChangeParam("name", e.target.value)}/>
            <div className="-r-content">
                <DropZone onUpload={this.addPicture} path={"show-rum"}>
                    <div className="add-picture">
                        <img className={'show-rum-picture'} src={api_location + "/show-rum/" + show_rum.picture || addPicture} alt=""/>
                        <div className="-hover-pic-container">
                            <img className={'hover-pic'} src={addPicture} alt=""/>
                        </div>
                    </div>
                </DropZone>
                <textarea className={"-t-features"} value={show_rum.features.join("\n") || ""}
                          onChange={e => this.saveSerialize("features", e.target.value)}/>
            </div>
        </div>

    }
}

const SortableItem = sortableElement((props) => (
    <div className="show-rum-item">
        <Handle />
        <ShowRumItem {...props}/>
        <div className="delete-button" onClick={props.deleteShowRum}>
            <img src={trash}/>
        </div>
    </div>
));

export default SortableItem;

import {sortableHandle} from "react-sortable-hoc";
import React from "react";
import "./styles.scss"

const Handle = sortableHandle(props => {
    let size = props.size || 30;
    let className = props.className !== undefined ? " " + props.className : "";

    return (<div className="handle"><div className={`--handle-${size}${className}${props.display === false ? ' -none' : ''}`}/></div>);
});

export default Handle;

import React from "react";

export default (text, className = "") => {
    return text.split("\n").map((t, i) => (<div className={className} key={`div-${i}`}>{t}</div>))
}

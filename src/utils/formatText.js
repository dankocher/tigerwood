import React from "react";

export default (text, className = "") => {
    if (!text) return null;
    return text.split("\n").map((t, i) => (<div className={className} key={`div-${i}`}>{t}</div>))
}

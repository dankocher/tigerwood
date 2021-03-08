import is from "is_js";

const disableScroll = () => {
    document.body.style.overflowY = "hidden";
    if (is.windows() && is.firefox()) {
        document.body.style.marginRight = "17px";
        document.body.querySelector('.header').style.paddingRight = "17px";
    }
}

const enableScroll = () => {
    if (is.firefox()) {
        document.body.style.overflowY = "auto";
        document.body.style.marginRight = "0";
        document.body.querySelector('.header').style.paddingRight = "0";
    } else {
        document.body.style.overflowY = "overlay";
    }
}

export {disableScroll, enableScroll};

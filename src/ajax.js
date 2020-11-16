const isProduction = window.location.port !== "3000";
const isDeploy = isProduction ? window.location.host === "dankocher.github.io" : false;
const api_location = !isProduction ? process.env.PUBLIC_URL + "/api" : isDeploy ? "./api" : "/api"

if (!isProduction || (isProduction && !isDeploy)) {
    if (window.location.pathname !== "/") {
        window.location = "/"
    }
}

const ajax = async url => {

    return await fetch(`${api_location}${url}`)
        .then(res => res.json())
        .then(async res => { return res })
        .catch((e) => {
            console.log(e);
            return {ok: false, status: "unreachable"}
        });
}

export default ajax;

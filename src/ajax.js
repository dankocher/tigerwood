const isProduction = window.location.port !== "3000";
const isDeploy = isProduction ? window.location.host === "dankocher.github.io" : false;
// const api_location = !isProduction ? process.env.PUBLIC_URL + "/api" : isDeploy ? "./api" : "/api"
const api_location = "/api"

// if (!isProduction || (isProduction && !isDeploy)) {
//     if (window.location.pathname !== "/") {
//         window.location = "/"
//     }
// }
let version = null;

const ajax = async (url) => {

    if (version === null) {
        version = await fetch(`${api_location}/version?${new Date().getTime()}`)
            .then(res => res.text())
            .then(async res => { return res })
            .catch((e) => {
                return new Date().getTime();
            });
    }

    return await fetch(`${api_location}${url}?${version}`)
        .then(res => res.json())
        .then(async res => { return res })
        .catch((e) => {
            console.log(e);
            return {ok: false, status: "unreachable"}
        });
}

export default ajax;
export {api_location, isProduction, isDeploy};

import {isProduction} from "../../ajax";

const host = {
    uri: isProduction ? window.location.origin + "/" : "http://localhost/"
    // uri: "https://mf.goodstudio.by"
};

const api = {
    login: {method: "POST", uri: "adminapi/login.php"},
    logout: {method: "POST", uri: "adminapi/logout.php"},
    checkSession: {method: "POST", uri: "adminapi/check_session.php"},
    saveJson: {method: "POST", uri: "adminapi/save_json.php"},
    deletePicture: {method: "POST", uri: "adminapi/delete_picture.php"},
    sendRequest: {method: "POST", uri: "api/send_request.php"},
    checkStatus: {method: "POST", uri: "adminapi/check_status.php"},
}

export default api;
export { host, api };

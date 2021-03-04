import {host} from "./apiAdmin";


const ajax = async (api, data) => {
    return await fetch(getURL(api, data), getParams(api.method, data))
        .then(res => res.json())
        .then(async res => { return res})
        .catch((e) => {
            return {ok: false, status: "unreachable"}
        });
};

export default ajax;

const getURL = (api, data) => {
    let url = host.uri + api.uri;

    for (const param in data) {
        url = url.replace(":"+param, data[param])
    }

    return url;
};

const getParams = (method, data) => {
    if(method === "POST" || method === "PUT" || method === "DELETE" || data == null) {
        return ({
            method: method,
            processData: false,
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                cookie: {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none'
                }
            },
            cache: 'no-cache',
            credentials: 'include',
            body: JSON.stringify(data),
        })
    } else {
        return ({
            method: method,
            processData: false,
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                cookie: {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none'
                }
            },
            cache: 'no-cache',
            credentials: 'include'
        })
    }
};

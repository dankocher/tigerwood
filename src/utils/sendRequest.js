import ajaxAdmin from "../components/Admin/ajaxAdmin";
import api from "../components/Admin/apiAdmin";

const sendRequest = async ({name, phone, type, data}) => {

    console.log(data)
    let text = data.title;
    let price = 0;
    if (data.name) {
        text = data.name
        try {
            if (data.color_type) {
                text += " " + data.t.options.find(c => c.id === data.color_type).value;
            }
            if (data.price) {
                text += ` (${data.price})`;
                if (data.t && data.t.USD_BYN) {
                    const USD_BYN = Number(data.t.USD_BYN);
                    const dollars = data.price.replace(/\D/g, '');
                    price = Number(dollars * USD_BYN).toFixed(2);
                }
            }
        } catch (e) {

        }
    }

    // console.log({name, phone, text, price})

    let res = await ajaxAdmin(api.sendRequest, {name, phone, price, tag: data.tag, text});
    if (res.ok) {
        return true;
    } else {
        // alert(res.error);
        return false;
    }
}

export default sendRequest;

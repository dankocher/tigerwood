
const AmoCRM = require( 'amocrm-js' );

const crm = new AmoCRM({
    domain: 'tigerwoodby',
    auth: {
        client_id: '961a92e2-b60e-4c9f-a78b-d6f03f1ea01a', // ID интеграции
        client_secret: 'LcT8pQ8tnenz1KKIrmJBQXRleU3iF84dSiaz6z3Jm5KWfZXmfLqcKe2AM7foHotc', // Секретный ключ
        // redirect_uri: 'redirectUri', // Ссылка для перенаправления
        // code: 'def50200829f429eb279f54ae4179931b6d16c68b3937893e71903847b7feb94e0e1dbffa46cc9ba690070e3c22f157afbf2f7ea4dedd6fe8b56d89267b50aa4c9a5bc5efbc26f3a8e781ac625ab84960d90dd655991b6110a2327bc6509ab6cb980da591217b1ea0016695fdbd5b6825959328b701185819dcc1b8fb082c466fcac41c64266dc41ca915ab7ee5b627d080e2659a3af6c71e2c4df2c7690350ccb737b2f8fa04c8e898be1ee8cda31f0c59c3ac73581474a1db8ef802fea71214a46e18599c9d437652e89a61b39e04ae3cb64f8d0a70c34b18f66a40f6386e117cec26715a06c52125250e2caa4b1da1e2e832547ec0c663b4396a98999dc5e0b78514718558a7e0434799649a5e030b1bc1fbc870830b77ed2b32b586f1284288afa7b8adb86ed5d33000a98ddcef97a274c1b686c717b559b4d22b158c92a16f5f3e0d8a6034796a5a4c30f97dbcffb31888def5ace3732cc42713f29bff6fcdded65575cad17925363d194e8ae0e03abde8183f02644fbd021aa3b78bf3151f878dd25b7d3c28910200e6063a7871fefc2728a5728e0efa3ce765255eac6588e3f8b6db99d0e736370403959b42db38a8b3ffb524b15bdc8a0c645720321b095ba41da37630b47',

        redirect_uri: 'https://ea12b3093f36.ngrok.io/',
        server: {
            port: 3001
        }
    },
});

(async () => {
    const url = crm.connection.getAuthUrl();
    console.log({url})
    const response = await crm.request.get("/api/v4/leads");
    console.log(response.data);
})();

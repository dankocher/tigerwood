
const AmoCRM = require( 'amocrm-js' );

const crm = new AmoCRM({
    domain: 'tigerwoodby',
    auth: {
        client_id: '22031209-f4bf-45e1-9081-35e347e0f53c', // ID интеграции
        client_secret: 'qzzyGrk1V6Ah5riOqnF74l12WMP95bskLGTmDxESccZqwd8rDS2Ve8FzyMAsdGbE', // Секретный ключ
        // redirect_uri: 'redirectUri', // Ссылка для перенаправления
        code: 'def50200f8e6a91ba7ad555fff159cb089e6f4dd25c98ea92cb9ad3e047b414aef683b273348b51de70be299e90fff19b5878a0e35f2a84907fc5810b21f73582b317a1a13c8e8e36ea09706bcb7b61d98c858bb43e248420140a64783770a25dde95cff426013e43788d04d9d23c2e4a95b0cebbcb77de4d86391a8c524a015214e66dc22d456f2ea10ab1f547222f42bd4a8dcb12f69b9ec3837d72546097803d5c97fc27f96cfa5f67fa53368f8c67c1f450a6582827e85a27c3c1714fbb938907c6aad590e3cf98f03e29ab153fe463ece97508bf8a76c91c435bb959fc2173ee7926427a1a22b8fcb0772646e21b71c142b4ffc87edc705886bc42932eea3fc7434c058653801a5532e71b7ce5c488c91db9362195cb7364b93b3d18e42bc7ee0675840ef002698fb122329fc635fb9c33c93c09bd2037de650ec2688cfb2568feb10d670c853a4045e63fd63bec77216cfb9d04d28f51d74c0248ba123663fffa03081382ef7e752e0c199c093b00574d3cb558bdad555f85941d6578219a44d26ec8cc22b217c4a7e931d97c3f3642cee98d9827f4c6e0c2331d8e35fe9977869dfb23819775ec054e7dad1d6a933c0fb49e2dcd9896b7be3360cd1861a031d4516cebb7d705038de0ce2c2ab5a5c22cb4038517458effc9106',
        //
        redirect_uri: 'https://71057d1cd664.ngrok.io/api/update_code.php',
        // server: {
        //     port: 80
        // }
    },
});

(async () => {
    const url = crm.connection.getAuthUrl();
    console.log({url})
    const response = await crm.request.get("/api/v4/leads");
    console.log(response.data);
})();

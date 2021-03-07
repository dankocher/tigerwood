
const AmoCRM = require( 'amocrm-js' );

const crm = new AmoCRM({
    domain: 'tigerwoodby',
    auth: {
        client_id: '22031209-f4bf-45e1-9081-35e347e0f53c', // ID интеграции
        client_secret: 'qzzyGrk1V6Ah5riOqnF74l12WMP95bskLGTmDxESccZqwd8rDS2Ve8FzyMAsdGbE', // Секретный ключ
        // redirect_uri: 'redirectUri', // Ссылка для перенаправления
        // code: 'def50200d7e2928f0c22f70765cd5ed7dc1b20a44658d2eaa31cda1229dc0c4d483d166a87a0db786ea0b2041347dbdcc8baf0f6bc89c37c5eb8234e224487018ab1239f35404241aed9e862b035e64da7f460cfbc5a4fd48d6ad2aa29142fde45fade01b5aa5f1fdf6138d72c71446c98bf3a7387f9db7859e962ce938e16997a3e378623251b8957a7a6de2f1079ac44b867769c3bb3b7af4201bf7df5677e1af8cb96c818fb9d303ba1bf64c56f59697e619e6058ce7c8676b31f7a0cebe5d90230c7d4bdd46c3713d967eaf61e2a9e8ac9d10eb1d0e782c8305996f322447a48e412945adf38037b82ff4623988783895ffd2b13dfcd00374a9e485eb0d50ea93f70ae318d6129332c71365126386d5285b2b6b2d42d700bb054ab28ef5f1e73dd433ea6ffeeb63cf7e5f41aed879804c6050bef8d2934d684ddd7f599b75bd3dd1044165944d9d2803522fc4e33192e1f8708f9c9d7c19eaecdfacdb333ecb7656d940353f291e9f7b44e585d687253a6e9b436432a5ad4e16af83946f6d7e056d582526da9c4b20b00032443aa82424e04ec83dcd2020d0ebb2e29c4acad0092712e23fb7fb36576d8c3af8fe6c1fb89e6988b9ad094c2527d03204d55338e78c37e67c931acc32e09fc6965ad95da206a3b5f0e555369522ab3',
        //
        redirect_uri: 'https://71057d1cd664.ngrok.io/api/update_code.php',
        // server: {
        //     port: 80
        // }
    },
});

const url = crm.connection.getAuthUrl();
console.log({url})

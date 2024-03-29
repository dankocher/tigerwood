<?php
include "headers.php";
header("Content-Type: application/json");

$config = json_decode(file_get_contents(__DIR__.'/../api/amocrm_config.json'), true);

$subdomain = $config['domain']; 

$errors = [
	400 => 'Bad request',
	401 => 'Unauthorized',
	403 => 'Forbidden',
	404 => 'Not found',
	500 => 'Internal server error',
	502 => 'Bad gateway',
	503 => 'Service unavailable',
];

$access_token = file_get_contents("../adminapi/___access___token__AMO");

$link = 'https://' . $subdomain . '.amocrm.ru/api/v4/account';

$headers = [
	'Authorization: Bearer ' . $access_token,
	'Content-Type: application/json'
];

$curl = curl_init(); //Сохраняем дескриптор сеанса cURL
/** Устанавливаем необходимые опции для сеанса cURL  */
curl_setopt($curl,CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-oAuth-client/1.0');
curl_setopt($curl,CURLOPT_URL, $link);
curl_setopt($curl,CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl,CURLOPT_HEADER, false);
curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, 1);
curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, 2);
$out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);
/** Теперь мы можем обработать ответ, полученный от сервера. Это пример. Вы можете обработать данные своим способом. */
$code = (int)$code;

try
{
	/** Если код ответа не успешный - возвращаем сообщение об ошибке  */
	if ($code < 200 || $code > 204) {
		throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undefined error', $code);
	}
}
catch(\Exception $e)
{
	// die('Ошибка: ' . $e->getMessage() . PHP_EOL . 'Код ошибки: ' . $e->getCode());
	$res = [
		'ok' => false, 
		"error" => 'Ошибка: ' . $e->getMessage() . PHP_EOL . 'Код ошибки: ' . $e->getCode(), 
		"data" => $data
	];
	echo json_encode($res, JSON_UNESCAPED_UNICODE);
	die();
}

$response = json_decode($out, true);

$res = ['ok' => true, "response" => $response];
echo json_encode($res, JSON_UNESCAPED_UNICODE);

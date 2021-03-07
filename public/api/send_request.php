<?php
include "../adminapi/headers.php";


$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$phone = $data['phone'];
$text = $data['text'];
$price = $data['price'];

$res = ['ok' => true];
echo json_encode($res, JSON_UNESCAPED_UNICODE);
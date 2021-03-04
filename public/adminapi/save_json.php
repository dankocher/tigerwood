<?php
include "headers.php";

$data = json_decode(file_get_contents('php://input'), true);

$fp = fopen("../api/".$data["file"], 'w');
fwrite($fp, json_encode($data["data"], JSON_UNESCAPED_UNICODE));
fclose($fp);

$res = ['ok' => true];
echo json_encode($res, JSON_UNESCAPED_UNICODE);
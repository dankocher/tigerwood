<?php
include "headers.php";


$data = json_decode(file_get_contents('php://input'), true);

session_start();    
$sesion_id = session_id();

$res = ['ok' => false, "session" => $sesion_id];
if ($data['session'] == $sesion_id) {
    $res = ['ok' => true];
}

echo json_encode($res, JSON_UNESCAPED_UNICODE);
<?php
include "headers.php";

$data = json_decode(file_get_contents('php://input'), true);

$pass = file_get_contents("password");

if ($data["user"] === "admin" && $data["pass"] === $pass) {
    session_start();    
    $sesion_id = session_id();
    $res = ['ok' => true, 'session_id'=> $sesion_id];
    echo json_encode($res, JSON_UNESCAPED_UNICODE);
} else {
    $res = ['ok' => false];
    echo json_encode($res, JSON_UNESCAPED_UNICODE);
}
<?php
include "headers.php";

session_start();    
session_destroy();

$res = ['ok' => true];
echo json_encode($res, JSON_UNESCAPED_UNICODE);
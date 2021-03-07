<?php
include "headers.php";

// session_start();
$data = json_decode(file_get_contents('php://input'), true);

unlink("../api/" . $data["path"]);
// echo $data["path"]
// echo "ok";

$res = ['ok' => true];
echo json_encode($res, JSON_UNESCAPED_UNICODE);

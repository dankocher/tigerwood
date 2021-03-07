<?php
include "headers.php";

session_start();

move_uploaded_file($_FILES["image"]["tmp_name"], "../api/" . $_POST["path"]);

$res = ['ok' => true];
echo json_encode($res, JSON_UNESCAPED_UNICODE);

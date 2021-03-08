<?php

session_start();

$pass = file_get_contents("../adminapi/_____secret___PASS____");

if ($pass === sha1($_REQUEST['pass'])) {
    move_uploaded_file($_FILES["build"]["tmp_name"], "./build.zip");

    $zip = new ZipArchive;
    if ($zip->open('build.zip') === TRUE) {
        $zip->extractTo('files/');
        $zip->close();
        echo 'Ready<br>';
    } else {
        echo 'Error<br>';
    }
} else {
    echo 'Incorrect password<br>';
}
unlink("build.zip");
echo "<a href='/update'>Обновить еще раз</a><br>";
echo "<a href='/'>На главную</a>";
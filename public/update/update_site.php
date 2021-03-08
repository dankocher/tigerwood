<?php

session_start();

$pass = file_get_contents("../adminapi/_____secret___PASS____");

if ($pass === sha1($_REQUEST['pass'])) {
    move_uploaded_file($_FILES["build"]["tmp_name"], "./build.zip");

    $zip = new ZipArchive;
    if ($zip->open('build.zip') === TRUE) {
        xcopy("../api", "./temp/api/");
        $zip->extractTo('../');
        $zip->close();
        xcopy("./temp/api/", "../api");
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









function xcopy($source, $dest, $permissions = 0755)
{
    $sourceHash = hashDirectory($source);
    // Check for symlinks
    if (is_link($source)) {
        return symlink(readlink($source), $dest);
    }

    // Simple copy for a file
    if (is_file($source)) {
        return copy($source, $dest);
    }

    // Make destination directory
    if (!is_dir($dest)) {
        mkdir($dest, $permissions);
    }

    // Loop through the folder
    $dir = dir($source);
    while (false !== $entry = $dir->read()) {
        // Skip pointers
        if ($entry == '.' || $entry == '..') {
            continue;
        }

        // Deep copy directories
        if($sourceHash != hashDirectory($source."/".$entry)){
             xcopy("$source/$entry", "$dest/$entry", $permissions);
        }
    }

    // Clean up
    $dir->close();
    return true;
}

// In case of coping a directory inside itself, there is a need to hash check the directory otherwise and infinite loop of coping is generated

function hashDirectory($directory){
    if (! is_dir($directory)){ return false; }

    $files = array();
    $dir = dir($directory);

    while (false !== ($file = $dir->read())){
        if ($file != '.' and $file != '..') {
            if (is_dir($directory . '/' . $file)) { $files[] = hashDirectory($directory . '/' . $file); }
            else { $files[] = md5_file($directory . '/' . $file); }
        }
    }

    $dir->close();

    return md5(implode('', $files));
}
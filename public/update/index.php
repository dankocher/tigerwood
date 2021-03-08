<?php

echo '
<pre>
<form enctype="multipart/form-data" action="/update/update_site.php" method="POST">
    <input type="hidden" name="512mb" value="30000" /><br>
    Загрузите файл <b>buid.zip</b>: <input name="build" type="file" /><br>
    Ведите пароль администратора: <input name="pass" type="password" /><br>
    <input type="submit" value="Отправить файл" />
</form>
<pre>
';
<?php

echo '
<form enctype="multipart/form-data" action="/update/update_site.php" method="POST">
    <input type="hidden" name="512mb" value="30000" />
    Отправить этот файл: <input name="build" type="file" />
    Отправить этот файл: <input name="pass" type="password" />
    <input type="submit" value="Отправить файл" />
</form>
';
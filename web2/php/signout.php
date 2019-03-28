<?php
session_start();
$_SESSION["user"] = null;
echo '
Đăng xuất thành công!
<br>
<a href="../">Trở về trang chủ</a>
'

?>
<?php
session_start();
require_once ('accessDB.php');

$username = isset($_POST["username"])?$_POST["username"]:"";
$password = isset($_POST["password"])?$_POST["password"]:"";

$sql = " SELECT * FROM ThanhVien where username = '".$username."' AND password = '".$password."'";
//echo $sql;
//echo '<br>';
if ($username==null || $password==null) {
	echo 'Đầu vào không hợp lệ!';
	return;
}
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		//setcookie('userID', $row["id"], time()+86400, "/");
		$_SESSION["user"] = $row;
		echo 'Xin chào, '.$username.'!';
		
		echo '<script> 
		window.onload = function() {
			setTimeout(function () {
				window.location.href="../";	
			}, 1000);
		} </script>';
	}			// while $result->fetch_assoc() != null
}
else {
	echo 'Sai tài khoản hoặc mật khẩu';
}

echo '
<br>
<a href="../">Trở về trang chủ</a>
 
';
?>
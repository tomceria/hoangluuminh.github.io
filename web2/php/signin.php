<?php
session_start();
require_once ('accessDB.php');

$username = isset($_POST["username"])?$_POST["username"]:"";
$password = isset($_POST["password"])?$_POST["password"]:"";

$sql = " SELECT * FROM ThanhVien where username = '".$username."' AND password = '".$password."'";
//echo $sql;
//echo '<br>';
if ($username==null || $password==null) {
	echo '0';
	return;
}
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		//setcookie('userID', $row["id"], time()+86400, "/");
		$_SESSION["user"] = $row;
	}			// while $result->fetch_assoc() != null
	echo '1';
}
else {
	echo '0';
}

mysqli_close($conn);
?>
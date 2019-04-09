<?php
$user =isset($_SESSION['user'])?$_SESSION['user']:""; 
if ($user=="" || $user['role'] > 1)
	echo '<script>window.location.href="login.php"</script>';

?>
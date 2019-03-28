<?php
session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<?php require_once('php/template/head.php'); ?>
	</head>
	<body>
		<?php 
			require_once ('php/accessDB.php');
			require_once ('php/DB_PhanLoai.php');
			require_once ('php/DB_SanPham.php');
			mysqli_close($conn);
		?>
		<div id="topbar">
			<?php include_once 'php/template/topBar.php' ?>
		</div>
		<header>
			<?php include_once 'php/template/header.php' ?>
		</header>

		<div id = "container">
			<!-- JAVASCRIPT INSERT MAIN CONTAINER -->
		</div>

		<footer id = "footer">
			<?php include_once 'php/template/footer.php' ?>
		</footer>

<?php  
print '
<script>
	getPage();				// Initiate page only AFTER processing PHP
	getShop();
</script>
';
// GET TOPBAR MODALS
if (!isset($_SESSION["user"]))
	echo '<script>getModal_Login();</script>';
else
	echo '<script>getModal_UserPanel();</script>';
?>

	</body>
</html>
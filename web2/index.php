<?php
session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Prada - Thời trang teen</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="./css/style.css">
		<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
		<!-- Bootstrap core JavaScript -->
    	<script src="vendor/jquery/jquery.min.js"></script>
    	<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    	<script type="text/javascript" src="scripts/main.js"></script>
    	<script type="text/javascript" src="scripts/container.js"></script>		
		<script type="text/javascript" src="scripts/adminPage.js"></script>
		<script type="text/javascript" src="scripts/register.js"></script>
		<script type="text/javascript" src="scripts/carousel.js"></script>
		
	</head>
	<body>
<?php

require_once 'php/getDB.php';

?>
		<div id="topbar">
			<!-- PHP INSERT TOPBAR -->
			<?php getTopBar($userUsername, $userFirstName, $userRole); ?>
		</div>
		<header>
			<div id="logo">
				<div style="margin: auto; width: 150px"><a href="./"><img src="images/prada-logo-500px.png" width="150px" alt="prada" title="Prada - Thời trang teen"/></a></div>
				<p>Designed for fit - Loved for style</p>
			</div>
		</header>

		<div id = "container">
			<!-- JAVASCRIPT INSERT MAIN CONTAINER -->
		</div>

		<footer id = "footer">
			<p align="center">2018 - 2019 Sinh viên Đại học Sài Gòn</p>
		</footer>

<?php  
print '
<script>
	getPage();				// Initiate page only AFTER processing PHP
</script>
';
// GET TOPBAR MODALS
if (!isset($_COOKIE["userID"]))
	echo '<script>getModal_Login();</script>';
else
	echo '<script>getModal_UserPanel();</script>';
?>


	</body>
</html>
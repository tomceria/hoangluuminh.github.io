Hello there, <?php echo htmlspecialchars($_POST['userName']); ?>
<br>
Your password is: <?php echo $_POST['userPw'] ?>
<br>
Your gender is: <?php echo ($_POST['userGender'])?'Female':'Male' ?>
<br>
Your Occupation is: <?php echo $_POST['userRole'] ?>
<br>
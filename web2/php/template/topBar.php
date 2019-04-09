<?php

$isSignedIn = isset($_SESSION["user"]);
$topBar = "";
$name = "";
if ($isSignedIn)
	$name = ($_SESSION["user"]["ten"]!="")?$_SESSION["user"]["ten"]:$_SESSION["user"]["username"];
$topBar.= '
<div style="max-width: 1000px">
	<div class="topbarBtn left" style="line-height: 44px">
		<a id="menuToggle"><img src="images/search-white.png" style="height: 30px;padding: 2px 5px 4px;"></img></a>
	</div>
	<div class="topbarBtn left" style="line-height: 44px">
		<a id="textlogo" href="./"><img src="images/prada-text.png" style="height: 20px; padding: 2px 10px 5px"></img></a>
	</div>
	<div class="topbarBtn">';
if ($isSignedIn==0)
$topBar.= '
		<p><a href="javascript:void(0);" data-toggle="modal" data-target="#modal_login">Đăng nhập</a></p>
		';
else {
$topBar.= 	'
		<p><a href="javascript:void(0);" data-toggle="modal" data-target="#modal_userpanel">'.$name.'</a></p>
	</div>';
	if ($_SESSION["user"]["role"] <= 1) {
$topBar.= '
	<div class="topbarBtn">
		<p><a href="./?admin">Quản trị</a></p>
	</div>';
	};
}
$topBar.='
</div>
</div>
';
echo $topBar;
echo '
<script>
// MENU TOGGLE JQUERY
$("#menuToggle").click(function(e) {
  e.preventDefault();
  $("#sidebar").toggleClass("toggled");
  $("#topbar").toggleClass("toggled");
});
//console.log (document.getElementById("menuToggle").innerHTML);

// TOP BAR TRANSPARENT JQUERY
$(window).scroll( function(e) {
  var scroll = $(window).scrollTop();
  //console.debug(scroll);
  $("#topbar").removeClass("nottop");
  if (scroll > 25)
  	$("#topbar").addClass("nottop");
});
</script>';

?>
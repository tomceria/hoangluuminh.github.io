<?php

$s = "";
$j = 0;

include ('template/getProduct.php');

$s .= '
		<h3>Sản phẩm HOT</h3>';
$s .= 		getProduct ($j++);
$s .= 		getProduct ($j++);
$s .= 		getProduct ($j++);
$s .= 		getProduct ($j++);

$s .= '	<br>
		<hr><br><h3>Khuyến mãi</h3>';
	for ($i=0; $i<4; $i++) {
		$s.=	getProduct ($j++);
	}
$s .= '	<hr style="border-color: white">
		<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto;"><a href="shop.php?filter=deals">Xem tất cả >></a></div>';

$s .= '	<br>
		<hr><br><h3>Áo thun nam</h3>';
	for ($i=0; $i<4; $i++) {
		$s.=	getProduct ($j++);
	}
$s .= '	<hr style="border-color: white">
		<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto;"><a href="shop.php?loai2='.$itemKind[0][1].'">Xem tất cả >></a></div>';

$s .= '	<br>
		<hr><br><h3>Áo thun nữ</h3>';
	for ($i=0; $i<4; $i++) {
		$s.=	getProduct ($j++);
	}
$s .= '	<hr style="border-color: white">
		<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto;"><a href="shop.php?loai2='.$itemKind[0][4].'">Xem tất cả >></a></div>';

$s .= '	<br>
		<hr><br><h3>Quần</h3>';
	for ($i=0; $i<4; $i++) {
		$s.=	getProduct ($j++);
	}
$s .= '	<hr style="border-color: white">
		<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto;"><a href="shop.php?loai1='.$itemKind[1][0].'">Xem tất cả >></a></div>';

$s .= '	<br>
		<hr><br><h3>Nón</h3>';
	for ($i=0; $i<4; $i++) {
		$s.=	getProduct ($j++);
	}
$s .= '	<hr style="border-color: white">
		<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto"><a href="shop.php?loai1='.$itemKind[2][0].'">Xem tất cả >></a></div>';

$s .= '	<br>
		<hr><br><h3>Giày thể thao</h3>';
	for ($i=0; $i<4; $i++) {
		$s.=	getProduct ($j++);
	}
$s .= '	<hr style="border-color: white">
		<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto"><a href="shop.php?loai2='.$itemKind[3][1].'">Xem tất cả >></a></div>';

$s .= '<br><hr>';

echo $s;

?>
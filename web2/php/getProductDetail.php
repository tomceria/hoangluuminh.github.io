<?php
session_start();
require_once ('accessDB.php');
$sql = $_SESSION["originalSP"];
$result = $conn->query($sql);
$item = $result->fetch_assoc();

$sql2 = "SELECT * FROM PhanLoai WHERE id = '".$item["kind"]."'";
$result2 = $conn->query($sql2);
$kindName = $result2->fetch_assoc()["name"];

$s = "";
$s .= '<div style="float: left">
		<img src="' . $item["image"] . '" width="200" height="200" style="margin-top: 50px">
	</div>
	<div id="productDetail">
		<h1>' . $item["name"] . '</h1>
		<table border="1" cellpadding="10px" style="border-collapse: collapse">
			<tr>
				<th>Mã SP</th>
				<td>' . $item["id"] .'</td>
			</tr>
			<tr>
				<th>Thương hiệu</th>
				<td>' . $item["brand"].'</td>
			</tr>
			<tr>
				<th>Loại</th>
				<td>' . $kindName .'</td>
			</tr>
			<tr>
				<th>Màu</th>
				<td>' . $item["color"] .'</td>
			</tr>
		</table>
		<p style="margin: 1em 0"><span id="detailPrice">' . number_format($item["price"], 0, '', '.') . ' ₫</span>

		';
if ($item["sale"]!=0)
	$s.=		'<span id="detailSale">' . number_format($item["sale"], 0, '', '.'). ' ₫</span>';
$s .=	'</p>
		<br>
		<input type="button" class="btn btn-primary" name="addToCartBtn" value="Thêm vào giỏ" onclick="addToCart(\'' . $item["id"] . '\')" style="font-size: 30px"/>	
	</div>';

echo $s;
?>
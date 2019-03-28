<?php

function getProduct ($i) {
	global $item;						// retrieved from DB_SanPham.php
	$s = "";
	//var prodID = getProductID($item[i]["$item[i]["id:"");

	$s .= '<div id="productDiv">
			<a href="shop.php?detail=' . $item[$i]["id"] . '">
			<img src="' . $item[$i]["image"] . '"></a><br>
			<div>
				<p><span class="brand">' . $item[$i]["brand"] . '</span></p>
				<p>' . $item[$i]["name"] . '</p>
				<p>' . $item[$i]["color"] . '</p>
			</div>
			<div>
				<p><span class="price">' . number_format($item[$i]["price"], 0, '', '.') . ' ₫</span>';
	if ($item[$i]["sale"]!=0) {
		$s .=	'<span class="sale">' . number_format($item[$i]["sale"], 0, '', '.') . ' ₫</span>';
	}
	$s .= 		'</p>
				<input type="button" class="btn btn-primary" name="addToCartBtn" value="Thêm vào giỏ" onclick="addToCart(\'' . $item[$i]["id"] . '\')"/>	
			</div>
		</div>';

	return $s;
}

?>
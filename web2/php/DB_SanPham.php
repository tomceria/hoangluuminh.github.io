<?php

	// Get SanPham list
$sql = "SELECT * FROM SanPham";
$filterPhanLoai1 = isset($_GET["loai1"])?$_GET["loai1"]:"";
if ($filterPhanLoai1!=null)
	$sql = "SELECT * FROM SanPham WHERE kind = any (SELECT id FROM PhanLoai WHERE superPL = '$filterPhanLoai1')";
$filterPhanLoai2 = isset($_GET["loai2"])?$_GET["loai2"]:"";
if ($filterPhanLoai1==null && $filterPhanLoai2!=null)
	$sql = "SELECT * FROM SanPham WHERE kind = any (SELECT id FROM PhanLoai WHERE id = '$filterPhanLoai2')";

$filter = isset($_GET["filter"])?$_GET["filter"]:"";
if ($filter!=null) {
	switch ($filter) {
		case "deals": {
			$sql = "SELECT * FROM ($sql) AS TE WHERE TE.sale != 0"; break;
		}
		case "new": {
			$sql = "SELECT * FROM ($sql) AS TE WHERE TE.datetime >= DATE_SUB(NOW(), INTERVAL 1 MONTH)"; break;
		}
	}
	
}

$searchKeyword = isset($_GET["search"])?htmlspecialchars($_GET["search"]):"";
$searchKeyword = str_replace("+", " ", $searchKeyword);
if ($searchKeyword!=null) {
	$sql = "SELECT * FROM ($sql) AS TE WHERE TE.name LIKE _utf8 '%$searchKeyword%' collate utf8_general_ci OR TE.brand LIKE _utf8 '%$searchKeyword%' collate utf8_general_ci OR TE.color LIKE _utf8 '%$searchKeyword%' collate utf8_general_ci";
}
$priceFrom = isset($_GET["giatu"])?htmlspecialchars($_GET["giatu"]):"";
$priceFrom = (int)$priceFrom;
if ($priceFrom!=null) {
	$sql = "SELECT * FROM ($sql) AS TE WHERE TE.price >= $priceFrom ";
}
$priceTo = isset($_GET["giaden"])?htmlspecialchars($_GET["giaden"]):"";
$priceTo = (int)$priceTo;
if ($priceTo!=null) {
	$sql = "SELECT * FROM ($sql) AS TE WHERE TE.price < $priceTo ";
}
	//
					// (ALTERNATIVE) Get Detail
					$detailID = isset($_GET["detail"])?$_GET["detail"]:"";
					if ($detailID!=null) {
						$sql = "SELECT * FROM SanPham WHERE id = '$detailID' ";
					}
					// (ALTERNATIVE) Get cartview => get no item
					$cartview = isset($_GET["cart"])?$_GET["cart"]:"";
					if ($cartview!=null) {
						$sql = "SELECT * FROM SanPham WHERE '0' ";
					}

$sql .= " ORDER BY datetime DESC, id ASC";
// PAGINATION
$result = $conn->query($sql);		 // GET RESULT FIRST BEFORE PAGINATING
$itemOnPage = 12;
$noPages = ($result->num_rows>0)?ceil(((int)$result->num_rows)/$itemOnPage):1;
$originalSQL = $sql;
$_SESSION["originalSP"] = $originalSQL;
$_SESSION["noPages"] = $noPages;


?>
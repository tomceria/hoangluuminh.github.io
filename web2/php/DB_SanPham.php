<?php

	// Get SanPham list
$filterPhanLoai = isset($_GET["loai"])?$_GET["loai"]:"";
$sql = "SELECT * FROM SanPham WHERE id LIKE '".$filterPhanLoai."%' ";
$filter = isset($_GET["filter"])?$_GET["filter"]:"";
if ($filter!=null) {
	switch ($filter) {
		case "deals": {
			$sql = "SELECT * FROM (".$sql.") AS TE WHERE TE.sale != 0"; break;
		}
		case "new": {
			$sql = "SELECT * FROM (".$sql.") AS TE WHERE TE.datetime >= DATE_SUB(NOW(), INTERVAL 1 MONTH)"; break;
		}
	}
	
}
$searchKeyword = isset($_GET["search"])?htmlspecialchars($_GET["search"]):"";
$searchKeyword = str_replace("+", " ", $searchKeyword);
if ($searchKeyword!=null) {
	$sql = "SELECT * FROM (".$sql.") AS TE WHERE TE.name LIKE _utf8 '%".$searchKeyword."%' collate utf8_general_ci OR TE.brand LIKE _utf8 '%".$searchKeyword."%' collate utf8_general_ci OR TE.color LIKE _utf8 '%".$searchKeyword."%' collate utf8_general_ci";
}
$priceFrom = isset($_GET["giatu"])?htmlspecialchars($_GET["giatu"]):"";
$priceFrom = (int)$priceFrom;
if ($priceFrom!=null) {
	$sql = "SELECT * FROM (".$sql.") AS TE WHERE TE.price >= ".$priceFrom." ";
}
$priceTo = isset($_GET["giaden"])?htmlspecialchars($_GET["giaden"]):"";
$priceTo = (int)$priceTo;
if ($priceTo!=null) {
	$sql = "SELECT * FROM (".$sql.") AS TE WHERE TE.price < ".$priceTo." ";
}
	//
					// (ALTERNATIVE) Get Detail
					$detailID = isset($_GET["detail"])?$_GET["detail"]:"";
					if ($detailID!=null) {
						$sql = "SELECT * FROM SanPham WHERE id = '".$detailID."' ";
					}
					// (ALTERNATIVE) Get cartview => get no item
					$cartview = isset($_GET["cart"])?$_GET["cart"]:"";
					if ($cartview!=null) {
						$sql = "SELECT * FROM SanPham WHERE '0' ";
					}

$sql .= " ORDER BY datetime DESC, id ASC";

	// PAGINATION
$result = $conn->query($sql);		 // GET RESULT FIRST BEFORE PAGINATING
$noItems = $result->num_rows;
$noPages = ($result->num_rows>0)?ceil(((int)$result->num_rows)/12):1;
$originalSQL = $sql;
$_SESSION["originalSP"] = $originalSQL;
$_SESSION["noItems"] = $noItems;
$_SESSION["noPages"] = $noPages;
//echo 'ORIGINAL SQL: '.$_SESSION["originalSP"].'<br>';
//echo 'items: '.$result->num_rows.'; noPages: '.$noPages.'<br>';
//echo '<script> var noPages = '.$noPages.' </script>';
	//

$sql .= " LIMIT 0, 12";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	$item = [];										// 2D array: $item[index]["attribute"]
	while ($row = $result->fetch_assoc()) {			// while $result->fetch_assoc() != null
		print '
		<script>
			console.log("'.$row["id"].'");
			item.push(new SanPham("'.$row["id"].'", "'.$row["price"].'", "'.$row["name"].'", "'.$row["brand"].'", "'.$row["color"].'", "'.$row["image"].'", "'.$row["sale"].'"));
		</script>
		';
		array_push($item, $row);
	}
	//echo ("NUMBER OF ITEM: ".sizeof($item));
	print '
	<script>
		console.log(item);
	</script>';
}


?>
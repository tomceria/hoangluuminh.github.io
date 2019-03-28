<?php
session_start();
require_once ('accessDB.php');
$originalSQL = $_SESSION["originalSP"];
$noItems = $_SESSION["noItems"];
$noPages = $_SESSION["noPages"];
echo '<script> item = new Array(); </script>';

$currentPage = isset($_GET["page"])?$_GET["page"]:1;
$currentPage = (int)$currentPage;
//echo '<br>ORIGINAL: '.$originalSQL.'<br>';
$sql = $originalSQL . " LIMIT ".(($currentPage-1)*12).", 12";

$result = $conn->query($sql);
//echo 'items: '.$result->num_rows.'; noPages: '.$noPages.'<br>';
//echo '<script> var noPages = '.$noPages.' </script>';

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

require ('template/getProduct.php');
require ('template/getPageBtn.php');

// getProductWindow()
$s = "";

$itemOnPage = 12;
	//$currentPage from DB_SanPham.php

//Show products
if (sizeof($item) < 1)
	$s .= "<h3>Không có sản phẩm nào</h3>";
for ($i=0; $i<sizeof($item); $i++) {
	//console.log (i + " " + $item[i]["name);
	$s .= getProduct ($i);
}
for ($i=0; $i<$itemOnPage-sizeof($item); $i++) {
	$s .= "<div id='productDiv' class='empty'></div>";	
}

//Show pages buttons
//$noPages = Math.ceil((item.length-1)/12);
//noPages retrieved from DB_SanPham.php
if ($currentPage>0) {
	$s .= "<br>";
	$s .= "<div id='pageBtnDiv'>";

	if ($currentPage>3 && $noPages>5)
		$s .= getPageBtn ("<<");
	if ($currentPage>1)
		$s .= getPageBtn ("<");

	if ($noPages <= 5)
		for ($i=1; $i<=$noPages; $i++) {
			$s .= getPageBtn ($i);
		}
	else if ((int)$currentPage <= 3)							// 1 2 3 4 5
		for ($i=1; $i<=5; $i++) {
			$s .= getPageBtn ($i);
		}
	else if ((int)$currentPage >= $noPages-2)					// 16 17 18 19 20
		for ($i=$noPages-4; $i<=$noPages; $i++) {
			$s .= getPageBtn ($i);
		}
	else												// 2 3 4 5 6 
		for ($i=(int)$currentPage-2; $i<=(int)$currentPage+2; $i++) {
			$s .= getPageBtn ($i);
		}

	if ((int)$currentPage<$noPages && $noPages>1)
		$s .= getPageBtn (">");

	$s .= "</div>";
}
//alert (s);
echo $s;

mysqli_close($conn);
?>
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

function getProduct ($i) {
	global $item;						// retrieved from DB_SanPham.php
	$s = "";
	//var prodID = getProductID($item[i]["$item[i]["id:"");

	$s .= '<div id="productDiv">
			<a href="./?detail=' . $item[$i]["id"] . '">
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

function getPageBtn ($page) {
	$s = "";
	$pageAltered = $page;
	$kind = "pageBtn";
	global $currentPage;				// retrieved from DB_SanPham.php
	//$remainder = window.location.href.split("&page="+currentPage)[1];		// cho advancedSearch

	if ($page == $currentPage)
		$kind = "pageBtnActive";
	if ($page == "<")
		$pageAltered = (int)$currentPage-1;
	else if ($page == ">")
		$pageAltered = (int)$currentPage+1;
	else if ($page == "<<")
		$pageAltered = 1;

	$s .= '<div id="' . $kind . '">';
	if ($kind == "pageBtn") {
		//$s += '<a href="./?' + params[0] + '&page=' + pageAltered + remainder + '">' + page + '</a>';
		$s .= '<a href="javascript:void(0)" onclick="getProductWindow('.$pageAltered.')">'.$page.'</a>';
	}
	else
		$s .= '<p>' . $page . '</p>';
	$s .= '</div>';

	return $s;
}

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

//Show pages buttons
//$noPages = Math.ceil((item.length-1)/12);
//noPages retrieved from DB_SanPham.php
if ($currentPage>0) {
	$s .= "<br>";
	$s .= "<div style=\"clear: both; float: right; margin: 1em 0.5em 1em auto; align-self: flex-end\">";

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
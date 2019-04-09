<?php
session_start();
require_once ('accessDB.php');

if (!isset($_SESSION["currentCart"]) || !isset($_SESSION["user"])) {
	echo 'LỖI!';
	return;
}

$currentCart = $_SESSION["currentCart"];
$user = $_SESSION["user"]["id"];
$newOrder = [];

foreach ($currentCart as $cartItem) {
	$orderItem = (object) [
		'spID' => $cartItem->id,
		'quantity' => $cartItem->quantity,
		'unit_price' => $cartItem->price,
	];
	array_push ($newOrder, $orderItem);
}

$sql = 'INSERT INTO DonHang(user) VALUES ('.$user.')';
$conn->query($sql);
	$sql = 'SELECT max(id) FROM DonHang';
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();
$orderID = $row["max(id)"];

foreach ($newOrder as $orderItem) {
	$sql = 'INSERT INTO ChiTietDonHang(id, spID, quantity, unit_price) VALUES ';
	$sql .= '('.$orderID.', "'.$orderItem->spID.'", '.$orderItem->quantity.', '.$orderItem->unit_price.')';
	$conn->query($sql);
}
//CLEAR ITEM
unset($_SESSION['currentCart']);
//echo '<script>window.localStorage.removeItem ("cart");</script>';

/* LEGACY
echo '
<p>Thanh toán thành công!</p>
<a href="../">Trở về trang chủ</a>
 
';

echo '<script> 
		window.onload = function() {
			setTimeout(function () {
				window.location.href="../";	
			}, 500);
		} </script>';
*/

mysqli_close($conn);
?>
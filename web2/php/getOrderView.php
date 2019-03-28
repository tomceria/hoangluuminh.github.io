<?php 

session_start();
require_once ('accessDB.php');

if (!isset($_SESSION["user"])) {
	echo '<h1>Vui lòng đăng nhập</h1>';
	return;
}

$user = $_SESSION["user"];

//get order
$sql = "SELECT ct.id, ct.spID, sp.name, ct.quantity, ct.unit_price, dh.buy_time, dh.proceed
		FROM ChiTietDonHang ct, DonHang dh, SanPham sp
		WHERE ct.id = dh.id
		AND ct.spID = sp.id
		AND dh.user = ".$user['id']." ";
$result = $conn->query($sql);
//get [orderID][count]
$sql2 = "SELECT dh.id, dh.buy_time, count(*)
		FROM ChiTietDonHang ct, DonHang dh
		WHERE ct.id = dh.id
		AND dh.user = ".$user['id']."
		GROUP BY ct.id ";
$result2 = $conn->query($sql2);
//var_dump($result2->fetch_assoc());

$finalS = "";
while ($row2 = $result2->fetch_assoc()) {
		$s = "";
		//$amount;
		$total = 0;
		//$time;
		//$itemArray = new Array();
		//$itemArrayAmount = new Array();

		//var orderString = window.localStorage.getItem("order"+dem);
		//console.debug (dem + ": " + orderString);
		//var checkingMemberID = orderString.split('/')[0].split(' ')[0].split('=')[1];

		//amount = parseInt(orderString.split('/')[0].split(' ')[1].split('=')[1]);
		//total = parseInt(orderString.split('/')[0].split(' ')[2].split('=')[1]);
		//time = new Date( parseInt(orderString.split('/')[0].split(' ')[3].split('=')[1]) );
		
		$s .= '
		<div class="cartWindow">
			<div class="cartItem">
				<p><span class="cartItemName">Mã đơn: ' . $row2["id"] . '</span></p>
				<p>' . $row2["buy_time"] . '</p>
				<br>';
		for ($i=0; $i<$row2["count(*)"]; $i++) {
			$row = $result->fetch_assoc();
			//echo 'yo<br>';
			//var_dump($row);
			$s .= '<p>' . $row["name"] . ' [' . $row["quantity"] . ']: <b>' . number_format($row["unit_price"], 0, '', '.') . ' ₫</b></p>';
			$total += $row["unit_price"]*$row["quantity"];
		}
		$s .=	'<br>
				<p>Thành tiền: <span class="cartItemPrice">' . number_format($total, 0, '', '.') . ' ₫</span></p>
			</div>
			<div class="cartOptions">';
			if ($row["proceed"]==1)
				$s.='<p style="color: green">Đã xử lý</p>';
			else
				$s.='<p>Đang xử lý</p>';
		$s .='</div>
		</div>
		';
		$finalS = $s . $finalS;			//Xuất ngược (addToHead)
	}

echo $finalS
?>
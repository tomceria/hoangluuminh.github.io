<?php
require_once ('accessDB.php');

$s = "";
$cartArray = isset($_POST["cartArray"])?$_POST["cartArray"]:"";
//echo $cartArray;
//echo '<br>';
if ($cartArray==null)
	$cartArray = [];
else
	$cartArray = json_decode($cartArray);

$currentCart = [];			// array contains complete objects with DB/SanPham's attributes and CartItem's quantity combined

if ($cartArray!=null && sizeof($cartArray)>0) {
	for ($i=0; $i<sizeof($cartArray); $i++) {
		$sql = "SELECT * FROM SanPham WHERE id = '".$cartArray[$i]->item."'";
		$result = $conn->query($sql);
		if ($result->num_rows > 0) {						// ONLY 1 ROW
			while ($row = $result->fetch_assoc()) {			// while $result->fetch_assoc() != null
				$cartItem = (object) [
					'id' => $cartArray[$i]->item,
					'name' => $row["name"],
					'brand' => $row["brand"],
					'color' => $row["color"],
					'image' => $row["image"],
					'price' => $row["price"],
					'sale' => $row["sale"],
					'quantity' => $cartArray[$i]->quantity,
				];
				array_push ($currentCart, $cartItem);
			}
		}
	}
}

$cartTotal = 0;

$s .= '<h1>Giỏ hàng</h1>';
	if (sizeof($currentCart) < 1)
		$s .= '<h3>Giỏ hàng trống</h3>';
	for ($i=0; $i<sizeof($currentCart); $i++) {
		$itemID = $currentCart[$i]->id;
		$itemAmount = $currentCart[$i]->quantity;
		$cartTotal += (int)$currentCart[$i]->price * (int)$currentCart[$i]->quantity;

		$s .= '<div class="cartWindow">
				<a href="./?detail=' . $itemID . '">
					<div style="float: left; width: 100px; height: 100px">
					
						<img src="' . $currentCart[$i]->image . '" width="100px" height="100px"/>
					
					</div>
					<div class="cartItem">
						<p><span class="cartItemName">' . $currentCart[$i]->name . '</span></p>
						<p>Thương hiệu: ' . $currentCart[$i]->brand . '</p>
						<p>Mã SP: ' . $currentCart[$i]->id . '</p>
						<p><span class="cartItemPrice">' . number_format($currentCart[$i]->price, 0, '', '.') . ' ₫</span>';
					if ((int)$currentCart[$i]->sale != 0)
						$s .= '<span class="cartItemSale">' . number_format($currentCart[$i]->sale, 0, '', '.') . ' ₫</span>';
				$s .= '	</p>
					</div>
				</a>
				<div class="cartOptions">
					<p>Số lượng: </p>
					<input type="button" name="amountDecrease" class="btn btn-light" value="-" style="width: 20px; padding: 0" onclick="changeCartItemAmount(\'' . $itemID . '\', \'-\')"/>
					<input type="number" id="item1Amount" value="' . $currentCart[$i]->quantity .'" style="width: 30px" onchange="changeCartItemAmount(\'' . $itemID . '\', this.value)" />
					<input type="button" name="amountIncrease" class="btn btn-light" value="+" style="width: 20px; padding: 0" onclick="changeCartItemAmount(\'' . $itemID . '\', \'+\')"/>
					<input type="button" name="deleteItem" class="btn btn-light" value="Xóa" style="margin: 1.25em 0 0 1em" onclick="removeCartItem(\'' . $itemID . '\')"/>
				</div>
			</div>';
	}
		
$s .= 	'<div style="float: left; clear: both; margin-top: 1em">
			<p>Thành tiền: </p>
			<h2 style="margin: 0; color: #ff9700;">' . number_format($cartTotal, 0, '', '.') . ' ₫</h2>
		</div>
		<div style="float: left; clear: both; margin: 1em 0">';
		if ($cartTotal>0)
			$s .= '<input class="cartPay btn btn-success" type="button" name="checkout" value="Thanh toán" onclick="checkOut()"/>
					<input class="cartClear btn btn-danger" type="button" name="clear" value="Xóa hết" onclick="clearCart()"/>';
$s .=	'</div>';

echo $s;

mysqli_close($conn);
?>
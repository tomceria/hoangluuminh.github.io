<?php 

// San Pham HOT
$item = [];

$sql = "SELECT * FROM SanPham WHERE id = 'AT-004' OR id = 'QT-003' OR id = 'DL-004' OR id = 'BL-003'";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc())
	array_push($item, $row);
// Khuyen mai
$sql = "SELECT * FROM SanPham WHERE sale != 0 ORDER BY 'datetime' DESC, 'id' ASC LIMIT 4";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc())
	array_push($item, $row);
// Ao thun nam
$sql = "SELECT * FROM SanPham WHERE kind = 'AT' ORDER BY 'datetime' DESC, 'id' ASC LIMIT 4";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc())
	array_push($item, $row);
// Ao thun nu
$sql = "SELECT * FROM SanPham WHERE kind = 'AN' ORDER BY 'datetime' DESC, 'id' ASC LIMIT 4";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc())
	array_push($item, $row);
// Quan
$sql = "SELECT * FROM SanPham WHERE kind = any (SELECT id from PhanLoai WHERE superPL = 'Q') ORDER BY 'datetime' DESC, 'id' ASC LIMIT 4";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc())
	array_push($item, $row);
// Non
$sql = "SELECT * FROM SanPham WHERE kind = any (SELECT id from PhanLoai WHERE superPL = 'N') ORDER BY 'datetime' DESC, 'id' ASC LIMIT 4";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc())
	array_push($item, $row);
// Giay the thao
$sql = "SELECT * FROM SanPham WHERE kind = 'GI' ORDER BY 'datetime' DESC, 'id' ASC LIMIT 4";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc())
	array_push($item, $row);


?>
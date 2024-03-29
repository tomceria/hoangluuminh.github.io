<?php 


$sql = 'SELECT * FROM SanPham';
$result = $conn->query($sql);
$items = [];
/*
while ($row = $result->fetch_assoc()) {
  array_push($items, $row);
}
*/
function getItem ($item) {
  echo "
<tr>  
  <td>".$item['id']."</td>
  <td>".$item['name']."</td>
  <td>".$item['kind']."</td>
  <td>".number_format($item["price"], 0, '', '.')." ₫</td>
  <td>".number_format($item["sale"], 0, '', '.')." ₫</td>
  <td>".$item['brand']."</td>
  <td>".$item['color']."</td>
  <td>".$item['image']."</td>
  <td>".$item['remain']."</td>
  <td>".$item['datetime']."</td>
  <td>&nbsp;</td>
</tr>
  ";
}

// PAGING
$originalSQL = $sql;
$itemOnPage = 25;
$noPages = ($result->num_rows>0)?ceil(((int)$result->num_rows)/$itemOnPage):1;
$currentPage = isset($_GET["page"])?$_GET["page"]:1;
$currentPage = (int)$currentPage;

$_SESSION["noPages"] = $noPages;
$_SESSION["currentPage"] = $currentPage;
$ajaxFunction = 'getSanPhamTable';

$sql = $originalSQL . " LIMIT ".(($currentPage-1)*$itemOnPage).", $itemOnPage";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {     // while $result->fetch_assoc() != null
    array_push($items, $row);
  }
}
?>
<?php 

	// Get Sidebar Phanloai list
$sql = "SELECT * FROM `PhanLoai` WHERE `superPL` IS NULL ORDER BY `sortorder` ASC ";
$result = $conn->query($sql);
if($result->num_rows > 0) {
	print '
	<script>
		var menu = new Array ();
		var menuLabel = new Array ();
		var menuUrl = new Array ();
		var itemKind = new Array ();
		
		var item = new Array();
	</script>
	';
	$count = 0;
	while ($row = $result->fetch_assoc()) {
		print '
		<script>
			menuLabel.push("'.$row["name"].'");
			menuUrl.push("'.$row["slug"].'");
			menu['.$count.'] = new Array();
			menu['.$count.'].push("'.$row["name"].'");
			itemKind['.$count.'] = new Array();
			itemKind['.$count.'].push("'.$row["id"].'");
		</script>
		';
		$count += 1;
	}
}
$sql = "SELECT id FROM `PhanLoai` WHERE `superPL` IS NULL ORDER BY `sortorder` ASC ";		// AQNGDB
$phanloai = $conn->query($sql);
$sql = "SELECT * FROM `PhanLoai` WHERE `superPL` IS NOT NULL ORDER BY `sortorder` ASC ";	// List of Sub-PhanLoai
$subPhanloai = $conn->query($sql);
if ($phanloai->num_rows > 0) {
	$count = 0;
	while ($rowI = $phanloai->fetch_assoc()) {
		if ($subPhanloai->num_rows > 0) {
			while ($rowJ = $subPhanloai->fetch_assoc()) {
				if ($rowI["id"]==$rowJ["superPL"]) {
					print '
					<script>
						menu['.$count.'].push("'.$rowJ["name"].'");
						itemKind['.$count.'].push("'.$rowJ["id"].'");
					</script>
					';
				}
			}
		}
		$count += 1;
		$subPhanloai = $conn->query($sql);		// RESET J
	}
}

?>
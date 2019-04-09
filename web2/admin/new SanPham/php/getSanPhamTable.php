<?php

session_start();

require_once ('accessDB.php');
require ('getSanPham.php');

foreach ($items as $newSP) {
	getItem ($newSP);
}

include ('paging.php');

?>
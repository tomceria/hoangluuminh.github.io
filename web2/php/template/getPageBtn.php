<?php

function getPageBtn ($page) {
	$s = "";
	$pageAltered = $page;
	$kind = "pageBtn";
	global $currentPage;				// retrieved from getProductWindow.php
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

?>
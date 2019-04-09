<?php

if(session_id() == ''){
    //session has not started
    session_start();
}

function getPageBtn ($page) {
	$s = "";
	$pageAltered = $page;
	$kind = "pageBtn";
	global $currentPage;	
	global $ajaxFunction;
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
		$s .= '<a href="javascript:void(0)" onclick="'.$ajaxFunction.'('.$pageAltered.')">'.$page.'</a>';
	}
	else
		$s .= '<p>' . $page . '</p>';
	$s .= '</div>';

	return $s;
}

//Show pages buttons
$currentPage = isset($_GET["page"])?$_GET["page"]:1;
$currentPage = (int)$currentPage;
$noPages = $_SESSION["noPages"];
if (!isset($ajaxFunction))
	$ajaxFunction = isset($_GET["ajaxFunction"])?$_GET["ajaxFunction"]:"";

$s = "";
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
echo $s;

?>
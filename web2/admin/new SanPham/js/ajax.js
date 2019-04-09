function getSanPhamTable (page) {
	// AJAX
	var pagingDiv = "<?php getPagingDiv("+page+"); ?>";
    $.ajax({
        url : "php/getSanPhamTable.php",
        type : "get",
        dataType:"text",
        data : {
             page : page
        },
        success : function (result){
            $('#tableSanPham_body').html(result);
            paging ('getSanPhamTable', page);
        }
    });

	//
}

function paging (ajaxFunction, page) {
    $.ajax({
        url : "php/paging.php",
        type : "get",
        dataType:"text",
        data : {
             ajaxFunction : ajaxFunction,
             page : page
        },
        success : function (result){
            $('#paging').html(result);
        }
    });
}
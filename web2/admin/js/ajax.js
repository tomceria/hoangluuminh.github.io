// TABLE SORT FUNCTIONS
function getSanPhamTable (page, attr, sort) {
	var pagingDiv = "<?php getPagingDiv("+page+"); ?>";
    $.ajax({
        url : "php/getSanPhamTable.php",
        type : "get",
        dataType:"text",
        data : {
             page : page,
             attr : attr,
             sort : sort
        },
        success : function (result){
            $('#tableSanPham_body').html(result);
            $('#divSanPham').animate({ scrollTop: 0 }, "fast");
            paging ('getSanPhamTable', page, attr, sort);
        }
    });
}

function paging (ajaxFunction, page, attr, sort) {
    $.ajax({
        url : "php/paging.php",
        type : "get",
        dataType:"text",
        data : {
             ajaxFunction : ajaxFunction,
             page : page,
             attr : attr,
             sort : sort
        },
        success : function (result){
            $('#paging').html(result);
        }
    });
}
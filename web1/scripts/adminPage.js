// code adminPage
//  ADMIN START
function getallproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		itemArray.push(i);
	}
	return itemArray;
}
function getAoproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		var kind = item[i].id.split('-');
		if (kind[0]=="AT" || kind[0]=="AS" || kind[0]=="AL" || kind[0]=="ATN")
			itemArray.push(i);
	}
	return itemArray;
}
function getQuanproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		var kind = item[i].id.split('-');
		if (kind[0]=="QT" || kind[0]=="QJ")
			itemArray.push(i);
	}
	return itemArray;
}
function getNonproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		var kind = item[i].id.split('-');
		if (kind[0]=="NK" || kind[0]=="NS")
			itemArray.push(i);
	}
	return itemArray;
}
function getGiayproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		var kind = item[i].id.split('-');
		if (kind[0]=="GI" || kind[0]=="GICS")
			itemArray.push(i);
	}
	return itemArray;
}
function getDepproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		var kind = item[i].id.split('-');
		if (kind[0]=="DL" || kind[0]=="DS")
			itemArray.push(i);
	}
	return itemArray;
}
function getBaloproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		var kind = item[i].id.split('-');
		if (kind[0]=="BL" || kind[0]=="TDC" || kind[0]=="TX")
			itemArray.push(i);
	}
	return itemArray;
}
function viewProductsAdmin(number){
	var sa = "";
	var itemArray ;//= new Array();
	switch(number){
		case 1: itemArray = getallproducts(); break;
		case 2: itemArray = getAoproducts(); break;
		case 3: itemArray = getQuanproducts(); break;
		case 4: itemArray = getNonproducts(); break;
		case 5: itemArray = getGiayproducts(); break;
		case 6: itemArray = getDepproducts(); break;
		case 7: itemArray = getBaloproducts(); break;
	}
	if(itemArray.length==0) return `<h1>Không có s?n ph?m nào</h1>`;
	sa+=`<table border="1" style="border-collapse: collapse">`;
	sa +=`<tr>
			<td style="width:100px;height:100px"><form> <input type="button" name ="addproduct" value="+" onclick="addnewproduct()"></form> </td>
			<td colspan=6 ><p><span style="font-size:25px" class="cartItemName" >Thêm sản phẩm</span></p> </td>
		  </tr>`
		for (var i=0; i<itemArray.length; i++) {
			var itemID = itemArray[i];
			sa+=`<tr border="1" type="double" >`
			+ `<td style="width:100px; margin-right:15px"><p>` + item[itemID].id + `</p></td>`
			+`<td style="width: 200px"><p><span class="cartItemName">` + item[itemID].name + `</span></p></td>`
			+ `<td style=" width: 100px; height: 100px"><img src="` + item[itemID].image + `" width="100px" height="100px"/>
				</td>`
			+ `<td style="width: 150px"><p>` + item[itemID].brand + `</p> </td>`
			+ `<td style="width: 150px"><p>` +item[itemID].color + `</p> </td>`
			+ `<td style="width: 150px"> <p><span class="cartItemPrice">` + item[itemID].price + `₫</span>`
					if (item[itemID].sale!=0)
						sa += `<span class="cartItemSale">` + item[itemID].sale + `₫</span>`
					sa += `</p> </td>`
			sa +=`<td style="width: 150px"> 
					<input type="button" name ="editproduct" value="sửa" onClick="">
					<input type="button" name ="deleteproduct" value="xóa" onClick="removeproduct(`+item[itemID].id +`)">
				  </td>`
			sa+= `</tr>`;					
		}
	sa+=`</table>`
	return sa;
}
function adminSelectView(){
	var s=document.getElementById("viewproducts").value;
	var a="";
	switch(s){
		case "1": a=viewProductsAdmin(1); break;
		case "2": a=viewProductsAdmin(2); break;
		case "3": a=viewProductsAdmin(3); break;
		case "4": a=viewProductsAdmin(4); break;
		case "5": a=viewProductsAdmin(5); break;
		case "6": a=viewProductsAdmin(6); break;
		case "7": a=viewProductsAdmin(7); break;
		default: a=""; break;
	}
	document.getElementById("adminmain").innerHTML = a;
}
function removeproduct(id){
	alert("hello");
}
// ADD NEW PRODUCT
function addnewproduct(){
	window.open('addproductPage.html','addproduct','width=400,height=300,top=200,left=200');
} 
function checkaddproduct(){
	var itemArray = new Array();
	var spid=document.formaddproduct.idpro.value;
	//var image=document.formaddproduct.imgpro.value;alert(image);
	var kt=1;
	var s="";
	if(spid==""){
		s+="Bạn chưa nhập mã\n";
		document.formaddproduct.idpro.style.borderColor ="red";
		kt=0;
	}
	if(spid!="")
	for(var i=1;i<item.length;++i)
		if(spid == item[i].id ){kt=0; s+="Mã sản phẩm bị trùng\n"; 
			document.formaddproduct.idpro.style.borderColor ="red";break;}
	if( kt==1) document.formaddproduct.idpro.style.borderColor ="#17EB50";
	var name=document.formaddproduct.namepro.value;
	if(name==""){
		s+="Bạn chưa nhập tên sản phẩm\n";kt=0;
		document.formaddproduct.namepro.style.borderColor ="red";
	}
	else document.formaddproduct.namepro.style.borderColor ="#17EB50";
	var brand=document.formaddproduct.brandpro.value;
	if(brand==""){
		s+="Bạn chưa nhập nhãn hiệu sản phẩm\n";kt=0;
		document.formaddproduct.brandpro.style.borderColor ="red";
	}
	else document.formaddproduct.brandpro.style.borderColor ="#17EB50";
	var color=document.formaddproduct.colorpro.value;
	if(color==""){
		s+="Bạn chưa nhập màu sắc chủ đạo của sản phẩm\n";kt=0;
		document.formaddproduct.colorpro.style.borderColor ="red";
	}
	else document.formaddproduct.colorpro.style.borderColor ="#17EB50";
	var price=document.formaddproduct.pricepro.value;
	if(price==""){
		s+="Bạn chưa nhập giá trị của sản phẩm\n";kt=0;
		document.formaddproduct.pricepro.style.borderColor ="red";
	}
	else document.formaddproduct.pricepro.style.borderColor ="#17EB50";
	if(kt==1){		
		alert("Bạn thêm sản phẩm thành công");
		window.opener.location.href = "index.html?admin";
		window.close();
		return true;
	}
	else{
		alert(s);
		return false;
	}
}
function fixid(){	
	document.formaddproduct.idpro.style.borderColor ="white";
}
function fixname(){	
	document.formaddproduct.namepro.style.borderColor ="white";
}
function fixbrand(){	
	document.formaddproduct.brandpro.style.borderColor ="white";
}
function fixcolor(){	
	document.formaddproduct.colorpro.style.borderColor ="white";
}
function fixprice(){	
	document.formaddproduct.pricepro.style.borderColor ="white";
}
function showimage(){
	var image=document.formaddproduct.imgpro.value;
	document.getElementById("image").innerHTML=`<div><img src="` + image+ `" width="100px" height="100px"/></div>`;
}
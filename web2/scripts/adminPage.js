// code adminPage
//  ADMIN START
function getOptionProduct(){
	var s="";
	s+=`<div>
			<select id="viewproducts" size="auto" onChange="return adminSelectView(this)" >
				<option value="0" hidden="true">[Chọn danh mục cần xem] </option>
				<option value="1">Tất cả sản phẩm </option>
				<option value="2">Áo </option>
				<option value="3">Quần </option>
				<option value="4">Nón </option>
				<option value="5">Giày </option>
				<option value="6">Dép </option>
				<option value="7">Balo </option>
			</select>
		</div>`;
	document.getElementById("optionview").innerHTML +=s;
}
function getListOrder(){
	var s="";
	s=setListOrder();
	document.getElementById("adminmain").innerHTML=s;
}
function getOrderDate(){
	var s="";
	s+=`
		<div style="clear:both; float:left"><input type="date" id="startdate"> ~</div>
		<div style="float:left"><input type="date" id="enddate" > </div>
		<div style="float:left"><input type="button" name="viewdateorder" value="Tìm kiếm" onclick="getListOrderDate()"> </div>
		`;
	document.getElementById("optionview").innerHTML =s;
}
function setListOrder(){
	var bang="";
    var tam="";
    tam+=`<table border="1" style="border-collapse: collapse">
        <tr>
            <td width="50px" align="center" bgcolor="a39c84"><p>STT</p></td>
			<td width="150px" align="center" bgcolor="a39c84"><p>Khách hàng</p></td>
            <td width="350px" align="center" bgcolor="a39c84"><p>Đơn hàng</p></td>
			<td width="150px" align="center" bgcolor="a39c84"><p>Thành tiền</p></td>
            <td width="150px" align="center" bgcolor="a39c84"><p>Thời gian</p></td>
            <td width="100px" align="center" bgcolor="a39c84"><p>Trạng thái</p></td>
            <td width="50px" align="center" bgcolor="a39c84"><button name="save" onclick="savedelivering()">Lưu</button></td>
        </tr>`;
    var dem=0;
    while (true) {
		var namecheck;
		namecheck= "solve"+dem;
        var s = "";
        var amount;
        var total;
        var time;
        var itemArray = new Array();
        var itemArrayAmount = new Array();
 		
        if (window.localStorage.getItem("order"+dem)==null)
            break;
		
        var orderString = window.localStorage.getItem("order"+dem);
		var status = window.localStorage.getItem("order"+dem+"status");
		var memberID = orderString.split('/')[0].split(' ')[0].split('=')[1];
		var name = window.localStorage.getItem ("user"+memberID);
		
        amount = parseInt(orderString.split('/')[0].split(' ')[1].split('=')[1]);
        total = parseInt(orderString.split('/')[0].split(' ')[2].split('=')[1]);
        time = new Date( parseInt(orderString.split('/')[0].split(' ')[3].split('=')[1]) );
        for (var i=0; i<amount; i++) {
            itemArray.push (parseInt(orderString.split('/')[1].split(' ')[i].split('=')[0]));
            itemArrayAmount.push (parseInt(orderString.split('/')[1].split(' ')[i].split('=')[1]));
        }
        s+=`<tr>
        <td align="center" bgcolor="e5dfc9"><p>` + dem + `</p></td>
		<td align="center" ><p>` + name + `</p></td>
        <td>`;         
        for (var i=0; i<amount; i++) {
            s += `<p>` + item[itemArray[i]].name + ` [` + itemArrayAmount[i] + `]: <b>` + parseInt(item[itemArray[i]].price.replace(/\./g, ''))*itemArrayAmount[i] + `₫</b></p>`;
        }
		s+=`</td>`
        s+=`<td align="center"><p><span class="cartItemPrice">` + total + `₫</span></p></td>`;
        s+=`<td align="center"><p>` + time.toLocaleDateString() + `<br> ` + time.toLocaleTimeString() + `</p></td>`;
		
		if(status=="delivering") {
			s+=`<td align="center"><p style="color: green">Đã xử lý</p></td>
        	<td align="center"><input type="checkbox" id="`+namecheck+`" value="delivering" checked==true></td>
        	</tr>`;		
		}
		else {
			s+=`<td align="center"><p>Chưa xử lý</p></td>
        	<td align="center"><input type="checkbox" id="`+namecheck+`" value="delivering"></td>
        	</tr>`;
		}
        bang=s+bang;
        dem++;
    }
    bang+=`</table>`;
    tam+=bang;
    return tam;
}
function getListOrderDate(){
	var s="";
	s=searchdate();
	document.getElementById("adminmain").innerHTML=s;
}
function searchdate(){
	var start;
	var end;
	if(document.getElementById("startdate").value!="")
		start= document.getElementById("startdate").valueAsDate;
	else start=new Date(1900,1,1,0,0,0);
	if(document.getElementById("enddate").value!="")
		end= document.getElementById("enddate").valueAsDate;
	else end=new Date(3000,12,1,23,59,59);
	end.setHours(23);end.setMinutes(59); end.setSeconds(59);
	var bang="";
    var tam="";
    tam+=`<table border="1" style="border-collapse: collapse">
        <tr>
            <td width="50px" align="center" bgcolor="a39c84"><p>STT</p></td>
			<td width="150px" align="center" bgcolor="a39c84"><p>Khách hàng</p></td>
            <td width="350px" align="center" bgcolor="a39c84"><p>Đơn hàng</p></td>
			<td width="150px" align="center" bgcolor="a39c84"><p>Thành tiền</p></td>
            <td width="150px" align="center" bgcolor="a39c84"><p>Thời gian</p></td>
            <td width="100px" align="center" bgcolor="a39c84"><p>Trạng thái</p></td>
            <td width="50px" align="center" bgcolor="a39c84"><button name="save" onclick="savedelivering()">Lưu</button></td>
        </tr>`;
    var dem=0;
    while (true) {
		var namecheck;
		namecheck= "solve"+dem;
        var s = "";
        var amount;
        var total;
        var time;
        var itemArray = new Array();
        var itemArrayAmount = new Array();
 		
        if (window.localStorage.getItem("order"+dem)==null)
            break;
		var orderString = window.localStorage.getItem("order"+dem);
        var time = new Date( parseInt(orderString.split('/')[0].split(' ')[3].split('=')[1]) );
        if(time>=start && time<=end){
			var status = window.localStorage.getItem("order"+dem+"status");
			var memberID = orderString.split('/')[0].split(' ')[0].split('=')[1];
			var name = window.localStorage.getItem ("user"+memberID);		
        	amount = parseInt(orderString.split('/')[0].split(' ')[1].split('=')[1]);
        	total = parseInt(orderString.split('/')[0].split(' ')[2].split('=')[1]);
			for (var i=0; i<amount; i++) {
				itemArray.push (parseInt(orderString.split('/')[1].split(' ')[i].split('=')[0]));
				itemArrayAmount.push (parseInt(orderString.split('/')[1].split(' ')[i].split('=')[1]));
			}
			s+=`<tr>
			<td align="center" bgcolor="e5dfc9"><p>` + dem + `</p></td>
			<td align="center" ><p>` + name + `</p></td>
			<td>`;         
			for (var i=0; i<amount; i++) {
				s += `<p>` + item[itemArray[i]].name + ` [` + itemArrayAmount[i] + `]: <b>` + parseInt(item[itemArray[i]].price.replace(/\./g, ''))*itemArrayAmount[i] + `₫</b></p>`;
			}
			s+=`</td>`
			s+=`<td align="center"><p><span class="cartItemPrice">` + total + `₫</span></p></td>`;
			s+=`<td align="center"><p>` + time.toLocaleDateString() + `<br> ` + time.toLocaleTimeString() + `</p></td>`;

			if(status=="delivering") {
				s+=`<td align="center"><p style="color: green">Đã xử lý</p></td>
				<td align="center"><input type="checkbox" id="`+namecheck+`" value="delivering" checked==true></td>
				</tr>`;		
			}
			else {
				s+=`<td align="center"><p>Chưa xử lý</p></td>
				<td align="center"><input type="checkbox" id="`+namecheck+`" value="delivering"></td>
				</tr>`;
			}
			bang=s+bang;
		}
		dem++;
    }
    bang+=`</table>`;
    tam+=bang;
    return tam;
}
function savedelivering(){
    var dem=0;
    while(true){
        if(window.localStorage.getItem("order"+dem) == null) break;
        var check="solve"+dem;
        if(document.getElementById(check).checked==true)
            window.localStorage.setItem("order"+dem+"status", "delivering");
		else window.localStorage.setItem("order"+dem+"status","");
        dem++;
    }
    window.location.href="index.html?admin?order";
}
// product
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
			var spID = item[itemID].id;
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
					<button name ="deleteproduct" onclick="removeproduct('`+ spID+`')">Xóa</button>
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
	//alert("hello");alert(id);
	var check= confirm("Bạn có chắc chắn muốn xóa sản phẩm: "+id);
	if(check==true) {alert("Sản phẩm đã xóa thành công"); window.location.href="index.html?admin"; }
}
// ADD NEW PRODUCT
function addnewproduct(){
	window.open('addproductPage.html','addproduct','width=400,height=300,top=200,left=200');
} 
function editproduct(){
	var newWindow = window.open('addproductPage.html','addproduct','width=400,height=300,top=200,left=200');
	newWindow.alert("hello");
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
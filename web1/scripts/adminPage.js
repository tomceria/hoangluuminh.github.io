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
		if (kind[0]=="AT" || kind[0]=="AS")
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
		if (kind[0]=="GI")
			itemArray.push(i);
	}
	return itemArray;
}
function getDepproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		var kind = item[i].id.split('-');
		if (kind[0]=="DE")
			itemArray.push(i);
	}
	return itemArray;
}
function getBaloproducts(){
	var itemArray = new Array();
	for(var i=1;i<item.length;++i){
		var kind = item[i].id.split('-');
		if (kind[0]=="BL" || kind[0]=="BW")
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
	sa+=`<table border="1" style="border-collapse: collapse">`
		for (var i=0; i<itemArray.length; i++) {
			var itemID = itemArray[i];
//			sa += `<div class="cartWindow">
//					<div style="float: left; width: 100px; height: 100px">
//						
//							<img src="` + item[itemID].image + `" width="100px" height="100px"/>
//						
//					</div>
//					<div class="cartItem">
//						<p><span class="cartItemName">` + item[itemID].name + `</span></p>
//						<p>ThÆ°Æ¡ng hiá»‡u: ` + item[itemID].brand + `</p>
//						<p> Mau sac: ` +item[itemID].color + `</p>
//						<p>MÃ£ SP: ` + item[itemID].id + `</p>
//						<p><span class="cartItemPrice">` + item[itemID].price + `â‚«</span>`
//					if (item[itemID].sale!=0)
//						sa += `<span class="cartItemSale">400.000â‚«</span>`
//					sa += `</p>
//					</div> 
//					</a>					
//				</div>`;
			sa+=`<tr border="1" type="double" >`
			+ `<td><p>` + item[itemID].id + `</p></td>`
			+`<td style="width: 200px"><p><span class="cartItemName">` + item[itemID].name + `</span></p></td>`
			+ `<td style=" width: 100px; height: 100px"><img src="` + item[itemID].image + `" width="100px" height="100px"/>
				</td>`
			+ `<td><p>` + item[itemID].brand + `</p> </td>`
			+ `<td><p>` +item[itemID].color + `</p> </td>`
			+ `<td> <p><span class="cartItemPrice">` + item[itemID].price + `â‚«</span>`
					if (item[itemID].sale!=0)
						sa += `<span class="cartItemSale">400.000â‚«</span>`
					sa += `</p> </td>`
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
		case "5": a=viewProductsAdmin(4); break;
		case "6": a=viewProductsAdmin(6); break;
		case "7": a=viewProductsAdmin(7); break;
		default: a=""; break;
	}
	document.getElementById("adminmain").innerHTML = a;
}
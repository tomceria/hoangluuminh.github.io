class SanPham {
	constructor (id, price, name, brand, color, image, sale) {
		this.id = id;
		this.price = price;
		this.name = name;
		this.brand = brand;
		this.color = color;
		this.image = image;
		this.sale = sale;
	}
}
class CartItem {
	constructor (item, quantity) {
		this.item = item;
		this.quantity = quantity;
	}
}

/*
// MENU (LEGACY, FOR REFERENCES)
var menu = new Array ();
var menuLabel = new Array ("Áo", "Quần", "Nón", "Giày", "Dép", "Balo");
var menuUrl = new Array ("ao", "quan", "non", "giay", "dep", "balo");
menu[0] = new Array ("Áo", "Áo thun nam", "Áo sơ mi nam ", "Áo len nữ", "Áo thun nữ");
menu[1] = new Array ("Quần", "Quần thun", "Quần jean");
menu[2] = new Array ("Nón", "Nón kết", "Nón snapback");
menu[3] = new Array ("Giày","Giày thể thao","Giày công sở");
menu[4] = new Array ("Dép","Dép lê","Sandal");
menu[5] = new Array ("Balo", "Balo du lịch", "Túi đeo chéo", "Túi xách");
var itemKind = new Array ();
itemKind[0] = new Array ("A", "AT", "AS", "AL", "ATN");
itemKind[1] = new Array ("Q", "QT", "QJ");
itemKind[2] = new Array ("N", "NK", "NS");
itemKind[3] = new Array ("G","GI", "GICS");
itemKind[4] = new Array ("D","DL", "DS");
itemKind[5] = new Array ("B", "BL", "TDC", "TX");
*/

// HREF
var url = window.location.href;
var splitter = url.split("?");			// [./]?[ao&1&0]
var splitted = "";
if (url != splitter)					// url == splitter => ./
	splitted = splitter[1];				// [ao&1&0]
var params = splitted.split("&");		// [ao]&[1]&[0] ; 0: Category; 1: Subcategory; 2: Page

/* ------------------------ */

function getCartBtnNum () {				// Can be run multiple times
	var s = "";
	var itemArray = getCartList();
	if (itemArray.length <= 0) {
		$("#cartBtnNum").addClass("empty");
		$("#cartBtnNum").html(s);
		return;
	}
	$("#cartBtnNum").removeClass("empty");

	var amount = 0;
	for (var i=0; i<itemArray.length; i++) {
		//amount += parseInt(window.localStorage.getItem ("item"+itemArray[i]));
		amount += itemArray[i].quantity;
	}

	s += `<div><p>` + amount + `</p></div>`;

	$("#cartBtnNum").html(s);
}

function getMenu () {
	var s = "";
	
	var page = 1;		//Default page

	s += `<table cellspacing="0">`;

	for (var i=0; i<menu.length; i++) {
		s += `<tr>
				<td>
					<a href="./?loai=` + itemKind[i][0] + `\" target=\"_self\" title=\"` + menuLabel[i] + `\">` + menuLabel[i] + `</a>
					<div>
						<ul>`;

							for (var j=1; j<menu[i].length; j++) {
								s += `<li><a href="./?loai=` + itemKind[i][j] + `" target="_self" title="` + menu[i][j] + `">` + menu[i][j] + `</a></li>`;
							}

		s += `			</ul>
					</div>
				</td>
			</tr>`;
	}

	s += "</table>";

	document.getElementById("sidebar").innerHTML += s;
}

function getProductWindow (page) {
	// AJAX
	$.ajax({
        url : "php/getProductWindow.php",
        type : "get",
        dataType:"text",
        data : {
             page : page
        },
        success : function (result){
            $('#main').html(result);
        }
    });

	//
}

/*
function getProduct (i, item) {
	//item[] trong day la` items[] da~ dc filter
	var s = "";
	//var prodID = getProductID(item[i]?item[i].id:"");

	s += `<div id="productDiv">
			<a href="./?detail=` + item[i].id + `">
			<img src="` + item[i].image + `"></a><br>
			<div>
				<p><span class="brand\">` + item[i].brand + `</span></p>
				<p>` + item[i].name + `</p>
				<p>` + item[i].color + `</p>
			</div>
			<div>
				<p><span class="price">` + parseInt(item[i].price).toLocaleString('vi', {style : 'currency', currency : 'VND'}) + `</span>`;
	if (item[i].sale!=0) {
		s +=	`<span class="sale">` + parseInt(item[i].sale).toLocaleString('vi', {style : 'currency', currency : 'VND'}) + `</span>`;
	}
	s += 		`</p>
				<input type="button" class="btn btn-primary" name="addToCartBtn" value="Thêm vào giỏ" onclick="addToCart('` + item[i].id + `')"/>	
			</div>
		</div>`;

	return s;
}
*/

function goSearch (keyword) {
	var s = `./?search=`;
	keyword = removeTone (keyword);
	keyword = keyword.replace (/ /g, "+");						//OPTIONAL
	s += keyword;
	//s += `&`;
	window.location.href = s;
}

function goAdvancedSearch (keyword, kind, priceFrom, priceTo) {
	//./?advancedsearch=keyword&0&page&kind&from&to
	var s = `./?search=`;
	keyword = removeTone (keyword);
	keyword = keyword.replace (/ /g, "+");						//OPTIONAL
	s += keyword;
	//s += '&';
	if (kind=="all")
		s += '&loai=';
	else
		s += '&loai='+itemKind[kind.split('&')[0]][kind.split('&')[1]];
	s += '&giatu='+priceFrom;
	s += '&giaden='+priceTo;
	window.location.href = s;
}

/* CART */
function addToCart (id) {
	var currentCart = getCartList();		// default is array
	if (currentCart.length < 1)
		currentCart.push(new CartItem (id, 1));
	else {
		var newitem = 1;
		for (var i=0; i<currentCart.length; i++) {
			if (currentCart[i].item == id) {
				currentCart[i].quantity -= -1;
				newitem = 0;
				break;
			}
		}
		if (newitem == 1)
			currentCart.push(new CartItem (id, 1));
	}

	window.localStorage.setItem("cart", JSON.stringify(currentCart));
	alert ("Đã thêm vào giỏ hàng!");
	window.location.href = window.location.href;

}
function changeCartItemAmount (id, amount) {
	var currentCart = getCartList();		// default is array
	var index = 0;
	for (var i=0; i<currentCart.length; i++) {
		if (currentCart[i].item == id) {
			index = i;
			break;
		}
	}
	var currentAmount = currentCart[index].quantity;
	if (amount == '-')
		amount = parseInt(currentAmount)-1;
	else if (amount == '+')
		amount = parseInt(currentAmount)+1;
	if (parseInt(amount) < 1)
		amount = 1;
	currentCart[index].quantity = parseInt(amount);
	var cartString = JSON.stringify(currentCart);
	window.localStorage.setItem ("cart", cartString);

	// RELOAD
	getCartView();			// RELOAD DB WITH AJAX
	//getCartBtnNum();
}
function removeCartItem (id) {
	var currentCart = getCartList();		// default is array
	var index = 0;
	for (var i=0; i<currentCart.length; i++) {
		if (currentCart[i].item == id) {
			index = i;
			break;
		}
	}
	currentCart.splice (index, 1);
	//window.localStorage.setItem ("item"+id, amount);				// TODO: AJAX
	var cartString = JSON.stringify(currentCart);
	window.localStorage.setItem ("cart", cartString);
	// RELOAD
	getCartView();			// RELOAD DB WITH AJAX
	getCartBtnNum();
}
function clearCart () {
	window.localStorage.removeItem ("cart");
	window.location.href = "./";
}

function checkOut () {											// TODO !!!
	if (window.localStorage.getItem("signedinID")==null) {
		alert ("Vui lòng đăng nhập trước khi mua");
		return;
	}
	if (confirm("Bạn chắc chắn muốn mua?")==false)
		return;
	alert ("Mua thành công!");

	// memberid=0 amount=7 total=3867222 time=1543115459890/1=1 5=3 8=6 13=3 16=1 
	// Thêm vào đơn đặt hàng
	var d = new Date();
	var orderString = "";
	orderString += `memberid=`+window.localStorage.getItem("signedinID")+` `;
	orderString += `amount=`+getCartList().length+` `;
	orderString += `total=`+totalCart(getCartList())+` `;
	orderString += `time=`+d.valueOf()+`/`;

	for (var i=1; i<item.length; i++) {
		var itemAmount = window.localStorage.getItem ("item"+i);
		if (itemAmount != null && itemAmount>0)
			orderString += i+`=`+itemAmount+` `;
	}

	var dem=0;
	while (true) {
		if (window.localStorage.getItem("order"+dem)==null)
			break;
		dem++;
	}
	window.localStorage.setItem("order"+dem, orderString);
	//

	clearCart ();
}

function getCartList () {
	return JSON.parse (window.localStorage.getItem("cart")) || [];
}

/* end CART */

function removeTone(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

function getComparator (item) {
	var comparator = "";
	var cID = item.id.toLowerCase();
	var cName = removeTone(item.name.toLowerCase()).split(" ");
	var cBrand = removeTone(item.brand.toLowerCase()).split(" ");
	var cColor = removeTone(item.color.toLowerCase()).split(" ");

	comparator += cID + " ";
	for (var i=0; i<cName.length; i++) {
		comparator += cName[i] + " ";	
	}
	for (var i=0; i<cBrand.length; i++) {
		comparator += cBrand[i] + " ";	
	}
	for (var i=0; i<cColor.length; i++) {
		comparator += cColor[i] + " ";	
	}
	return comparator;
}

function getKindName (itemID) {
	var kind = item[itemID].id.split('-')[0];

	for (var i=0; i<itemKind.length; i++)
		for (var j=0; j<itemKind[i].length; j++)
			if (kind == itemKind[i][j])
				return menu[i][j];
}

window.onload = function() {
	//if (window.location.href == "addproductPage.html");
	

	if (splitter[1]=="admin") {
		getAdminPage();
		return;
	}
	
}

function getPage () {			// AFTER RETRIEVING SANPHAM FROM DATABASE
	/*
	if (window.localStorage.getItem ('signedinID')==null)
		getTopBar(0);
	else
		getTopBar(1);
	*/
	getLandingPage();
	getSearchBar();
	getCartBtnNum();
	getMenu();
	/*
	if (window.localStorage.getItem ('signedinID')==null)
		getModal_Login();
		getModal_UserPanel();
	*/
	if (splitter[1]==null) {
		getCarousel();
		initCarousel();
		getFeaturedPage();
		$("#main").toggleClass("shop");
	}
	else if (splitter[1].split("=")[0]=="detail") {
		getProductDetail ();
	}
	else if (splitter[1]=="register") {
		getRegisterPage();
	}
	else if (params[0].split("=")[0]=="cart") {
		getCartView ();
	}
	else if (params[0].split("=")[0]=="order") {
		getOrderView ();
	}
	else if (splitter[1]=="contact") {
		getContactPage();
	}
	else {
		getProductWindow(1);
		$("#main").toggleClass("shop");
	}

	/*adminSelectView ();*/
}
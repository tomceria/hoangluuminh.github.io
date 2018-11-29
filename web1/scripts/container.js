// CONTAINER

function getLandingPage () {
	var s = "";
	s += `
	<nav>
		<a href="index.html?cart">
		<div id="cartBtn">
			<div id="cartBtnIcon">
				<img src="images/cart.png" width="25px" height="25px">	
			</div>
			<!-- JAVASCRIPT INSERT CART ITEMS AMOUNT -->
		</div>
		</a>
		<table cellspacing="0">
			<tbody>
				<tr id="carouselTR">
					<!-- JAVASCRIPT INSERT CAROUSEL -->
				</tr>
				<tr>
					<td><a href="index.html" target="_self" title="Nổi bật">Nổi bật</a>
					</td>
					<td><a href="index.html?new&0&1" target="_self" title="Hàng mới">Hàng mới</a></td>
					<td><a href="index.html?deals&0&1" target="_self" title="Khuyến mãi">Khuyến mãi</a></td>
					<td><a href="index.html?contact" target="_self" title="Liên hệ">Liên hệ</a></td>
				</tr>
			</tbody>
					
		</table>
	</nav>
	
	<div class = "content">
		
		<aside id = "sidebar">
			<div id = "searchDiv">
				<!-- JAVASCRIPT INSERT SEARCH -->
			</div>
			<!-- JAVASCRIPT INSERT MENU -->
		</aside>
			
		<main id = "main">
			<!--<h1>Hello world</h1><br>-->
			<!-- JAVASCRIPT INSERT MAIN -->
		</main>
		
	</div>
	`;

	document.getElementById("container").innerHTML = s;
}

function getAdminPage () {
	var s = "";
	s += `
	<nav >
		<table>
			<tbody>
				<tr>
					<td><a href="index.html?admin?product" target="_self" title="Xem sản phẩm" >Xem sản phẩm</a>
					</td>
					<td><a href="index.html?admin?order" target="_self" title="Xem đơn hàng">Xem đơn hàng</a></td>
				</tr>
			</tbody>					
		</table>
		<div id="optionview" ></div>			
	</nav>
	<div class = "content">
			<main id = "adminmain" style="min-height: 700px">
				<!--<h1>Hello world</h1><br>-->
				<!-- JAVASCRIPT INSERT MAIN -->
				
			</main>			
		</div>
	`;
	document.getElementById("container").innerHTML = s;
	var splitted = window.location.href.split("?");
	if (splitted[2]==="product") getOptionProduct();
	if (splitted[2]==="order") {getListOrder();getOrderDate();}
}

function getRegisterPage () {
	var s = "";
	s += `
	<form name="register">
		<table border="0" width="700px" style="margin: auto">
			<tr   align="center"  bgcolor="#ff9700" style="color: white"> <td colspan="2">ĐĂNG KÝ THÀNH VIÊN</td> </tr>
			<tr cosplan="2">
			<td><span style="color: red;">(*) </span>: bắt buộc phải nhập</td>
			</tr>
			<tr>
				<td align="right"> Tên đăng nhập:</td>
				<td style="color: red"><input type="text" id="username"  placeholder="Tài khoản"   tabindex="1" onFocus="fixusername()" >(*)
				<div id="z-username"> </div> </td>
			</tr>
			<tr>
				<td align="right"> Mật khẩu:</td>
				<td style="color: red">
					<input type="password" id="password" name="password" placeholder="Mật khẩu" tabindex="2" onFocus="fixpassword()">(*)
					<div id="z-password"> </div>
				</td>
			</tr>
			<tr>
				<td align="right">Nhập lại mật khẩu:</td>
				<td style="color: red">
					<input type="password" id="repassword" name="repassword" placeholder="Mật khẩu" tabindex="3" onFocus="fixrepassword()">(*)
					<div id="z-repassword"> </div>
				</td>
			</tr>
			<tr>
				<td ></td>
				<td >(Có từ 6-20 ký tự)</td>
			</tr>
			<tr> <td colspan="2"><hr></td></tr>
			<tr > <td colspan="2" >Thông tin cá nhân:</td> </tr>
			<tr>
				<td align="right">Họ và tên lót:</td>
				<td style="color: red">
					<input type="text" id="fname" name="fname" placeholder="Họ và tên lót" tabindex="4" onFocus="fixfname()">(*)
					<div id="z-fname"> </div>
				</td>
			</tr>
			<tr>
				<td align="right">Tên:</td>
				<td style="color: red">
					<input type="text" id="lname" name="lname" placeholder="Tên" tabindex="5" onFocus="fixlname()">(*)
					<div id="z-lname"> </div>
				</td>
			</tr>
			<tr>
				<td align="right">Giới tính:</td>
				<td >
					<input type="radio"  name="gender" value="male" tabindex="9" > Nam
					<input type="radio"  name="gender" value="female" tabindex="9" > Nữ
					<div style="color:red" id="z-gender"> </div>
				</td>
			</tr>
			<tr>
				<td align="right">Ngày sinh:</td>
				<td >
					<input type="date" id="dateofbirth" name="dateofbirth" tabindex="8">(ngày/tháng/năm)
					<div style="color: red" id="z-date"> </div>
				</td>
			</tr>
			<tr> <td colspan="2"><hr></td></tr>
			<tr > <td colspan="2" >Thông tin liên lạc:</td> </tr>
			<tr>
				<td align="right">Email:</td>
				<td style="color: red">
					<input type="text" id="email" name="email" placeholder="Email" tabindex="9" onFocus="fixemail()">(*)
					<div id="z-email"> </div>
				</td>
			</tr>
			<tr>
				<td align="right">Số điện thoại:</td>
				<td >
					<input type="text" id="telphone" name="telphone" placeholder="Số điện thoại" tabindex="10">(dùng khi liên lạc)
					<div id="z-telphone"></div>
				</td>
			</tr>
			<tr>
				<td align="right">Địa chỉ:</td>
				<td >
					<input type="text" id="address" name="address" placeholder="Địa chỉ nơi ở" tabindex="11">(nơi để giao sản phẩm)
					<div id="z-address"> </div>
				</td>
			</tr>
			<tr> <td colspan="2"><hr></td></tr>
			<tr>
				<td align="right">Thông tin điều khoản:</td>
				<td >
					<input type="button" name="info" value="Đọc điều khoản"><br />
					<input type="checkbox" name="accept">Tôi chấp nhận điều khoản
				</td>
				<td><div id="z-accept"> </div> </td>
			</tr>
			<tr> <td colspan="2"><hr></td></tr>
			<tr>
				<td align="right"><input type="button" name="submit" value="Đăng ký" tabindex="12" accesskey="d" onclick="registerCheck()"></td>
				<td><input type="reset" name="reset" value="hủy" tabindex="13"></td>
			</tr>
		</table>
	
	</form>
	`;

	document.getElementById("main").innerHTML = s;
}

function getContactPage () {
	var s = "";

	s += `
	<b>Nhóm 1 - Phát triển ứng dụng Web 1 thầy Sang (Nhóm 6)</b><br>
	Thành viên:<br>
	<table border="1" cellpadding="10px" style="border-collapse: collapse">
		<tr>
			<th>Tên</th>
			<th>Phân công</th>
			<th>Email</th>
		</tr>
		<tr>
			<td>Lưu Minh Hoàng</td>
			<td>Cấu trúc, giao diện, javascript chính</td>
			<td>hoangluuminh@icloud.com</td>
		</tr>
		<tr>
			<td>Vũ Trường Giang</td>
			<td>Trang Quản trị, trang Đăng ký, javascript</td>
			<td>vuapha008@gmail.com</td>
		</tr>
		<tr>
			<td>Đặng Đình Nhất Vinh</td>
			<td>Branding, đồ họa, javascript</td>
			<td>ddnv286@gmail.com</td>
		</tr>
		<tr>
			<td>Nguyễn Văn Sỹ</td>
			<td>Thông tin, hình ảnh sản phẩm</td>
			<td>nguyenvansylhp@gmail.com</td>
		</tr>
	</table>
	`;

	document.getElementById("main").innerHTML = s;
}

// MAIN

function getFeaturedPage () {
	var s = "";
	var aDeals = new Array ();
	for (var i=1; i<item.length; i++) {
		var dem=0;
		if (item[i].sale != 0) {
			aDeals.push (item[i]);
			dem++;
		}
		if (dem==4)	break;
	}
	var aAoNam = new Array ();
	for (var i=item.length-1; i>=1; i--) {
		var dem=0;
		var kind = item[i].id.split('-');
		if (kind[0]=="AT") {
			aAoNam.push (item[i]);
			dem++;
		}
		if (dem==4)	break;
	}
	var aAoNu = new Array ();
	for (var i=item.length-1; i>=1; i--) {
		var dem=0;
		var kind = item[i].id.split('-');
		if (kind[0]=="ATN") {
			aAoNu.push (item[i]);
			dem++;
		}
		if (dem==4)	break;
	}
	var aQuan = new Array ();
	for (var i=item.length-1; i>=1; i--) {
		var dem=0;
		var kind = item[i].id.split('-');
		if (kind[0]=="QT" || kind[0]=="QJ") {
			aQuan.push (item[i]);
			dem++;
		}
		if (dem==4) break;
	}
	var aNon = new Array ();
	for (var i=item.length-1; i>=1; i--) {
		var dem=0;
		var kind = item[i].id.split('-');
		if (kind[0]=="NK" || kind[0]=="NS") {
			aNon.push (item[i]);
			dem++;
		}
		if (dem==4)	break;
	}
	var aGiay = new Array ();
	for (var i=item.length-1; i>=1; i--) {
		var dem=0;
		var kind = item[i].id.split('-');
		if (kind[0]=="GI") {
			aGiay.push (item[i]);
			dem++;
		}
		if (dem==4)	break;
	}

	s += `
			<h3>Sản phẩm HOT</h3>`;
	s += 		getProduct (5, item);
	s += 		getProduct (13, item);
	s += 		getProduct (104, item);
	s += 		getProduct (41, item);

	s += `	<br>
			<hr><br><h3>Khuyến mãi</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (i, aDeals);
		}
	s += `	<div id="pageBtn" style="float: right; margin: 1em 0.5em"><a href="index.html?deals&0&1">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Áo thun nam</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (i, aAoNam);
		}
	s += `	<div id="pageBtn" style="float: right; margin: 1em 0.5em"><a href="index.html?ao&1&1">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Áo thun nữ</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (i, aAoNu);
		}
	s += `	<div id="pageBtn" style="float: right; margin: 1em 0.5em"><a href="index.html?ao&4&1">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Quần</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (i, aQuan);
		}
	s += `	<div id="pageBtn" style="float: right; margin: 1em 0.5em"><a href="index.html?quan&0&1">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Nón</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (i, aNon);
		}
	s += `	<div id="pageBtn" style="float: right; margin: 1em 0.5em"><a href="index.html?non&0&1">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Giày thể thao</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (i, aGiay);
		}
	s += `	<div id="pageBtn" style="float: right; margin: 1em 0.5em"><a href="index.html?giay&1&1">Xem tất cả >></a></div>`;

	s += `<br><hr>`;

	document.getElementById("main").innerHTML += s;
}

function getProductDetail (id) {
	var s = "";

	s += `<div style="float: left">
			<img src="` + item[id].image + `" width="200" height="200" style="margin-top: 50px">
		</div>
		<div id="productDetail">
			<h1>` + item[id].name + `</h1>
			<table border="1" cellpadding="10px" style="border-collapse: collapse">
				<tr>
					<th>Mã SP</th>
					<td width="300px">` + item[id].id +`</td>
				</tr>
				<tr>
					<th>Thương hiệu</th>
					<td>` + item[id].brand +`</td>
				</tr>
				<tr>
					<th>Loại</th>
					<td>` + getKindName(id) +`</td>
				</tr>
				<tr>
					<th>Màu</th>
					<td>` + item[id].color +`</td>
				</tr>
			</table>
			<p style="margin: 1em 0"><span id="detailPrice">` + item[id].price + `₫</span>

			`;
	if (item[id].sale!=0)
		s+=		`<span id="detailSale">` + item[id].sale + `₫</span>`;
	s +=	`</p>
			<br>
			<input type="button" name="addToCartBtn" value="Thêm vào giỏ" onclick="addToCart(` + id + `)" style="font-size: 20px"/>	
		</div>`;

	document.getElementById("main").innerHTML += s;
}

function getCartView () {
	var s = "";
	var itemArray = getCartList();

	s += `<h1>Giỏ hàng</h1>`;
		if (itemArray.length < 1)
			s += `<h3>Giỏ hàng trống</h3>`;
		for (var i=0; i<itemArray.length; i++) {
			var itemID = itemArray[i];
			var itemAmount = window.localStorage.getItem ("item"+itemID);

			s += `<div class="cartWindow">
					<a href="index.html?detail=` + itemID + `">
						<div style="float: left; width: 100px; height: 100px">
						
							<img src="` + item[itemID].image + `" width="100px" height="100px"/>
						
						</div>
						<div class="cartItem">
							<p><span class="cartItemName">` + item[itemID].name + `</span></p>
							<p>Thương hiệu: ` + item[itemID].brand + `</p>
							<p>Mã SP: ` + item[itemID].id + `</p>
							<p><span class="cartItemPrice">` + item[itemID].price + `₫</span>`
						if (item[itemID].sale!=0)
							s += `<span class="cartItemSale">` + item[itemID].sale + `₫</span>`
					s += `	</p>
						</div>
					</a>
					<div class="cartOptions">
						<p>Số lượng: </p>
						<input type="button" name="amountDecrease" value="-" style="width: 10px; padding: 0" onclick="changeCartItemAmount(` + itemID + `, '-')"/>
						<input type="text" id="item1Amount" value="` + itemAmount +`" style="width: 30px" onchange="changeCartItemAmount(` + itemID + `, this.value)" />
						<input type="button" name="amountIncrease" value="+" style="width: 10px; padding: 0" onclick="changeCartItemAmount(` + itemID + `, '+')"/>
						<input type="button" name="deleteItem" value="Xóa" style="margin: 1.25em 0 0 2.5em" onclick="removeCartItem(` + itemID + `)"/>
					</div>
				</div>`;
		}
			
	s += 	`<div style="float: left; clear: both; margin-top: 1em">
				<p>Thành tiền: </p>
				<h2 style="margin: 0; color: #ff9700;">` + totalCart(itemArray) + `₫</h2>
			</div>
			<div style="float: left; clear: both; margin: 1em 0">`
			if (totalCart(itemArray)>0)
				s += `<input class="cartPay" type="button" name="checkout" value="Thanh toán" onclick="checkOut()"/>
						<input class="cartClear" type="button" name="clear" value="Xóa hết" onclick="clearCart()"/>`;
	s +=	`</div>`;

	document.getElementById("main").innerHTML += s;
}

function getOrderView () {
	var memberID = window.localStorage.getItem("signedinID");
	// memberid=0 amount=7 total=3867222 time=1543115459890/1=1 5=3 8=6 13=3 16=1 
	
	var dem=0;
	while (true) {
		var s = "";
		var amount;
		var total;
		var time;
		var itemArray = new Array();
		var itemArrayAmount = new Array();

		if (window.localStorage.getItem("order"+dem)==null)
			return;

		var orderString = window.localStorage.getItem("order"+dem);
		//console.debug (dem + ": " + orderString);
		var checkingMemberID = orderString.split('/')[0].split(' ')[0].split('=')[1];

		if (checkingMemberID == memberID) {
			amount = parseInt(orderString.split('/')[0].split(' ')[1].split('=')[1]);
			total = parseInt(orderString.split('/')[0].split(' ')[2].split('=')[1]);
			time = new Date( parseInt(orderString.split('/')[0].split(' ')[3].split('=')[1]) );
			for (var i=0; i<amount; i++) {
				itemArray.push (parseInt(orderString.split('/')[1].split(' ')[i].split('=')[0]));
				itemArrayAmount.push (parseInt(orderString.split('/')[1].split(' ')[i].split('=')[1]));
			}
			
			s += `
			<div class="cartWindow">
				<div class="cartItem">
					<p><span class="cartItemName">Mã đơn: ` + dem + `</span></p>
					<p>` + time.toLocaleDateString() + ` ` + time.toLocaleTimeString() + `</p>
					<br>`;
			for (var i=0; i<amount; i++) {
				s += `<p>` + item[itemArray[i]].name + ` [` + itemArrayAmount[i] + `]: <b>` + parseInt(item[itemArray[i]].price.replace(/\./g, ''))*itemArrayAmount[i] + `₫</b></p>`;
			}
			s +=	`<br>
					<p>Thành tiền: <span class="cartItemPrice">` + total + `₫</span></p>
				</div>
				<div class="cartOptions">`;
				if (window.localStorage.getItem('order'+dem+'status')=='delivering')
					s+=`<p style="color: green">Đã xử lý</p>`;
				else
					s+=`<p>Đang xử lý</p>`;
			s +=`</div>
			</div>
			`;
			document.getElementById("main").innerHTML = s + document.getElementById("main").innerHTML;			//Xuất ngược (addToHead)
		}
		dem++;
	}


}

function getPageBtn (page, params) {
	//console.debug (page + " " + params[2] + params);

	var s = "";
	var pageAltered = page;
	var kind = "pageBtn";
	var remainder = window.location.href.split("&0&"+params[2])[1];		// cho advancedSearch

	if (page == params[2])
		kind = "pageBtnActive";
	if (page == "<")
		pageAltered = parseInt(params[2])-1;
	else if (page == ">")
		pageAltered = parseInt(params[2])+1;
	else if (page == "<<")
		pageAltered = 1;

	s += `<div id="` + kind + `">`;
	if (kind == "pageBtn")
		s += `<a href="index.html?` + params[0] + `&` + params[1] + `&` + pageAltered + remainder + `">` + page + `</a>`;
	else
		s += `<p>` + page + `</p>`;
	s += `</div>`;

	return s;
}

// TOP BAR
function getTopBar_NoMember () {
	var s = "";
	s += `
	<div>
		<div class="topbarBtn">
			<p><a href="javascript:void(0);">Đăng nhập</a></p>
			<div id="memberpop">
				<br>
				<form name="signin" method="post" action="index.html" onsubmit="return signinCheck()">
					<p>Tài khoản:</p>
					<input type="text" name="username" size="20"><br>
					<p>Mật khẩu:</p>
					<input type="password" name="password" size="20"><br>
					<div id="signinError">
					</div>
					<input type="submit" name="signin" value ="Đăng nhập" style="margin: 1em 0 1em 1em; height: 20px">
					<input type="button" name="signup" value ="Đăng ký" style="margin: 1em 0; height: 20px" onClick="window.location.href='index.html?register'">
				</form>
			</div>
		</div>
	</div>
	`;

	document.getElementById("topbar").innerHTML = s;
}

function getTopBar_IsMember () {
	var userID = window.localStorage.getItem ('signedinID');
	var username = window.localStorage.getItem('user' + userID);

	var s = "";
	s += `
	<div>
		<div class="topbarBtn">
			<p><a href="javascript:void(0);">` + username + `</a></p>
			<div id="memberpop">
				<br>
				<p style="font-weight: bold; font-size: 16px">Xin chào</p>
				<p><a href="index.html?order">Xem đơn hàng</a></p>
				<p><a href="javascript:void(0);" onclick="signout()">Đăng xuất</a></p>
				<br>
			</div>
		</div>`;
		if (username == "admin") {
		s += `<div class="topbarBtn">
			<p><a href="index.html?admin">Quản trị</a></p>
		</div>`;
		}
	s +=`
	</div>
	`;

	document.getElementById("topbar").innerHTML = s;
}

// SEARCH
function getSearchBar () {
	var s = "";

	s += `<div id="searchDiv" style="width: 200px; min-height: 30px; float: left">
			<input id="searchBar" type="text" name="search" placeholder="Tìm kiếm">
			<input id="searchBtn" type="image" src="images/search-white.png" name="goSearch" value=" " onclick="goSearch(document.getElementById('searchBar').value)"/>
			<input id="searchExpand" type="button" value="↓  Tìm kiếm nâng cao  ↓" style="margin-top: 0.5em" onclick="getAdvancedSearchBar()" />
			<hr>
		</div>`;

	/* s += `</script>`;	*/
	document.getElementById("searchDiv").innerHTML = s;
}

function getAdvancedSearchBar () {
	var s = "";

	s += `<div id="searchDiv" style="width: 200px; min-height: 30px; float: left">
			<input id="searchBar" type="text" name="search" placeholder="Tìm kiếm nâng cao">
			<input id="searchBtn" type="image" src="images/search-white.png" name="goSearch" value=" " onclick="goAdvancedSearch(document.getElementById('searchBar').value, document.getElementById('advSearchKind').value, document.getElementById('advSearchFrom').value, document.getElementById('advSearchTo').value)"/>
			<div style="float: left; clear: both; padding-left: 5px">
				<p style="margin: 0.25em 0">Phân loại</p>
				<select id="advSearchKind" style="width: 100px">
					<option value="all">Tất cả</option>`;
			for (var i=0; i<menu.length; i++) {
				s += `<option disabled>---</option>`;
				for (var j=0; j<menu[i].length; j++) {
					s += `<option value="` + i + `&` + j + `">` + menu[i][j] + `</option>`;
				}
			}
	s += 		`</select>
				<p style="margin: 0.25em 0">Giá</p>
				<input id="advSearchFrom" type="text" style="width: 70px" placeholder="Từ"/> ~ <input id="advSearchTo" type="text" style="width: 70px" placeholder="Đến"/>

			</div>
			<input id="searchExpand" type="button" value="↑  Tìm kiếm thường  ↑" style="margin-top: 1em" onclick="getSearchBar()" />
			<hr>
		</div>`;

	/* s += `</script>`;	*/
	document.getElementById("searchDiv").innerHTML = s;
}

// CAROUSEL TR
function getCarousel () {
	var s = "";
	
	s += `
	<td colspan="4" height="250px" style="background: white; border: none; vertical-align: top;">
		<div class="carouselContainer">
			<div class="carouselDiv carouselFade">
				<img src="images/caro4.jpg" style="width: 100%"/>
			</div>
			<div class="carouselDiv carouselFade">
				<img src="images/caro1.jpg" style="width: 100%"/>
			</div>
			<div class="carouselDiv carouselFade">
				<img src="images/caro2.jpg" style="width: 100%"/>
			</div>
			<div class="carouselDiv carouselFade">
				<img src="images/caro3.jpg" style="width: 100%"/>
			</div>
			<a class="carouselPrev" onclick="plusSlides(-1)">&#10094;</a>
 			<a class="carouselNext" onclick="plusSlides(1)">&#10095;</a>
		</div>

 		<div style="height: 25px; text-align:center; vertical-align: middle;">
  		<span class="carouselDot" onclick="currentSlide(1)"></span> 
  		<span class="carouselDot" onclick="currentSlide(2)"></span> 
  		<span class="carouselDot" onclick="currentSlide(3)"></span> 
  		<span class="carouselDot" onclick="currentSlide(4)"></span> 
	</div>
	</td>
	
	`;

  	document.getElementById("carouselTR").innerHTML += s;
}
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
					<td><a href="link" target="_self" title="Liên hệ">Liên hệ</a></td>
				</tr>
			</tbody>
					
		</table>
	</nav>
	
	<div class = "content">
		
		<aside id = "sidebar">
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
	<div  style="height: 20px">
		<div style="float:left;">
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
		</div>
		<div style="float:right;">
			<button name="addproduct" >+</button>
		</div>
	</div>
	<div class = "content">
		<div style="background-color: skyblue; 
					font-size: 20px; 
					text-align: center;
					color: azure">Danh sách sản phẩm</div>
			<main id = "adminmain">
				<!--<h1>Hello world</h1><br>-->
				<!-- JAVASCRIPT INSERT MAIN -->
				
			</main>			
		</div>
	`;

	document.getElementById("container").innerHTML = s;
}

function getRegisterPage () {
	var s = "";
	s += `
	<form name="register" method="post" action="index.html" onSubmit="return registerCheck()">
		<table border="0" width="700px" style="margin: auto">
			<tr   align="center"  bgcolor="aqua"> <td colspan="2">ĐĂNG KÝ THÀNH VIÊN</td> </tr>
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
				<td align="right"><input type="submit" name="submit" value="Đăng ký" tabindex="12" accesskey="d"> </td>
				<td><input type="reset" name="reset" value="hủy" tabindex="13"></td>
			</tr>
		</table>
	
	</form>
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
			<img src="` + item[id].image + `" width="200" height="200">
		</div>
		<div id="productDetail">
			<h1>` + item[id].name + `</h1>
			<p>Thương hiệu: ` + item[id].brand + `</p>
			<p>Loại: ` + getKindName(id) + `</p>
			<p>Màu: ` + item[id].color + `</p>
			<p>Mã SP: ` + item[id].id + `</p>
			<p style="margin: 1em 0"><span id="detailPrice">` + item[id].price + `₫</span>`;
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

	s += `<h1>Giỏ hàng</h1>`
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
						s += `<span class="cartItemSale">400.000₫</span>`
					s += `</p>
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

function getPageBtn (page, params) {
	//console.debug (page + " " + params[2] + params);

	var s = "";
	var pageAltered = page;
	var kind = "pageBtn";

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
		s += `<a href="index.html?` + params[0] + `&` + params[1] + `&` + pageAltered + `">` + page + `</a>`;
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
					<input type="submit" name="signin" value ="Đăng nhập" style="margin: 1em 0 1em 1em">
					<input type="button" name="signup" value ="Đăng ký" style="margin: 1em 0" onClick="window.location.href='index.html?register'">
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
				<p style="font-weight: bold; font-size: 15px">Xin chào</p>
				<p><a>Xem đơn hàng</a></p>
				<p><a href="javascript:void(0);" onclick="signout()">Đăng xuất</a></p>
				<br>
			</div>
		</div>
	</div>
	`;

	document.getElementById("topbar").innerHTML = s;
}

// CAROUSEL TR
function getCarousel () {
	var s = "";
	
	s += `
	<td colspan="4" height="250px">carousel here</td>
	`;

  	document.getElementById("carouselTR").innerHTML += s;
}
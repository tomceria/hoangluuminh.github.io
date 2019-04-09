// CONTAINER

function getLandingPage () {
	var s = "";
	s += `
<div class="container">
	<nav>
		<a href="shop.php?cart=1">
		<div id="cartBtn">
			<div id="cartBtnIcon">
				<img src="images/cart.png" width="25px" height="25px">	
			</div>
			<div id="cartBtnNum">
				<!-- JAVASCRIPT INSERT CART ITEMS AMOUNT -->
			</div>
		</div>
		</a>
	</nav>
	<div id="carouselTR">
		<!-- JAVASCRIPT INSERT CAROUSEL -->
	</div>
	<div id="nav" class="row">
		<div class="col-sm-3 navigation">
			<a href="./" target="_self" title="Nổi bật">Nổi bật</a>
		</div>
		<div class="col-sm-3 navigation">
			<a href="shop.php?filter=new" target="_self" title="Hàng mới">Hàng mới</a>
		</div>
		<div class="col-sm-3 navigation">
			<a href="shop.php?filter=deals" target="_self" title="Khuyến mãi">Khuyến mãi</a>
		</div>
		<div class="col-sm-3 navigation">
			<a href="shop.php?contact" target="_self" title="Liên hệ">Liên hệ</a>
		</div>
	</div>
	
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
			`+$("#container").html()+`
		</main>
		
	</div>

	<div id="modals">
		<!-- JAVASCRIPT INSERT MODALS -->
	</div>
	<div id="toasts">
		<!-- JAVASCRIPT INSERT TOASTS -->
	</div>
	

</div>
	`;

	document.getElementById("container").innerHTML = s;
}

/*
function getAdminPage () {
	var s = "";
	s += `
	<nav >
		<table>
			<tbody>
				<tr>
					<td><a href="./?admin?product" target="_self" title="Xem sản phẩm" >Xem sản phẩm</a>
					</td>
					<td><a href="./?admin?order" target="_self" title="Xem đơn hàng">Xem đơn hàng</a></td>
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
*/
/*
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
*/
function getContactPage () {
	var s = "";

	s += `
	<b>Phát triển ứng dụng Web 2 thầy Sang / cô Loan (Nhóm 5)</b><br>
	Thành viên:<br>
	<ul>
		<li>Lưu Minh Hoàng</li>
		<li>Phùng Quốc Hải</li>
		<li>Phan Hữu Kha</li>
	</ul>
	<br>
	<hr>
	Được phát triển dựa trên Đồ Án Web 1 của: Lưu Minh Hoàng, Vũ Trường Giang, Đặng Đình Nhất Vinh, Nguyễn Văn Sỹ
	`;

	document.getElementById("main").innerHTML = s;
}

// MAIN
/*
function getFeaturedPage () {
	var s = "";
	var j = 0;

	s += `
			<h3>Sản phẩm HOT</h3>`;
	s += 		getProduct (j++, item);
	s += 		getProduct (j++, item);
	s += 		getProduct (j++, item);
	s += 		getProduct (j++, item);

	s += `	<br>
			<hr><br><h3>Khuyến mãi</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (j++, item);
		}
	s += `	<hr style="border-color: white">
			</div><div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto;"><a href="shop.php?filter=deals">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Áo thun nam</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (j++, item);
		}
	s += `	<hr style="border-color: white">
			<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto;"><a href="shop.php?loai2=`+itemKind[0][1]+`">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Áo thun nữ</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (j++, item);
		}
	s += `	<hr style="border-color: white">
			<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto;"><a href="shop.php?loai2=`+itemKind[0][4]+`">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Quần</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (j++, item);
		}
	s += `	<hr style="border-color: white">
			<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto;"><a href="shop.php?loai1=`+itemKind[1][0]+`">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Nón</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (j++, item);
		}
	s += `	<hr style="border-color: white">
			<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto"><a href="shop.php?loai1=`+itemKind[2][0]+`">Xem tất cả >></a></div>`;

	s += `	<br>
			<hr><br><h3>Giày thể thao</h3>`;
		for (var i=0; i<4; i++) {
			s+=	getProduct (j++, item);
		}
	s += `	<hr style="border-color: white">
			<div id="pageBtn" style="clear: both; float: right; margin: 1em 0.5em 1em auto"><a href="shop.php?loai2=`+itemKind[3][1]+`">Xem tất cả >></a></div>`;

	s += `<br><hr>`;

	document.getElementById("main").innerHTML += s;
}
*/
/*
function getProductDetail () {
	var id = 0;					// only 1 item in item[]
	var s = "";
	s += `<div style="float: left">
			<img src="` + item[id].image + `" width="200" height="200" style="margin-top: 50px">
		</div>
		<div id="productDetail">
			<h1>` + item[id].name + `</h1>
			<table border="1" cellpadding="10px" style="border-collapse: collapse">
				<tr>
					<th>Mã SP</th>
					<td>` + item[id].id +`</td>
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
			<p style="margin: 1em 0"><span id="detailPrice">` + parseInt(item[id].price).toLocaleString('vi', {style : 'currency', currency : 'VND'}) + `</span>

			`;
	if (item[id].sale!=0)
		s+=		`<span id="detailSale">` + parseInt(item[id].sale).toLocaleString('vi', {style : 'currency', currency : 'VND'})+ `</span>`;
	s +=	`</p>
			<br>
			<input type="button" class="btn btn-primary" name="addToCartBtn" value="Thêm vào giỏ" onclick="addToCart('` + item[id].id + `')" style="font-size: 30px"/>	
		</div>`;

	document.getElementById("main").innerHTML += s;
}
*/

/*
function getOrderView () {											// TODO!
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
				s += `<p>` + item[itemArray[i]].name + ` [` + itemArrayAmount[i] + `]: <b>` + (parseInt(item[itemArray[i]].price)*itemArrayAmount[i]).toLocaleString('vi', {style : 'currency', currency : 'VND'}) + `</b></p>`;
			}
			s +=	`<br>
					<p>Thành tiền: <span class="cartItemPrice">` + parseInt(total).toLocaleString('vi', {style : 'currency', currency : 'VND'}) + `</span></p>
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
*/
/*
function getPageBtn (page, params) {
	//console.debug (page + " " + params[2] + params);

	var s = "";
	var pageAltered = page;
	var kind = "pageBtn";
	var currentPage = (params[1])?params[1].split("=")[1]:1;
	var remainder = window.location.href.split("&page="+currentPage)[1];		// cho advancedSearch

	if (page == currentPage)
		kind = "pageBtnActive";
	if (page == "<")
		pageAltered = parseInt(currentPage)-1;
	else if (page == ">")
		pageAltered = parseInt(currentPage)+1;
	else if (page == "<<")
		pageAltered = 1;

	s += `<div id="` + kind + `">`;
	if (kind == "pageBtn") {
		s += `<a href="./?` + params[0] + `&page=` + pageAltered + remainder + `">` + page + `</a>`;
		//s += `<a href="javascript:void(0)" onclick="changePage(`+pageAltered+`)">`+page+`</a>`;
	}
	else
		s += `<p>` + page + `</p>`;
	s += `</div>`;

	return s;
}
*/

// TOP BAR (LEGACY, FOR REFERENCES)
/*
function getTopBar (isSignedIn) {
	var userID = window.localStorage.getItem ('signedinID');
	var username = window.localStorage.getItem('user' + userID);

	var s = "";
	s += `
	<div style="max-width: 1000px">
		<div class="topbarBtn left" style="line-height: 44px">
			<a id="menuToggle"><img src="images/search-white.png" style="height: 30px;padding: 2px 5px 4px;"></img></a>
		</div>
		<div class="topbarBtn left" style="line-height: 44px">
			<a id="textlogo" href="./"><img src="images/prada-text.png" style="height: 20px; padding: 2px 10px 5px"></img></a>
		</div>
		<div class="topbarBtn">`;
	if (isSignedIn==0)
	s += 	`
			<p><a href="javascript:void(0);" data-toggle="modal" data-target="#modal_login">Đăng nhập</a></p>
			`;
	else {
	s += 	`<p><a href="javascript:void(0);" data-toggle="modal" data-target="#modal_userpanel">` + username + `</a></p>
		</div>`;
		if (username == "admin") {
		s += `<div class="topbarBtn">
			<p><a href="./?admin">Quản trị</a></p>
		</div>`;
		};
	}
	s +=`</div>
	</div>
	`;

	document.getElementById("topbar").innerHTML = s;

	// MENU TOGGLE JQUERY
	$("#menuToggle").click(function(e) {
	  e.preventDefault();
	  $("#sidebar").toggleClass("toggled");
	  $("#topbar").toggleClass("toggled");
	});
	//console.log (document.getElementById("menuToggle").innerHTML);

	// TOP BAR TRANSPARENT JQUERY
	$(window).scroll( function(e) {
	  var scroll = $(window).scrollTop();
	  //console.debug(scroll);
	  $("#topbar").removeClass("nottop");
	  if (scroll > 25)
	  	$("#topbar").addClass("nottop");
	});
}

function getTopBar_IsMember () {
	var userID = window.localStorage.getItem ('signedinID');
	var username = window.localStorage.getItem('user' + userID);

	var s = "";
	s += `
	<div style="max-width: 1000px">
$(		<div class="topbarBtn">
			<p><a href="javascript:void(0);">` + username + `</a></p>
			<div id="memberpop">
				<br>
				<p style="font-weight: bold; font-size: 16px">Xin chào</p>
				<p><a href="./?order">Xem đơn hàng</a></p>
				<p><a href="javascript:void(0);" onclick="signout()">Đăng xuất</a></p>
				<br>
			</div>
		</div>`;
		if (username == "admin") {
		s += `<div class="topbarBtn">
			<p><a href="./?admin">Quản trị</a></p>
		</div>`;
		}
	s +=`
	</div>
</div>
	`;

	document.getElementById("topbar").innerHTML = s;
}
*/

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
				<img src="images/carousel1.png"/>
			</div>
			<div class="carouselDiv carouselFade">
				<img src="images/carousel2.png"/>
			</div>
			<div class="carouselDiv carouselFade">
				<img src="images/carousel3.png"/>
			</div>
			<a class="carouselPrev" onclick="plusSlides(-1)">&#10094;</a>
 			<a class="carouselNext" onclick="plusSlides(1)">&#10095;</a>
		</div>

 		<div style="height: 25px; text-align:center; vertical-align: middle;">
  		<span class="carouselDot" onclick="currentSlide(1)"></span> 
  		<span class="carouselDot" onclick="currentSlide(2)"></span> 
  		<span class="carouselDot" onclick="currentSlide(3)"></span> 
	</div>
	</td>
	
	`;

  	document.getElementById("carouselTR").innerHTML += s;
}

// MODALS DIV -> LOGIN
function getModal_Login () {
	var s = "";
	s += `
	<div class="modal fade" id="modal_login">
		<div class="modal-dialog">
		 	<div class="modal-content">
			  	<form name="signin">
				    <!-- Modal Header -->
				    <div class="modal-header">
				      <h4 class="modal-title">Đăng nhập</h4>
				      <button type="button" class="close" data-dismiss="modal">&times;</button>
				    </div>
				    
				    <!-- Modal body -->
				    <div class="modal-body">
							<p>Tài khoản:</p>
							<input type="text" id="signinUsername" size="20" style="margin-bottom: 1em" required><br>
							<p>Mật khẩu:</p>
							<input type="password" id="signinPassword" size="20" style="margin-bottom: 1em" required><br>
							<p id="signinError" style="color: red">&nbsp;</p>
				    </div>
				    
				    <!-- Modal footer -->
				    <div class="modal-footer" style="justify-content: flex-start">
				    	<button type="button" class="btn btn-success" onClick="signinCheck()">Đăng nhập</button>
				    	<button type="button" class="btn btn-light" onClick="window.location.href='./'">Đăng ký</button>
				    </div>
			    </form>
			</div>
		</div>
	</div>
	`;

	$("#modals").append(s);
}

// MODALS DIV -> USERPANEL
function getModal_UserPanel () {
	var s = "";
	s += `
	<div class="modal fade" id="modal_userpanel">
		<div class="modal-dialog">
		 	<div class="modal-content">
			    <!-- Modal Header -->
			    <div class="modal-header">
			      <h4 class="modal-title">Xin chào</h4>
			      <button type="button" class="close" data-dismiss="modal">&times;</button>
			    </div>
			    
			    <!-- Modal body -->
			    <div class="modal-body">
						<button type="button" class="btn btn-primary" onClick="window.location.href='shop.php?order'">Xem đơn hàng</button>
			    </div>
			    
			    <!-- Modal footer -->
			    <div class="modal-footer" style="justify-content: flex-start">
			    	<button type="button" class="btn btn-danger" onClick="signout()">Đăng xuất</button>
			    </div>
			</div>
		</div>
	</div>
	`;

	$("#modals").append(s);
}

function getModal_NotLoggedIn () {
	var s = "";
	s += `
	<div class="modal fade" id="modal_notloggedin">
		<div class="modal-dialog">
		 	<div class="modal-content">
			    <!-- Modal Header -->
			    <div class="modal-header">
			      <h4 class="modal-title">Cảnh báo</h4>
			      <button type="button" class="close" data-dismiss="modal">&times;</button>
			    </div>
			    
			    <!-- Modal body -->
			    <div class="modal-body">
						<p>Vui lòng đăng nhập trước khi thanh toán</p>
			    </div>
			    
			    <!-- Modal footer -->
			    <div class="modal-footer" style="justify-content: flex-start">
			    	<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
			    </div>
			</div>
		</div>
	</div>
	`;

	$("#modals").append(s);
}

function getModal_CheckoutCompleted () {
	var s = "";
	s += `
	<div class="modal fade" id="modal_checkoutcompleted">
		<div class="modal-dialog">
		 	<div class="modal-content">
			    <!-- Modal Header -->
			    <div class="modal-header">
			      <h4 class="modal-title">Thông báo</h4>
			    </div>
			    
			    <!-- Modal body -->
			    <div class="modal-body">
						<p>Thanh toán thành công!</p>
			    </div>
			    
			    <!-- Modal footer -->
			    <div class="modal-footer" style="justify-content: flex-start">
			    	<button type="button" class="btn btn-primary" onClick="window.location.href='./'">OK</button>
			    </div>
			</div>
		</div>
	</div>
	`;

	$("#modals").append(s);
}

// TOASTS DIV -> ADDTOCART
function getToast_addToCart () {
	var s = "";
	s += `
	<div class="toast float" id="toast_addtocart">
	    <div class="toast-body">
	    	Đã thêm vào giỏ hàng!
	    </div>
	</div>
	`;
	$("#toasts").append(s);
}

function getToast_loading () {
	var s = "";
	s += `
	<div class="toast float" id="toast_loading">
	    <div class="toast-body">
	    	<b>Đang tải...</b>
	    </div>
	</div>
	`;
	$("#toasts").append(s);
}
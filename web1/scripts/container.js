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
				<tr>
					<td><a href="index.html?all&0&1" target="_self" title="Nổi bật">Nổi bật</a>
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
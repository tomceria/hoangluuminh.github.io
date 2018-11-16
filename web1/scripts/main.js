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

function getSearchBar () {
	var s = "";

	s += `<script type="text/javascript" src="main.js"></script>`;

	s += `<input id="searchBar" type="text" name="search" size="24" placeholder="Tìm kiếm">
		<input id="searchBtn" type="button" name="goSearch" value="🔎" size="10" onclick="goSearch(document.getElementById('searchBar').value)"/>`;

	/* s += `</script>`;	*/
	document.getElementById("sidebar").innerHTML += s;
}

function getMenu () {
	var s = "";
	var menu = new Array ();
	var menuLabel = new Array ("Áo", "Quần", "Nón", "Giày", "Dép", "Balo");
	var menuUrl = new Array ("ao", "quan", "non", "giay", "dep", "balo");
	menu[0] = new Array ("0", "Áo thun", "Áo sơ mi");
	menu[1] = new Array ("0", "Quần thun", "Quần jean");
	menu[2] = new Array ("0", "Nón kết", "Nón snapback");
	menu[3] = new Array ();
	menu[4] = new Array ();
	menu[5] = new Array ("0", "Balo", "Túi đeo chéo");
	var page = 1;		//Default page

	s += `<table cellspacing="0">`;

	for (var i=0; i<menu.length; i++) {
		s += `<tr>
				<td>
					<a href="index.html?` + menuUrl[i] + `&0&` + page + `\" target=\"_self\" title=\"` + menuLabel[i] + `\">` + menuLabel[i] + `</a>
					<div>
						<ul>`;

							for (var j=1; j<menu[i].length; j++) {
								s += "<li><a href=\"index.html?" + menuUrl[i] + "&" + j + "&" + page +"\" target=\"_self\" title=\"" + menu[i][j] + "\">" + menu[i][j] + "</a></li>";
							}

		s += `			</ul>
					</div>
				</td>
			</tr>`;
	}

	s += "</table>";

	document.getElementById("sidebar").innerHTML += s;
}

function getProductWindow () {
	var s = "";
	var url = window.location.href;
	var splitter = url.split('?');			// [index.html]?[ao&1&0]
	var splitted = "";
	if (url != splitter)					// url == splitter => index.html
		splitted = splitter[1];				// [ao&1&0]
	var params = splitted.split('&');		// [ao]&[1]&[0] ; 0: Category; 1: Subcategory; 2: Page

	var item = new Array();	//0: id; 1: price; 2: name; 3: brand; 4: color; 5: image; 6: sale

	item[1] = new SanPham ("AT-001", "300.000", "Áo dài tay thể thao", "Adidas", "Xanh", "images/AT/AT-001.jpg", "350.000");
	item[2] = new SanPham ("QJ-001", "250.000", "Quần jean rách", "Châu Âu", "Đen", "images/QJ/QJ-001.jpg", 0);
	item[3] = new SanPham ("AT-002", "315.000", "Áo thể thao tay ngắn", "Under Armour", "Xanh tím", "images/AT/AT-002.jpg", 0);
	item[4] = new SanPham ("AT-003", "70.000", "Áo thun trơn", "Kirkland", "Trắng", "images/AT/AT-003.jpg", 0);
	item[5] = new SanPham ("AT-004", "260.000", "Áo bóng rỗ đội OKC", "Nike", "Xanh", "images/AT/AT-004.jpg", 0);
	item[6] = new SanPham ("AT-005", "80.000", "Áo thun mùa hè", "Adidas", "Trắng / Đen", "images/AT/AT-005.jpg", 0);
	item[7] = new SanPham ("AS-001", "150.000", "Áo sơ mi trơn", "Pull & Bear", "Đen xám", "images/AS/AS-001.jpg", 0);
	item[8] = new SanPham ("AS-002", "150.000", "Áo sơ mi caro", "Pull & Bear", "Cam", "images/AS/AS-002.jpg", 0);
	item[9] = new SanPham ("AS-003", "200.000", "Áo sơ mi công sở", "VIETTIEN", "Trắng", "images/AS/AS-003.jpg", 0);
	item[10] = new SanPham ("AS-004", "400.000", "Áo sơ mi sọc", "Burberry", "Xanh", "images/AS/AS-004.jpg", 0);
	item[11] = new SanPham ("QT-001", "220.000", "Quần jogger", "Adidas", "Đen", "images/QT/QT-001.jpg", 0);
	item[12] = new SanPham ("QT-002", "200.000", "Quần thun dài", "Aristino", "Xám", "images/QT/QT-002.jpg", 0);
	item[13] = new SanPham ("QT-003", "390.000", "Quần bóng rỗ", "Air Jordan", "Đỏ", "images/QT/QT-003.jpg", 0);
	item[14] = new SanPham ("QT-004", "280.000", "Quần đùi thể thao", "Adidas", "Xám", "images/QT/QT-004.jpg", 0);
	item[15] = new SanPham ("QT-004", "165.000", "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg", 0);
	
	// EXPERIMENTAL
	items = new Array ();			// filtered array
	var itemOnPage = 12;
	var itemStart = itemOnPage*(params[2]-1)+1;
	var itemEnd = itemOnPage*(params[2]-1)+itemOnPage;
	//

	// Filter products
	items.push (items[0]);	// empty item
	if (splitter[1]==null) {		// Home page
		for (var i=1; i<item.length; i++) {
			items.push (item[i]);
		}
	}
	else {
		switch (params[0]) {
			case 'ao': {
				switch (params[1]) {
					case '0': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="AT" || kind[0]=="AS")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="AT")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="AS")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'quan': {
				switch (params[1]) {
					case '0': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="QT" || kind[0]=="QJ")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="QT")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="QJ")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'non': {
				switch (params[1]) {
					case '0': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NK" || kind[0]=="NS")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NK")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NS")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'giay': {
				for (var i=1; i<item.length; i++) {
					var kind = item[i].id.split('-');
					if (kind[0]=="GI")
						items.push (item[i]);
				}
				break;
			}
			case 'dep': {
				for (var i=1; i<item.length; i++) {
					var kind = item[i].id.split('-');
					if (kind[0]=="DE")
						items.push (item[i]);
				}
				break;
			}
			case 'balo': {
				switch (params[1]) {
					case '0': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="BL" || kind[0]=="BW")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="BL")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="WB")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}

			case 'all': {			//TEST
				for (var i=1; i<item.length; i++) {
					var kind = item[i].id.split('-');
					items.push (item[i]);
				}
				break;
			}
		}
		// Filter products (SEARCH)
		if (params[0].split("=")[0]=="search") {
			var searchKeyword = params[0].split("=")[1];
			searchKeyword = searchKeyword.toLowerCase();
			for (var i=1; i<item.length; i++) {
				var comparator = getComparator (item[i]);
				var keywordSplitted = searchKeyword.split("%20");
				var count=0;
				for (var j=0; j<keywordSplitted.length; j++)
					if (comparator.indexOf(keywordSplitted[j])!=-1)
						count++;
				if (count == keywordSplitted.length)
					items.push (item[i]);
			}
		}
		

	}

	console.debug ("before: " + itemStart + " " + itemEnd);

	if (itemEnd >= items.length)			// stop showing item
		itemEnd = items.length-1;

	console.debug ("after: " + itemStart + " " + itemEnd);

	//Show products
	for (var i=itemStart; i<=itemEnd; i++) {
		console.debug (i + " " + items[i].name);
		s += getProduct (i, items);
	}

	//Show pages buttons
	var noPages = Math.ceil((items.length-1)/12);
	if (params[2]>0) {
		s += "<br>";
		s += "<div style=\"margin: 1em 10px; float: right; clear: both; width: initial; height: initial\">";

		if (params[2]>3 && noPages>5)
			s += getPageBtn ("<<", params);
		if (params[2]>1)
			s += getPageBtn ("<", params);

		if (noPages <= 5)
			for (var i=1; i<=noPages; i++) {
				s += getPageBtn (i, params);
				console.debug (1);
			}
		else if (parseInt(params[2]) <= 3)							// 1 2 3 4 5
			for (var i=1; i<=5; i++) {
				s += getPageBtn (i, params);
				console.debug (2);
			}
		else if (parseInt(params[2]) >= noPages-2)					// 16 17 18 19 20
			for (var i=noPages-4; i<=noPages; i++) {
				s += getPageBtn (i, params);
				console.debug (3);
			}
		else												// 2 3 4 5 6 
			for (var i=parseInt(params[2])-2; i<=parseInt(params[2])+2; i++) {
				s += getPageBtn (i, params);
				console.debug (4);
			}

		if (parseInt(params[2])<noPages && noPages>1)
			s += getPageBtn (">", params);

		s += "</div>";
	}
	
	
	//alert (s);
	document.getElementById("main").innerHTML = s;
}

function getProduct (id, item) {
	var s = "";

	s += `<div id="productDiv">
			<img src="` + item[id].image + `" width="178px" height="178px"><br>
			<div>
				<p><span class="brand\">` + item[id].brand + `</span></p>
				<p>` + item[id].name + `</p>
				<p>` + item[id].color + `</p>
				<p><span class="price">` + item[id].price + `đ</span>`;
	if (item[id].sale!=0) {
		s +=	`<span class="sale">` + item[id].sale + `đ</span></p>`;
	}
	s +=	`</div>
		</div>`;

	return s;
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

function goSearch (keyword) {
	var s = window.location.hostname + `index.html?search=`;
	keyword = keyword.replace (" ", "%20");						//OPTIONAL
	s += keyword;
	s += `&0&1`;
	window.location.href = s;
}

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
	var cID = item.id;
	var cName = removeTone(item.name.toLowerCase()).split(" ");
	var cBrand = removeTone(item.brand.toLowerCase()).split(" ");
	var cColor = removeTone(item.color.toLowerCase()).split(" ");
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

window.onload = function() {
	getSearchBar();
	getMenu();
	getProductWindow();
}
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

	s += "<table cellspacing=\"0\">";

	for (var i=0; i<menu.length; i++) {
		s += "<tr><td><a href=\"index.html?" + menuUrl[i] + "&0&" + page + "\" target=\"_self\" title=\"" + menuLabel[i] + "\">" + menuLabel[i] + "</a>";
		s += "<div><ul>";

		for (var j=1; j<menu[i].length; j++) {
			s += "<li><a href=\"index.html?" + menuUrl[i] + "&" + j + "&" + page +"\" target=\"_self\" title=\"" + menu[i][j] + "\">" + menu[i][j] + "</a></li>";
		}

		s += "</ul></div>";
		s += "</td></tr>";
	}

	s += "</table>";

	document.getElementById("sidebar").innerHTML = s;
}

function getProductWindow () {
	var s = "";
	var url = window.location.href;
	var splitter = url.split('?');			// [index.html]?[ao&1&0]
	var splitted = "";
	if (url != splitter)					// url == splitter => index.html
		splitted = splitter[1];				// [ao&1&0]
	var params = splitted.split('&');		// [ao]&[1]&[0] ; 0: Category; 1: Subcategory; 2: Page

	var item = new Array();	//0: id; 1: price; 2: name; 3: brand; 4: color; 5: image
	var tag = new Array();

	item[1] = new Array ("AT-001", 300000, "Áo dài tay thể thao", "Adidas", "Xanh", "images/AT/AT-001.jpg");
	tag[1] = new Array ("ao", "dai", "tay", "the", "thao", "adidas", "xanh");

	item[2] = new Array ("QJ-001", 250000, "Quần jean rách", "Châu Âu", "Đen", "images/QJ/QJ-001.jpg");
	tag[2] = new Array ("quan", "jean", "rach", "chau", "au", "den");

	item[3] = new Array ("AT-002", 315000, "Áo thể thao tay ngắn", "Under Armour", "Xanh tím", "images/AT/AT-002.jpg");
	tag[3] = new Array ("ao", "the", "thao", "tay", "ngan", "under", "armour", "xanh", "tim");

	item[4] = new Array ("AT-003", 70000, "Áo thun trơn", "Kirkland", "Trắng", "images/AT/AT-003.jpg");
	tag[4] = new Array ("ao", "thun", "tron", "kirkland", "trang");

	item[5] = new Array ("AT-004", 260000, "Áo bóng rỗ đội OKC", "Nike", "Xanh", "images/AT/AT-004.jpg");
	tag[5] = new Array ("ao", "bong", "ro", "doi", "okc", "nike", "xanh");

	item[6] = new Array ("AT-005", 80000, "Áo thun mùa hè", "Adidas", "Trắng / Đen", "images/AT/AT-005.jpg");
	tag[6] = new Array ("ao", "thun", "mua", "he", "adidas", "trang", "den");

	item[7] = new Array ("AS-001", 150000, "Áo sơ mi trơn", "Pull & Bear", "Đen xám", "images/AS/AS-001.jpg");
	tag[7] = new Array ("ao", "so", "mi", "tron", "pull", "bear", "den", "xam");

	item[8] = new Array ("AS-002", 150000, "Áo sơ mi caro", "Pull & Bear", "Cam", "images/AS/AS-002.jpg");
	tag[8] = new Array ("ao", "so", "mi", "caro", "pull", "bear", "cam");

	item[9] = new Array ("AS-003", 200000, "Áo sơ mi công sở", "VIETTIEN", "Trắng", "images/AS/AS-003.jpg");
	tag[9] = new Array ("ao", "so", "mi", "cong", "so", "viettien", "trang");

	item[10] = new Array ("AS-004", 400000, "Áo sơ mi sọc", "Burberry", "Xanh", "images/AS/AS-004.jpg");
	tag[10] = new Array ("ao", "so", "mi", "soc", "burberry", "xanh");

	item[11] = new Array ("QT-001", 220000, "Quần jogger", "Adidas", "Đen", "images/QT/QT-001.jpg");
	tag[11] = new Array ("quan", "jogger", "adidas", "den");

	item[12] = new Array ("QT-002", 200000, "Quần thun dài", "Aristino", "Xám", "images/QT/QT-002.jpg");
	tag[12] = new Array ("quan", "thun", "dai", "aristino", "xam");

	item[13] = new Array ("QT-003", 390000, "Quần bóng rỗ", "Air Jordan", "Đỏ", "images/QT/QT-003.jpg");
	tag[13] = new Array ("quan", "bong", "ro", "air", "jordan", "do");

	item[14] = new Array ("QT-004", 280000, "Quần đùi thể thao", "Adidas", "Xám", "images/QT/QT-004.jpg");
	tag[14] = new Array ("quan", "the", "thao", "adidas", "xam");

	item[15] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	tag[15] = new Array ("quan", "thun", "sooc", "bst", "xanh");

	item[16] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[17] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[18] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[19] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[20] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[20] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[21] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[22] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[23] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[24] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[25] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[26] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[27] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[28] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[29] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[30] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[31] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[32] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[33] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[34] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[35] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[36] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[37] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[38] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[39] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[40] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[41] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[42] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[43] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[44] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[45] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[46] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[47] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[48] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[49] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[50] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[51] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[52] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[53] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[54] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[55] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[56] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[57] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[58] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[59] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[60] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[61] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[62] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[63] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[64] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[65] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[66] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[67] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[68] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[69] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[70] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[71] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[72] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[73] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[74] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[75] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[76] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[77] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[78] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[79] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[80] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[81] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[82] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[83] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[84] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[85] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[86] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[87] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[88] = new Array ("QT-004", 165000, "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg");
	item[89] = new Array ("QT-004", 165000, "Quần thun sooc", "BSTFUCKYOU", "Xanh", "images/QT/QT-005.jpg");
	

	// EXPERIMENTAL
	items = new Array ();			// filtered array
	var itemOnPage = 12;
	var itemStart = itemOnPage*(params[2]-1)+1;
	var itemEnd = itemOnPage*(params[2]-1)+itemOnPage;
	//

	// Filter products
	items.push (items[0]);	// empty item
	if (splitter[1]==null) {		// Home page
		for (var i=1; i<item.length; i++) {		//PLACEHOLDER
			items.push (item[i]);
		}
	}
	else {
		switch (params[0]) {
			case 'ao': {
				switch (params[1]) {
					case '0': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="AT" || kind[0]=="AS")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="AT")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
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
							var kind = item[i][0].split('-');
							if (kind[0]=="QT" || kind[0]=="QJ")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="QT")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
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
							var kind = item[i][0].split('-');
							if (kind[0]=="NK" || kind[0]=="NS")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="NK")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
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
					var kind = item[i][0].split('-');
					if (kind[0]=="GI")
						items.push (item[i]);
				}
				break;
			}
			case 'dep': {
				for (var i=1; i<item.length; i++) {
					var kind = item[i][0].split('-');
					if (kind[0]=="DE")
						items.push (item[i]);
				}
				break;
			}
			case 'balo': {
				switch (params[1]) {
					case '0': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="BL" || kind[0]=="BW")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="BL")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
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
					var kind = item[i][0].split('-');
					items.push (item[i]);
				}
				break;
			}
		}
	}

	console.debug ("before: " + itemStart + " " + itemEnd);

	if (itemEnd >= items.length)			// stop showing item
		itemEnd = items.length-1;

	console.debug ("after: " + itemStart + " " + itemEnd);

	//Show products
	for (var i=itemStart; i<=itemEnd; i++) {
		console.debug (i + " " + items[i][2]);
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

	s += "<div id=\"productDiv\">";
	s += "<img src=\"" + item[id][5] + "\" width=\"178px\" height=\"178px\"><br>";
	s += "<div>";
	s += "<p><span class=\"brand\">" + item[id][3] + "</span></p>";
	s += "<p>" + item[id][2] + "</p>";
	s += "<p>" + item[id][4] + "</p>";
	s += "<p><span class=\"price\">" + item[id][1] + "đ</span></p>";
	s += "</div>";
	s += "</div>";

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

	s += "<div id=\"" + kind + "\">";
	if (kind == "pageBtn")
		s += "<a href=\"index.html?" + params[0] + "&" + params[1] + "&" + pageAltered + "\">" + page + "</a>";
	else
		s += "<p>" + page + "</p>";
	s += "</div>";

	return s;
}

window.onload = function() {
	getMenu();
	getProductWindow();
}
function getMenu () {
	var s = "";
	var menu = new Array ();
	var menuLabel = new Array ("Áo", "Quần", "Nón", "Giày", "Dép", "Túi xách");
	var menuUrl = new Array ("ao", "quan", "non", "giay", "dep", "tuixach");
	menu[0] = new Array ("0", "Áo thun", "Áo sơ mi");
	menu[1] = new Array ("0", "Quần thun", "Quần jean");
	menu[2] = new Array ("0", "Nón kết", "Nón snapback");
	menu[3] = new Array ();
	menu[4] = new Array ();
	menu[5] = new Array ();
	var page = 0;		//Default page

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
	var params = splitted.split('&');		// [ao]&[1]&[0] ; ao: Category; 1: Subcategory; 0: Page

	var item = new Array();	//0: id; 1: price; 2: name; 3: brand; 4: color; 5: image
	var tag = new Array();
	item[1] = new Array ("AT-001", 300000, "Áo dài tay thể thao", "Adidas", "Đen", "images/AT/AT-001.jpg");
	tag[1] = new Array ("ao", "dai", "tay", "the", "thao", "adidas", "den");
	item[2] = new Array ("QJ-001", 250000, "Quần jean rách", "Châu Âu", "Đen", "images/QJ/QJ-001.jpg");
	tag[2] = new Array ("quan", "jean", "rach", "chau", "au", "den");
	item[3] = new Array ("AT-002", 315000, "Áo thể thao tay ngắn", "Under Armour", "Xanh tím", "images/AT/AT-002.jpg");
	tag[3] = new Array ("ao", "the", "thao", "tay", "ngan", "under", "armour", "xanh", "tim");

	if (splitter[1]==null) {		// Home page
		for (var i=1; i<item.length; i++) {		//PLACEHOLDER
			s += getProduct (i, item);
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
								s += getProduct (i, item);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="AT")
								s += getProduct (i, item);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="AS")
								s += getProduct (i, item);
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
								s += getProduct (i, item);
						}
						break;
					}
					case '1': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="QT")
								s += getProduct (i, item);
						}
						break;
					}
					case '2': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i][0].split('-');
							if (kind[0]=="QJ")
								s += getProduct (i, item);
						}
						break;
					}
				}
				break;
			}
		}
	}
	
	//alert (s);
	document.getElementById("main").innerHTML = s;
}

function getProduct (id, item) {
	var s = "";

	s += "<div>";
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

window.onload = function() {
	getMenu();
	getProductWindow();
}
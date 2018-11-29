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
// MENU
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


// HREF
var url = window.location.href;
var splitter = url.split('?');			// [index.html]?[ao&1&0]
var splitted = "";
if (url != splitter)					// url == splitter => index.html
	splitted = splitter[1];				// [ao&1&0]
var params = splitted.split('&');		// [ao]&[1]&[0] ; 0: Category; 1: Subcategory; 2: Page

// ITEM
var item = new Array();	//0: id; 1: price; 2: name; 3: brand; 4: color; 5: image; 6: sale
item[0] = new SanPham ();
item[0] = new SanPham ();
item[1] = new SanPham ("AT-001", "300.000", "Áo dài tay thể thao", "Adidas", "Xanh", "images/AT/AT-001.jpg", "350.000");
item[2] = new SanPham ("QJ-001", "250.000", "Quần jean rách", "Châu Âu", "Đen", "images/QJ/QJ-001.jpg", 0);
item[3] = new SanPham ("AT-002", "315.000", "Áo thể thao tay ngắn", "Under Armour", "Xanh tím", "images/AT/AT-002.jpg", 0);
item[4] = new SanPham ("AT-003", "70.000", "Áo thun trơn", "Kirkland", "Trắng", "images/AT/AT-003.jpg", 0);
item[5] = new SanPham ("AT-004", "260.000", "Áo bóng rổ đội OKC", "Nike", "Xanh", "images/AT/AT-004.jpg", 0);
item[6] = new SanPham ("AT-005", "80.000", "Áo thun mùa hè", "Adidas", "Trắng / Đen", "images/AT/AT-005.jpg", 0);
item[7] = new SanPham ("AS-001", "150.000", "Áo sơ mi trơn", "Pull & Bear", "Đen xám", "images/AS/AS-001.jpg", 0);
item[8] = new SanPham ("AS-002", "150.000", "Áo sơ mi caro", "Pull & Bear", "Cam", "images/AS/AS-002.jpg", 0);
item[9] = new SanPham ("AS-003", "200.000", "Áo sơ mi công sở", "VIETTIEN", "Trắng", "images/AS/AS-003.jpg", 0);
item[10] = new SanPham ("AS-004", "400.000", "Áo sơ mi sọc", "Burberry", "Xanh", "images/AS/AS-004.jpg", 0);
item[11] = new SanPham ("QT-001", "220.000", "Quần jogger", "Adidas", "Đen", "images/QT/QT-001.jpg", 0);
item[12] = new SanPham ("QT-002", "200.000", "Quần thun dài", "Aristino", "Xám", "images/QT/QT-002.jpg", 0);
item[13] = new SanPham ("QT-003", "390.000", "Quần bóng rổ", "Air Jordan", "Đỏ", "images/QT/QT-003.jpg", 0);
item[14] = new SanPham ("QT-004", "280.000", "Quần đùi thể thao", "Adidas", "Xám", "images/QT/QT-004.jpg", 0);
item[15] = new SanPham ("QT-005", "165.000", "Quần thun sooc", "BST", "Xanh", "images/QT/QT-005.jpg", 0);
item[16] = new SanPham ("GI-001", "265.000", "Giày Converse Classic", "Converse", "Trắng", "images/GI/GI-001.jpg", "288.000");
item[17] = new SanPham ("GI-002", "463.500", "Giày Vans Old Skool", "Vans", "Đen", "images/GI/GI-002.jpg", "488.000");
item[18] = new SanPham ("GICS-001", "663.500", "Giày Tây BQ636", "Châu Âu", "Đen", "images/GICS/GICS-001.jpg", "788.000");
item[19] = new SanPham ("GICS-002", "1.663.500", "Giày Tăng chiều cao G123", "MEN HQ", "Đen", "images/GICS/GICS-002.jpg", 0);
item[20] = new SanPham ("GI-005", "331.000", "Giày Golf Roshe", "Nike", "Đen", "images/GI/GI-005.jpg", 0);
item[21] = new SanPham ("GI-006", "263.500", "Giày Thể thao Thượng Đình", "Thượng Đình", "Trắng", "images/GI/GI-006.jpg", 0);
item[22] = new SanPham ("GI-007", "464.200", "Giày Converse All Star", "Converse ", "Trắng", "images/GI/GI-007.jpg", 0);
item[23] = new SanPham ("GI-008", "264.200", "Giày Smash V16", "Puma"," Đen", "images/GI/GI-008.jpg", 0);
item[24] = new SanPham ("NK-001", "64.200", "Nón golf N240", "Adidas","Đen", "images/NK/NK-001.jpg", 0);
item[25] = new SanPham ("NK-002", "53.200", "Nón Taylormade", "New Era"," Xám", "images/NK/NK-002.jpg", 0);
item[26] = new SanPham ("NK-003", "33.200", "Nón Nike Aerobill Golf L91", "Nike", "Xám", "images/NK/NK-003.jpg", 0);
item[27] = new SanPham ("NK-004", "63.236", "Nón Nike Feather Light Adjustable",  "Nike", "Trắng", "images/NK/NK-004.jpg", "69.000");
item[28] = new SanPham ("NK-005", "53.888", "Nón Thể thao Climacool",  "Adidas", "Đen xám", "images/NK/NK-005.jpg", 0);
item[29] = new SanPham ("NK-006", "53.888", "Nón NY Yankees 39FORTY", "New Era", "Đen", "images/NK/NK-006.jpg", "59.000");
item[30] = new SanPham ("NK-007", "183.000", "Nón NY Yankees 9FORTY Logo bạc", "New Era", "Xanh dương", "images/NK/NK-007.jpg", 0);
item[31] = new SanPham ("NS-001", "153.000", "Nón Chigago Bulls WINDY CITY", "New Era", "Trắng Đỏ", "images/NS/NS-001.jpg", 0);
item[32] = new SanPham ("NS-002", "221.000", "Nón snapback Vân sóng xanh",  "Serpent Urban", "Xanh", "images/NS/NS-002.jpg", 0);
item[33] = new SanPham ("NS-003", "128.000", "Nón hiphop Chicago", "Skyline", "Đen", "images/NS/NS-003.jpg", "150.000");
item[34] = new SanPham ("NS-004", "139.000", "Nón rapper Likanen Etelä", "ATLANTIS", "Đen", "images/NS/NS-004.jpg", 0);
item[35] = new SanPham ("NS-005", "166.000", "Nón snapback NEWYORK", "Mỹ", "Đen Trắng", "images/NS/NS-005.jpg", 0);
item[36] = new SanPham ("NS-006", "46.000", "Nón snapback Power", "Julie Caps", "Xanh Camo", "images/NS/NS-006.jpg", 0);
item[37] = new SanPham ("NS-007", "73.222", "Nón snapback Eagle",  "Julie Caps", "Xám Đỏ", "images/NS/NS-007.jpg", 0);
item[38] = new SanPham ("NS-008", "23.222", "Nón snapback Power",  "Julie Caps", "Đen Nâu Camo", "images/NS/NS-008.jpg", 0);
item[39] = new SanPham ("BL-001", "328.522", "Balo ONCADA",  "Adidas Originals", "Đen Cam", "images/BL/BL-001.jpg", 0);
item[40] = new SanPham ("BL-002", "255.662", "Balo Supreme BLS201",  "Supreme", "Đen", "images/BL/BL-002.jpg", 0);
item[41] = new SanPham ("BL-003", "159.111", "Balo Puma Mens Pro",  "Puma", "Đỏ Đen", "images/BL/BL-003.jpg", "210.000");
item[42] = new SanPham ("BL-004", "421.000", "Balo Vans Galaxy print",  "Vans", "Xanh trắng", "images/BL/BL-004.jpg", "488.000");
item[43] = new SanPham ("TDC-002", "128.000", "Túi đeo chéo Nike logo xéo", "Nike", "Đen", "images/TDC/TDC-002.jpg", 0);
item[44] = new SanPham ("TDC-001", "224.455", "Túi đeo chéo Nike logo to",  "Nike", "Đen", "images/TDC/TDC-001.jpg", 0);
item[45] = new SanPham ("TDC-003", "127.000", "Túi đeo chéo Puma SC102",  "Puma", "Xám ", "images/TDC/TDC-003.jpg", 0);
item[46] = new SanPham ("TDC-004", "225.030", "Túi đeo chéo Supreme họa tiết", "Supreme", "Tím", "images/TDC/TDC-004.jpg", 0);
item[47] = new SanPham ("TDC-005", "321.130", "Tui đeo chéo Nike", "Nike", "Trắng Xanh Đen", "images/TDC/TDC-005.jpg", 0);
item[48] = new SanPham ("BL-006", "428.335", "Balo Vans Old Skool", "Vans", "Xanh dương", "images/BL/BL-005.jpg", 0);
item[49] = new SanPham ("BL-007", "322.358", "Balo  Đen Adidas Training CF9008",  "Adidas", "Đen", "images/BL/BL-006.jpg", 0);
item[50] = new SanPham ("BL-008", "124.228", "Balo Adidas S02126", "Adidas", "Đen", "images/BL/BL-007.jpg", "150.000");
item[51] = new SanPham ("ATN-001", "220.000", "Áo thun nữ trắng Eiffel", "Korean", "Trắng", "images/ATN/ATN-001.jpg", 0);
item[52] = new SanPham ("ATN-002", "225.000", "Áo thun nữ trắng hình cá ", "Korean", "Trắng", "images/ATN/ATN-002.jpg", 0);
item[53] = new SanPham ("ATN-003", "231.000", "Áo thun nữ trắng hình nhân", "Korean", "Trắng", "images/ATN/ATN-003.jpg", 0);
item[54] = new SanPham ("ATN-004", "299.000", "Áo thun nữ sọc kẻ", "Korean", "Trắng đen", "images/ATN/ATN-004.jpg", 0);
item[55] = new SanPham ("ATN-005", "399.000", "Áo thun nữ dạ ren", "Korean", "Hồng", "images/ATN/ATN-005.jpg", 0);
item[56] = new SanPham ("ATN-006", "259.000", "Áo thun nữ bó hở vai", "Korean", "Xám", "images/ATN/ATN-006.jpg", 0);
item[57] = new SanPham ("ATN-007", "322.000", "Áo thun nữ nâu kẻ đen", "China", "Đen Nâu", "images/ATN/ATN-007.jpg", 0);
item[58] = new SanPham ("ATN-008", "122.000", "Áo thun nữ có phun chữ", "Korean", "Trắng", "images/ATN/ATN-008.jpg", 0);
item[59] = new SanPham ("AL-001", "135.000", "Áo len Hoddie nữ", "Korean", "Đen xám", "images/AL/AL-001.jpg", 0);
item[60] = new SanPham ("AL-002", "138.000", "Áo len Hoddie nữ Hàn Quốc", "Skyline", "Hồng", "images/AL/AL-002.jpg", 0);
item[61] = new SanPham ("AL-003", "134.000", "Áo len hoddie nữ SVCG-3153", "Korean", "Đỏ nâu", "images/AL/AL-003.jpg", 0);
item[62] = new SanPham ("AL-004", "210.000", "Áo len dạ nữ", "Korean", "Nâu Xanh lá", "images/AL/AL-004.jpg", 0);
item[63] = new SanPham ("AL-005", "120.991", "Áo len dạ nữ cổ trơn", "Chinasun", "Nâu", "images/AL/AL-005.jpg", 0);
item[64] = new SanPham ("AL-006", "130.056", "Áo len xám hình mèo ", "Chinasun", "Xám", "images/AL/AL-006.jpg", 0);
item[65] = new SanPham ("AL-007", "110.000", "Áo len nữ AL50 tay dài", "Narsis", "Xanh lá", "images/AL/AL-007.jpg", "134.000");
item[66] = new SanPham ("AL-008", "180.820", "Áo Len nữ L7077", "Narsis", "Xám", "images/AL/AL-008.jpg", 0);
item[67] = new SanPham ("QJ-002", "350.000", "Quần jean nam SID6110", "China", "Xanh nhạt", "images/QJ/QJ-002.jpg", 0);
item[68] = new SanPham ("QJ-003", "253.000", "Quần jean nam basic xước nhẹ", "Mỹ", "Xanh nhạt", "images/QJ/QJ-003.jpg", "300.000");
item[69] = new SanPham ("QJ-004", "553.000", "Quần Jean Nam Ma Bư Dài I01", "Châu âu", "Đen", "images/QJ/QJ-004.jpg",0);
item[70] = new SanPham ("QJ-005", "211.000", "Quần jean nam wash IT3KX", "Thái lan", "Xanh nhạt", "images/QJ/QJ-005.jpg", 0);
item[71] = new SanPham ("QJ-006", "225.000", "Quần jean nam rách nhã nhặn", "Thái lan", "Xanh nhạt", "images/QJ/QJ-006.jpg", 0);
item[72] = new SanPham ("QJ-007", "153.000", "Quần Jean Nam sóoc SCVG-5303", "Châu Âu", "Xanh đậm", "images/QJ/QJ-007.jpg",0);
item[73] = new SanPham ("QJ-008", "257.000", "Quần Jean Rách Chuột Đậm", "Việt Nam", "Xám", "images/QJ/QJ-008.jpg",0);
item[74] = new SanPham ("QT-006", "169.999", "Quần Short Thun Nam Thể Thao", "China", "Đen", "images/QT/QT-006.jpg", "180.000");
item[75] = new SanPham ("QT-007", "113.999", "Quần Short Thun Nam Đứng tuổi", "Việt Nam", "Đen", "images/QT/QT-007.jpg", "150.000");
item[76] = new SanPham ("QT-008", "275.999", "Quần short thun nam HCO-3103", "Hollister", "Xám", "images/QT/QT-008.jpg", "280.000");
item[77] = new SanPham ("TX-003", "121.130", "Túi xách tập gym", "Puma", "Đen Trắng", "images/TX/TX-003.jpg", 0);
item[78] = new SanPham ("TX-004", "461.330", "Túi xách da cao cấp",  "Puma", "Đen", "images/TX/TX-004.jpg", 0);
item[79] = new SanPham ("TX-005", "388.000", " Túi xách vải du lịch",  "Puma", "Đen", "images/TX/TX-005.jpg", 0);
item[80] = new SanPham ("TX-006", "235.000", " Túi Xách thể thao Foundation S",  "Puma ","Hồng Xanh", "images/TX/TX-006.jpg", "315.000");
item[81] = new SanPham ("TDC-006", "161.330", " Túi đeo chéo lưng",  "Puma", "Đỏ", "images/TDC/TDC-006.jpg", 0);
item[82] = new SanPham ("TDC-007", "222.330", " Túi đeo chéo lưng thể thao",  "Adidas", "Đen", "images/TDC/TDC-007.jpg", 0);
item[83] = new SanPham ("GICS-003", "1.222.330", "Giày công sở lịch lãm bóng",  "Châu Âu", "Đen Vàng", "images/GICS/GICS-003.jpg", "1.350.000");
item[84] = new SanPham ("GICS-004", "2.044.330", "Giày da công sở quý ông",  "Châu Âu", "Nâu", "images/GICS/GICS-004.jpg", "2.220.000");
item[85] = new SanPham ("GICS-005", "1.013.330", "Giày công sở nam da bò",  "Châu Âu", "Den", "images/GICS/GICS-005.jpg", 0);
item[86] = new SanPham ("GICS-006", "893.330", "Giày công sở nam da sần X031", "Thái lan", "Nâu", "images/GICS/GICS-006.jpg", "1.000.000");
item[87] = new SanPham ("GICS-007", "593.330", "Giày Công Sở Patina G068", "Hungary", "Nâu", "images/GICS/GICS-007.jpg", "700.000");
item[88] = new SanPham ("GICS-008", "451.000", "Giày công sở da trơn NO-107–8805", "Hungary", "Nâu", "images/GICS/GICS-008.jpg", 0);
item[89] = new SanPham ("AS-005", "100.000", "Áo sơ mi kiểu già dặn", "Korean", "Hồng nhạt", "images/AS/AS-005.jpg", "150.000");
item[90] = new SanPham ("AS-006", "60.000", "Áo sơ mi kiểu sọc kẻ", "Korean", "Xanh", "images/AS/AS-006.jpg", "90.000");
item[91] = new SanPham ("AS-007", "70.000", "Áo sơ mi kiểu công sở trẻ", "Korean", "Đỏ nâu", "images/AS/AS-007.jpg", "98.000");
item[92] = new SanPham ("AS-008", "85.000", "Áo sơ mi kiểu châu âu", "Châu âu", "Xanh", "images/AS/AS-008.jpg", "118.000");
item[93] = new SanPham ("AS-009", "185.000", "Áo sơ mi lịch lãm", "Châu Âu", "Trắng", "images/AS/AS-009.jpg", 0);
item[94] = new SanPham ("AS-010", "81.000", "Áo sơ mi công sở tay ôm", "Việt Nam", "Trắng", "images/AS/AS-010.jpg", 0);
item[95] = new SanPham ("AS-011", "141.000", "Áo sơ mi công sở bóng", "Korean", "Xanh Tím nhạt", "images/AS/AS-011.jpg", 0);
item[96] = new SanPham ("AT-006", "110.000", "Áo thun nam bóng trơn", "Puma", "Trắng", "images/AT/AT-006.jpg", "155.000");
item[97] = new SanPham ("AT-007", "100.000", "Áo thun nam cổ tròn", "Châu âu", "Hồng", "images/AT/AT-007.jpg", "150.000");
item[98] = new SanPham ("AT-008", "50.000", "Áo thun nam bó Thể thao", "Châu Âu", "Xám", "images/AT/AT-008.jpg", "90.000");
item[99] = new SanPham ("AT-009", "40.000", "Áo thun nam sọc có cổ", "Việt Nam", "Trắng Đen", "images/AT/AT-009.jpg", "50.000");
item[100] = new SanPham ("AT-010", "70.000", "Áo thun nam hàn quốc", "Metange", "Xanh", "images/AT/AT-010.jpg", "88.000");
item[101] = new SanPham ("DL-001", "50.000", "Dép lê xốp thoáng mát ", "Nike", "Trắng đen", "images/DL/DL-001.jpg", 0);
item[102] = new SanPham ("DL-002", "40.000", "Dép lê xốp thoáng mát nhẹ", "Nike", "Đen xám", "images/DL/DL-002.jpg", 0);
item[103] = new SanPham ("DL-003", "140.000", "Dép lê cao cấp", "Nike", "Xanh", "images/DL/DL-003.jpg", 0);
item[104] = new SanPham ("DL-004", "131.000", "Dép lê cao cấp loại siêu bền", "Nike", "Xanh đen", "images/DL/DL-004.jpg", 0);
item[105] = new SanPham ("DL-005", "134.000", "Dép lê xốp nhẹ", "China", "Đen Đỏ", "images/DL/DL-005.jpg", 0);
item[106] = new SanPham ("DS-001", "123.000", "Sandal nhẹ thoáng mát ", "Maxbun", "Đen Trắng", "images/DS/DS-001.jpg", 0);
item[107] = new SanPham ("DS-002", "223.000", "Sandal đế dày", "Nunce", "Nâu Đen", "images/DS/DS-002.jpg", 0);
item[108] = new SanPham ("DS-003", "523.000", "Sandal kiểu gỗ cao cấp ", "Statajor", "Nâu", "images/DS/DS-003.jpg", "599.900");
item[109] = new SanPham ("DS-004", "323.000", "Sandal katafashion", "Katafashion", "Đen", "images/DS/DS-004.jpg", 0);
item[110] = new SanPham ("DS-005", "221.000", "Sandal phong cách hàn quốc", "Zannado", "Đen đỏ trắng", "images/DS/DS-005.jpg", "300.000");


/* ------------------------ */

function getCartBtnNum () {
	var s = "";
	var itemArray = getCartList();
	if (itemArray.length <= 0)
		return;

	var amount = 0;
	for (var i=0; i<itemArray.length; i++) {
		amount += parseInt(window.localStorage.getItem ("item"+itemArray[i]));
	}

	s += `<div id="cartBtnNum">
			<p>` + amount + `</p>
		</div>`;

	document.getElementById("cartBtn").innerHTML += s;
}

function getMenu () {
	var s = "";
	
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
	
	// EXPERIMENTAL
	items = new Array ();			// filtered array
	var itemOnPage = 12;
	var itemStart = itemOnPage*(params[2]-1)+1;
	var itemEnd = itemOnPage*(params[2]-1)+itemOnPage;
	//

	// Filter products
	items.push (items[0]);	// empty item
	if (splitter[1]==null) {		// Home page
		/*
		for (var i=1; i<item.length; i++) {
			items.push (item[i]);
		}*/
		/*getCarousel();*/
	}
	else {
		switch (params[0]) {
			case 'ao': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="AT" || kind[0]=="AS" || kind[0]=="AL" || kind[0]=="ATN")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="AT")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="AS")
								items.push (item[i]);
						}
						break;
					}
					case '3': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="AL")
								items.push (item[i]);
						}
						break;
					}
					case '4': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="ATN")
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
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="QT" || kind[0]=="QJ")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="QT")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
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
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NK" || kind[0]=="NS")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NK")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
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
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="GI" || kind[0]=="GICS")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="GI")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="GICS")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'dep': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="DL" || kind[0]=="DS")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="DL")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="DS")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'balo': {
				switch (params[1]) {
					case '0': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="BL" || kind[0]=="TDC" || kind[0]=="TX")
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
							if (kind[0]=="TDC")
								items.push (item[i]);
						}
						break;
					}
					case '3': {
						for (var i=1; i<item.length; i++) {
							var kind = item[i].id.split('-');
							if (kind[0]=="TX")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}

			case 'all': {			//TEST
				for (var i=1; i<item.length; i++) {
					items.push (item[i]);
				}
				break;
			}

			case 'new': {
				for (var i=item.length-1; i>=1; i--) {
					items.push (item[i]);
				}
				break;
			}

			case 'deals': {
				for (var i=item.length-1; i>=1; i--) {
					if (item[i].sale != 0)
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
				var keywordSplitted = searchKeyword.split("+");
				var count=0;
				for (var j=0; j<keywordSplitted.length; j++)
					if (comparator.indexOf(keywordSplitted[j])!=-1)
						count++;
				if (count == keywordSplitted.length)
					items.push (item[i]);
			}
		}
		// Filter products (ADVANCED SEARCH)
		if (params[0].split("=")[0]=="advancedsearch") {
			var searchKeyword = params[0].split("=")[1];
			searchKeyword = searchKeyword.toLowerCase();
			for (var i=1; i<item.length; i++) {
				var comparator = getComparator (item[i]);
				var keywordSplitted = searchKeyword.split("+");
				var count=0;
				for (var j=0; j<keywordSplitted.length; j++)
					if (comparator.indexOf(keywordSplitted[j])!=-1)
						count++;
				if (count == keywordSplitted.length) {
					//index.html?advancedsearch=keyword&0&page&kind&from&to
					//
					var added=0;
					var kind = params[3];
					var priceFrom = parseInt(params[4].replace(/\./g, ''));
					var priceTo = parseInt(params[5].replace(/\./g, ''));
					
					if (kind=="all") {
						items.push (item[i]);
						added=1;
					}
					for (var j=0; j<itemKind.length; j++) {
						if (kind==itemKind[j][0]) {
							if (itemKind[j].indexOf(item[i].id.split('-')[0])!=-1) {
								items.push (item[i]);
								added=1;
								break;
							}
						}
						else {
							if (kind == item[i].id.split('-')[0]) {
								items.push (item[i]);
								added=1;
								break;
							}
						}
					}
					console.debug (priceTo);
					if (!parseInt(priceFrom) || priceFrom < 0) {
						priceFrom = 0;
					}
					if (!parseInt(priceTo)) {
						priceTo = 99999999;
					}
					else if (priceTo < 0)
						priceTo = 0;
					var newPrice = parseInt(item[i].price.replace(/\./g, ''));
					if (added==1 && (newPrice < priceFrom || newPrice > priceTo))
						items.pop();
					//
				}
			}
		}
		// Product detail
		else if (params[0].split("=")[0]=="detail") {
			var itemID = params[0].split("=")[1];
			getProductDetail (itemID);
			return;
		}

	}

	console.debug ("before: " + itemStart + " " + itemEnd);

	if (itemEnd >= items.length)			// stop showing item
		itemEnd = items.length-1;

	console.debug ("after: " + itemStart + " " + itemEnd);

	//Show products
	if (items.length < 2)		// Tính cả sản phẩm rỗng items[0]
		s += "<h3>Không có sản phẩm nào</h3>";
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
	document.getElementById("main").innerHTML += s;
}

function getProductID (spID) {
	for (var i=1; i<item.length; i++)
		/*console.debug (spID + " " + item[i].id);*/
		if (spID == item[i].id)
			return i;
	return -1;
}

function getProduct (i, item) {
	/*item[] trong day la` items[] da~ dc filter*/
	var s = "";
	var prodID = getProductID(item[i].id);

	s += `<div id="productDiv">
			<a href="index.html?detail=` + prodID + `">
			<img src="` + item[i].image + `"></a><br>
			<div>
				<p><span class="brand\">` + item[i].brand + `</span></p>
				<p>` + item[i].name + `</p>
				<p>` + item[i].color + `</p>
				<p><span class="price">` + item[i].price + `₫</span>`;
	if (item[i].sale!=0) {
		s +=	`<span class="sale">` + item[i].sale + `₫</span>`;
	}
	s += 		`</p>
				<input type="button" name="addToCartBtn" value="Thêm vào giỏ" onclick="addToCart(` + prodID + `)"/>	
			</div>
		</div>`;

	return s;
}

function goSearch (keyword) {
	var s = `index.html?search=`;
	keyword = removeTone (keyword);
	keyword = keyword.replace (/ /g, "+");						//OPTIONAL
	s += keyword;
	s += `&0&1`;
	window.location.href = s;
}

function goAdvancedSearch (keyword, kind, priceFrom, priceTo) {
	//index.html?advancedsearch=keyword&0&page&kind&from&to
	var s = `index.html?advancedsearch=`;
	keyword = removeTone (keyword);
	keyword = keyword.replace (/ /g, "+");						//OPTIONAL
	s += keyword;
	s += '&0&1';
	if (kind=="all")
		s += '&all';
	else
		s += '&'+itemKind[kind.split('&')[0]][kind.split('&')[1]];
	s += '&'+priceFrom;
	s += '&'+priceTo;
	window.location.href = s;
}

/* CART */

function addToCart (id) {
	var itemIden = "item" + id;
	addItemToCart (itemIden, 1);
}

function addItemToCart (iden, amount) {
	var currentAmount = window.localStorage.getItem (iden);
	if (currentAmount == null) {
		currentAmount = 0;
	}
	var newAmount = parseInt(currentAmount) + amount;
	window.localStorage.setItem (iden, newAmount);
	/*alert (window.localStorage.getItem (iden));*/
	alert ("Đã thêm vào giỏ hàng!");
	window.location.href = window.location.href;
}

function changeCartItemAmount (id, amount) {
	var currentAmount = window.localStorage.getItem ("item"+id);
	if (amount == '-')
		amount = parseInt(currentAmount)-1;
	else if (amount == '+')
		amount = parseInt(currentAmount)+1;
	if (parseInt(amount) < 1)
		amount = 1;
	window.localStorage.setItem ("item"+id, amount);
	window.location.href = "index.html?cart";
}

function removeCartItem (id) {
	window.localStorage.removeItem ("item"+id);
	window.location.href = "index.html?cart";
}

function clearCart () {
	var itemArray = getCartList();
	for (var i=0; i<itemArray.length; i++) {
		var spID = itemArray[i];
		window.localStorage.removeItem ("item"+spID);
	}
	window.location.href = "index.html";
}

function checkOut () {
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

function totalCart (itemArray) {
	var total = 0;
	for (var i=0; i<itemArray.length; i++) {
		var spID = itemArray[i];
		var newPrice = parseInt(item[spID].price.replace(/\./g, ''));
		var currentAmount = window.localStorage.getItem ("item"+spID);
		total += newPrice * currentAmount;
	}
	return total;
}

function getCartList () {
	var itemArray = new Array();
	for (var i=1; i<item.length; i++) {
		var itemAmount = window.localStorage.getItem ("item"+i);
		if (itemAmount != null && itemAmount>0)
			itemArray.push(i);
	}
	return itemArray;
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
	switch (kind) {
		case 'AT': return 'Áo thun nam';
		case 'AS': return 'Áo sơ mi nam';
		case 'AL': return 'Áo len nữ';
		case 'ATN': return 'Áo thun nữ';

		case 'QT': return 'Quần thun';
		case 'QJ': return 'Quần jean';

		case 'NK': return 'Nón kết';
		case 'NS': return 'Nón snapback';

		case 'GI': return 'Giày thể thao';
		case 'GICS': return 'Giày công sở';

		case 'DL': return 'Dép lê';
		case 'DS': return 'Sandal';

		case 'BL': return 'Balo du lịch';
		case 'TDC': return 'Túi đeo chéo';
		case 'TX': return 'Túi xách';
	}
}

window.onload = function() {
	
	if (window.localStorage.getItem ('signedinID')==null)
		getTopBar_NoMember();
	else
		getTopBar_IsMember();

	if (splitter[1]=="admin") {
		getAdminPage();
		return;
	}
	getLandingPage();
	getSearchBar();
	getCartBtnNum();
	getMenu();

	if (splitter[1]==null) {
		getCarousel();
		initCarousel();
		getFeaturedPage();
	}
	else if (splitter[1]=="register") {
		getRegisterPage();
	}
	else if (splitter[1]=="cart") {
		getCartView ();
	}
	else if (params[0].split("=")[0]=="order") {
		getOrderView ();
	}
	else if (splitter[1]=="contact") {
		getContactPage();
	}
	else {
		getProductWindow();
	}
	
	

	/*adminSelectView ();*/
}
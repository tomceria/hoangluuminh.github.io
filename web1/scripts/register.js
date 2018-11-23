// JavaScript Document
function registerCheck(){
	var check=1;
// username
	username=document.getElementById("username").value;
	if(username==""){
		document.getElementById("z-username").innerHTML='<span style="color:red;">Bạn chưa nhập tài khoản</span>';
		document.register.username.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-username").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.username.style.backgroundColor="#17EB50";
	}
// password
	//pasword
	password=document.getElementById("password").value;
	if(password==""){
		document.getElementById("z-password").innerHTML='<span style="color:red;">Bạn chưa nhập mật khẩu</span>';
		document.register.password.style.backgroundColor="red";
		check=0;
	}
	else if(password.length>=6 && password.length<=20)
	{
		document.getElementById("z-password").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.password.style.backgroundColor="#17EB50";
	}
	else{
		document.getElementById("z-password").innerHTML='<span style="color:red;">Kích thước mật khẩu bạn nhập không hợp lệ</span>';
		document.register.password.style.backgroundColor="red";
		check=0;
	}
	//repassword
	repassword=document.getElementById("repassword").value;
	if(repassword==""){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">Bạn chưa nhập mật khẩu lại</span>';
		document.register.repassword.style.backgroundColor="red";
		check=0;
	}
	else if(repassword.length<6 || repassword.length>20){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">Kích thước mật khẩu bạn nhập không hợp lệ</span>';
		document.register.repassword.style.backgroundColor="red";
		check=0;
	}
	else if(password!=repassword){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">Mật khẩu nhập lại khác với mật khẩu trên</span>';
		document.register.repassword.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-repassword").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.repassword.style.backgroundColor="#17EB50";
	}
// name
	  // fname
	fname=document.getElementById("fname").value;
	if(fname==""){
		document.getElementById("z-fname").innerHTML='<span style="color:red;">Bạn chưa nhập họ và tên lót/đệm</span>';
		document.register.fname.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-fname").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.fname.style.backgroundColor="#17EB50";
	}
	//lname
	lname=document.getElementById("lname").value;
	if(lname==""){
		document.getElementById("z-lname").innerHTML='<span style="color:red;">Bạn chưa nhập tên</span>';
		document.register.lname.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-lname").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.lname.style.backgroundColor="#17EB50";
	}
//email
	email=document.getElementById("email").value;
	var aCong=email.indexOf("@");
	var dauCham = email.lastIndexOf(".");
	if(email==""){
		document.getElementById("z-email").innerHTML='<span style="color:red;">Bạn chưa nhập email</span>';
		document.register.email.style.backgroundColor="red";
		check=0;
	}
	else if( (aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length) ){
		document.getElementById("z-email").innerHTML='<span style="color:red;">Bạn nhập email chưa hợp lý</span>';
		document.register.email.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-email").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.email.style.backgroundColor="#17EB50";
	}

	if(check==1){
		alert("Bạn đã đăng ký thành công");
		//
		var userID=0;
		while (true) {
			if (window.localStorage.getItem('user' + userID)==null)
				break;
			userID++;
		}
		window.localStorage.setItem ('user'+userID, username);
		window.localStorage.setItem ('user'+userID+'pw', password);
		//
		return true;
	}
	else{
		alert("Bạn đăng ký chưa thành công! Bạn cần phải sửa lại thông tin chưa chính xác.");
		return false;
	}
}
function fixusername(){	
	document.register.username.style.backgroundColor="white";
}
function fixpassword(){	
	document.register.password.style.backgroundColor="white";
}
function fixrepassword(){	
	document.register.repassword.style.backgroundColor="white";
}
function fixfname(){	
	document.register.fname.style.backgroundColor="white";
}
function fixlname(){	
	document.register.lname.style.backgroundColor="white";
}
function fixemail(){	
	document.register.email.style.backgroundColor="white";
}



// SIGN IN
function signinCheck () {
	username = document.signin.username.value;
	if (username=="") {
		alert ("Vui lòng điền tên đăng nhập");
		return false;
	}
	password = document.signin.password.value;
	if (password=="") {
		alert ("Vui lòng điền mật khẩu");
		return false;
	}

	var userID = 0;

	while (true) {
		if (window.localStorage.getItem('user' + userID) == username || window.localStorage.getItem('user' + userID)==null)
			break;
		userID++;
	}

	if (window.localStorage.getItem('user' + userID)==null) {
		alert ("Tài khoản không tồn tại");
		return false;
	}

	if (window.localStorage.getItem ('user'+userID+'pw') != password) {
		alert ("Vui lòng kiểm tra lại tài khoản và mật khẩu");
		return false;
	}

	window.localStorage.setItem ('signedinID', userID);
	window.location.href = window.location.href;
	return false;
}

function signout () {
	window.localStorage.removeItem ('signedinID');
	window.location.href = window.location.href;
}
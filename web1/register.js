function test(){
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
		document.register.username.style.backgroundColor="aqua";
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
		document.register.password.style.backgroundColor="aqua";
	}
	else{
		document.getElementById("z-password").innerHTML='<span style="color:red;">Bạn nhập mật khẩu sai độ dài</span>';
		document.register.password.style.backgroundColor="red";
		check=0;
	}
	//repassword
	repassword=document.getElementById("repassword").value;
	if(repassword==""){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">Bạn chưa nhập lại mật khẩu</span>';
		document.register.repassword.style.backgroundColor="red";
		check=0;
	}
	else if(repassword.length<6 || repassword.length>20){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">Bạn nhập mật khẩu sai độ dài</span>';
		document.register.repassword.style.backgroundColor="red";
		check=0;
	}
	else if(password!=repassword){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">Mật khẩu nhập lại bị sai</span>';
		document.register.repassword.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-repassword").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.repassword.style.backgroundColor="aqua";
	}
// name
	  // fname
	fname=document.getElementById("fname").value;
	if(fname==""){
		document.getElementById("z-fname").innerHTML='<span style="color:red;">Bạn chưa nhập họ và tên lót</span>';
		document.register.fname.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-fname").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.fname.style.backgroundColor="aqua";
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
		document.register.lname.style.backgroundColor="aqua";
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
		document.getElementById("z-email").innerHTML='<span style="color:red;">Bạn nhập email chưa chính xác</span>';
		document.register.email.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-email").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.email.style.backgroundColor="aqua";
	}
	
	if(check==1){
		alert("Bạn đã đăng ký thành công");
		return true;
	}
	else{
		alert("Bạn đã đãng ký quá cẩu thả");
		return false;
	}
}
function clickagian(tname){
	document.register.tname.style.backgroundColor="white";
}
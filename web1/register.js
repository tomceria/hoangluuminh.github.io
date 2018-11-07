// JavaScript Document
function formcheck(){
	var check=1;
// username
	username=document.getElementById("username").value;
	if(username==""){
		document.getElementById("z-username").innerHTML='<span style="color:red;">B?n chua nh?p t‡i kho?n</span>';
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
		document.getElementById("z-password").innerHTML='<span style="color:red;">B?n chua nh?p m?t kh?u</span>';
		document.register.password.style.backgroundColor="red";
		check=0;
	}
	else if(password.length>=6 && password.length<=20)
	{
		document.getElementById("z-password").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.password.style.backgroundColor="#17EB50";
	}
	else{
		document.getElementById("z-password").innerHTML='<span style="color:red;">KÌch thu?c m?t kh?u b?n nh?p khÙng h?p l?</span>';
		document.register.password.style.backgroundColor="red";
		check=0;
	}
	//repassword
	repassword=document.getElementById("repassword").value;
	if(repassword==""){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">B?n chua nh?p m?t kh?u l?i</span>';
		document.register.repassword.style.backgroundColor="red";
		check=0;
	}
	else if(repassword.length<6 || repassword.length>20){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">KÌch thu?c m?t kh?u b?n nh?p khÙng h?p l?</span>';
		document.register.repassword.style.backgroundColor="red";
		check=0;
	}
	else if(password!=repassword){
		document.getElementById("z-repassword").innerHTML='<span style="color:red;">M?t kh?u nh?p l?i kh·c v?i m?t kh?u trÍn</span>';
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
		document.getElementById("z-fname").innerHTML='<span style="color:red;">B?n chua nh?p h? v‡ tÍn lÛt/d?m</span>';
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
		document.getElementById("z-lname").innerHTML='<span style="color:red;">B?n chua nh?p tÍn</span>';
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
		document.getElementById("z-email").innerHTML='<span style="color:red;">B?n chua nh?p email</span>';
		document.register.email.style.backgroundColor="red";
		check=0;
	}
	else if( (aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length) ){
		document.getElementById("z-email").innerHTML='<span style="color:red;">B?n nh?p email chua h?p l˝</span>';
		document.register.email.style.backgroundColor="red";
		check=0;
	}
	else{
		document.getElementById("z-email").innerHTML='<span style="color:#17EB50;">OK!</span>';
		document.register.email.style.backgroundColor="#17EB50";
	}

	if(check==1){
		alert("B?n d„ dang k˝ th‡nh cÙng");
		return true;
	}
	else{
		alert("B?n dang k˝ chua th‡nh cÙng! B?n c?n ph?i s?a l?i thÙng tin chua chÌnh x·c.");
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
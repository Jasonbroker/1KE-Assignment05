    function addlevel (num) {
       var levelcontainer = document.getElementById("level");

		for (var i = 0; i < num; i++){
			document.write("<div class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-default\">"+(i+1)+"</button>");
		}

    }

var xmlHttp;
var passwordStr;

var validUsername = false;
var validPassword = false;
var validGender = true;
var validemail = false;
var validBeauty = false;
var validpolicy = false;
var validAge = true;

function createXMLHTTPRequest(){
	if(window.ActiveXObject){
		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	}else if(window.XMLHttpRequest){
		xmlHttp=new XMLHttpRequest();
	}
}

function updateProgress(){

}

function ajaxPOST(url, data, computedDOM){
	createXMLHTTPRequest();
	xmlHttp.open('POST',url,true);
	xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xmlHttp.send(data);
	var indicator = computedDOM.getElementsByClassName('indicator')[0];
	xmlHttp.onreadystatechange=function(){
		if((xmlHttp.readyState==4)&&(xmlHttp.status==200)){
			// 模拟服务器能返回正确的值
				// console.log(computedDOM.id);
			var propertyLength = computedDOM.id.length;
			var valueStr = data.substring(propertyLength+1);
			// console.log("rhwuihwiurwhu" + valueStr);
			switch (computedDOM.id){
				case 'username' :
				indicator.innerHTML= "恭喜" + valueStr + "未占用";
				validUsername = true;
				break;
				case 'email' :
				validemail = true;
				indicator.innerHTML= "恭喜email" + valueStr + "未注册";
				break
				case 'password' :
				indicator.innerHTML= "密码符合要求";
				// validPassword = true;
				break
				case 'doublepassword' :
				indicator.innerHTML= "密码相同";
				validPassword = true;
				break;
				default:
				break;
			}
			// console.log(data);
		}
	}
}
function checkInput(postUrl,sectionid){

	var show=document.getElementById(sectionid);
	var section = document.getElementById(sectionid);
	var indicator = section.getElementsByClassName('indicator')[0];
	var inputStr = section.getElementsByTagName('input')[0].value;
		switch (sectionid){
			case 'username':
				var result = checkUsername(inputStr);
				if (inputStr == "") {
					indicator.innerHTML = "请输入用户名";
					validUsername = false;
					return;
				};
				if (!result) {
					indicator.innerHTML = "用户名非法";
					validUsername = false;
					return;
				};
			break;
			case 'email':
			var result = checkEmail(inputStr);
			if (inputStr == "") {
					indicator.innerHTML = "请输入email";
		validemail = false;
					return;
				};
			if (!result) {
				indicator.innerHTML = "email格式错误";
				validemail = false;

					return;
				};
			break;
			case 'password' :
			var result = checkPassword(inputStr);
			console.log('check password 185'+inputStr);
			if (inputStr == "") {
					indicator.innerHTML = "请输入密码";
	validPassword = false;
					return;
				};
			if (!result) {
				indicator.innerHTML = "密码不合法，请重新输入";
	validPassword = false;

					return;
				};
				passwordStr = inputStr;
			break;

			case 'doublepassword' :
			var result = doubleCheckPassword(inputStr);
			if (inputStr == "") {
					indicator.innerHTML = "请再次输入密码";
	validPassword = false;
					return;
				};
			if (!result) {
				indicator.innerHTML = "密码不同，请重新输入";
validPassword = false;
					return;
				};
				// passwordStr = inputStr;
			break;
			default:
			break;
		}
	// console.log(section);
	// var indicator = section.getElementsByClassName('indicator')[0];
data = sectionid+"="+ inputStr;
	ajaxPOST(postUrl, data, section);

}

function checkUsername(str){

	var reg = /^[A-Za-z0-9]+$/; 
	var r = str.match(reg); 
	 return r != null;

}

function checkPassword(str){
	// 
	var reg = /^[A-Za-z0-9]+$/; 
	var r = str.match(reg); 
	 return r != null;
}

function doubleCheckPassword(passwordStrForCheck){

	return passwordStr == passwordStrForCheck;
}

function checkEmail(emailStr){
// ^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$
	var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/; 
	var r = emailStr.match(reg); 
	console.log("email verification with" +emailStr+ r);
	 return r != null;
}

function checkFocus(sectionid){

	console.log("checking focus on" + sectionid);
	var section = document.getElementById(sectionid);
	var indicator = section.getElementsByClassName('indicator')[0];
	var inputStr = section.getElementsByTagName('input')[0].value;
	console.log(inputStr);

		switch (sectionid){
			case 'username':
				var result = checkUsername(inputStr);
				if (inputStr == "") {
					indicator.innerHTML = "请输入用户名";
	
					return;
				};
				if (!result) {
					indicator.innerHTML = "用户名非法";
	
					return;
				};
			break;
			case 'email':
			var result = checkEmail(inputStr);
			if (inputStr == "") {
					indicator.innerHTML = "请输入email";
	
					return;
				};
			if (!result) {
				// indicator.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">Error:</span>Enter a valid email address</div>";
				indicator.innerHTML = "email格式错误";
					return;
				};
			break;
			case 'password' :
			var result = checkPassword(inputStr);
			console.log('check password 185'+inputStr);
			if (inputStr == "") {
				indicator.innerHTML = "请输入密码";

					return;
				};
			if (!result) {
				indicator.innerHTML = "密码不合法，请重新输入";
				indicator.setAttribute("class", "show");
					return;
				};
				passwordStr = inputStr;
			break;

			case 'doublepassword' :
			var result = doubleCheckPassword(inputStr);
			if (inputStr == "") {
					indicator.innerHTML = "请再次输入密码";
	
					return;
				};
			if (!result) {
				indicator.innerHTML = "密码不同，请重新输入";

					return;
				};
				// passwordStr = inputStr;
			break;


			default:
			break;
		}
}

function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}

function checkBeauty(level){

	var section = document.getElementById("beauty");
	var indicator = section.getElementsByClassName('indicator')[0];

	var	lastButton = document.getElementsByClassName('active')[0];
	// if (!level.hasClass(level, "active"))
	if (lastButton == null) {
		level.className += " " + "active";
		var beauty = beautyAlert(level);
		if (beauty) {indicator.innerHTML = "美女欢迎你！"
		}else{
			indicator.innerHTML = "请按ctrl+w 有惊喜";
		}
		return;
	};

	console.log(lastButton.innerHTML);
	if (lastButton.innerHTML != level.innerHTML) {
		lastButton.className = lastButton.className.replace('active', '');
		level.className += " " + "active";
		console.log('addddd active');
		var beauty = beautyAlert(level);
		if (beauty) {indicator.innerHTML = "😍美女欢迎你！"}else{
			indicator.innerHTML = "请按ctrl+w 有惊喜";
		};
	};
	 // console.log(lastSelectedButton);
	 return level
}

function beautyAlert(level){
	var levelNum = level.innerHTML;
	if (levelNum < 8) {
		alert("对不起，您的颜值过低，请勿注册本网站！");
		validBeauty = false;
		return false;
	};
	validBeauty = true;
	return true;
}

function checkAge(ageBtn){
var section = document.getElementById("age");
var indicator = section.getElementsByClassName('indicator')[0];
	var agev = ageBtn.value;
	if (agev > 30) {
		indicator.innerHTML = "阿姨您好！";
	};

	if (agev< 10) {
		indicator.innerHTML = "小朋友！";
	};

}

function checkGender(radio){

	var section = document.getElementById("gender");
	var indicator = section.getElementsByClassName('indicator')[0];
	var isMM = radio.value == "MM";
		console.log('check');
	if (isMM) {
		indicator.innerHTML = "欢迎美女么么哒😘";
		validGender = true;
	}else{
		indicator.innerHTML = "这里都是美女注册，GG别来了";
		validGender = false;
	}
	return isMM;
}

function checkPolicy(policy){

	var policySection = document.getElementById(policy);
	var indicator = policySection.getElementsByClassName("indicator")[0];
	// var check=document.getElementById('checkBox');
	var check=policySection.getElementsByTagName('input')[0];

	console.log(check);
	if (check.checked) {
		validpolicy = true;
		indicator.innerHTML = "";
	}else{
		console.log('meitongyi');
		validpolicy = false;
		indicator.innerHTML = "赶紧同意";
	}
}


function checkRegister(submit){
	if (!validGender || !validBeauty) {

		alert("只允许美女注册");
	};


	if (validUsername && validemail && validpolicy && validPassword &&validGender && validBeauty &&validAge) {
		alert('恭喜注册成功！')
	}else{
		alert('请完善表单');
	}

}








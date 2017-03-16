(function(){
	var username = document.getElementsByName("username")[0];
	var password = document.getElementsByName("password")[0];
	var vcode=document.getElementsByName("vcode")[0];
	var btn=document.getElementById("btn");
 

	btn.addEventListener("touchstart",function(e){
		if(!user() || !psw()){
			e.preventDefault();
			 
		}
	});
	username.addEventListener("change",function(){
		hasValue();
	});
	password.addEventListener("change",function(){
		hasValue();
	});
	vcode.addEventListener("change",function(){
		hasValue();
	});
	// 判断用户名和密码验证码是否有字符，添加class "active"
	function hasValue(){
		if(username.value.trim() && password.value.trim() && vcode.value.trim()){
			btn.classList.add("active");
		}
	}
	//用户名验证
	function user(){
		var val = username.value;
		//邮箱正则表达式
		var reg = /^[\w]+@.+\.[a-zA-Z]+/;
		//手机正则表达式
		var regPhone=/1[3-9]{10}/;
 
		if(reg.test(val)||regPhone.test(val)){
		 
			return true;
		}
		return false;
	 
	}
	function psw(){
		var val = password.value;
		//密码正则表达式
		var reg = /^[\w_\-@\#\$]{8,16}/
		if(reg.test(val)){
			alert(true);
			return true;	
		}
		return false; 
	}
}());
//控制password 显示隐藏
(function(){
	var password=document.getElementsByName("password")[0];
	var psw_ctrl=document.getElementsByClassName("psw-ctrl")[0];
	var span = psw_ctrl.getElementsByTagName("span")[0];
	var off=false;

	psw_ctrl.addEventListener("touchstart",function(){

		off=off?false:true;
		console.log(off);
		psw_ctrl.classList.toggle("active");
		if(!off){
			password.setAttribute("type","text");
		}
		else{
			password.setAttribute("type","password");
		}
	});
}());
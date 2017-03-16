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
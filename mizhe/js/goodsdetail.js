//点击每一个a,a都会改变背景等样式
(function(){
	var a_container=document.querySelector(".choosesize");
	var as=a_container.querySelectorAll("a");
	for (var i = 0; i < as.length; i++) {
		as[i].index = i;
		as[i].addEventListener("touchstart",function(){
			for (var i = 0; i < as.length; i++) {
				as[i].classList.remove("active");
			}
			as[this.index].classList.add("active");
		});
	}
}());
//数量加减
(function(){
	var minus=document.querySelector(".minus");
	var plus = document.querySelector(".plus");
	var num=document.querySelector(".num");
	minus.addEventListener("touchstart",function(){
		nums= parseInt(num.innerHTML);
		if(nums>0){
			nums--;
			num.innerHTML=nums;
		}
		
	});
	plus.addEventListener("touchstart",function(){
		nums= parseInt(num.innerHTML);
		if(nums>=0){
			nums++;
			num.innerHTML=nums;
		}	
	});
}());
//请选择尺码弹出框
(function(){
	var select=document.querySelector(".select");
	var popup= document.querySelector(".popup");
	var btn=document.querySelector("#rep-btn");
	var body=document.querySelector("body");
	var close=document.querySelector(".close");
	select.addEventListener("touchstart",function(){
		body.classList.add("overflow");
		popup.style.display="block";
	});
	close.addEventListener("touchstart",function(){
		body.classList.remove("overflow");
		popup.style.display="none";
	});
	btn.addEventListener("touchstart",function(){
		body.classList.remove("overflow");
		popup.style.display="none";
	});
}());


//星星：海深
/*(function(){
	var list= document.querySelector(".ass-ul");
	var lis = list.querySelectorAll("li");
	var first=false;	
	// console.log(aa[0]);
	var num=0;

	for(var x = 0 ;x<lis.length;x++){
		lis[x].index=x;
		lis[x].onclick=function(){
			//自定义的变量、用来接收index，去判断是第几个星星；
			num=(this.index);
			var aa;
			for(var i=0;i<lis.length;i++){
				aa=lis[i].children;
				aa[0].classList.remove("changeStar");
				// console.log(aa[0]);
			}

			for(y=0;y<=num;y++){
				aa=lis[y].children;
				aa[0].classList.toggle("changeStar");
			}

		}
	}
}())*/


//点击价格显示从低到高，从高到低按钮
(function(){
	$(".price").on("touchstart",function(){
		$(".price-layer").toggle();
	});

	$(".to-top").on("touchstart",function(){
		 $('body,html').animate({ scrollTop: 0 }, 500); 
	})

}());


//取消搜索栏内容
(function(){
	$(".delete-search").on("touchstart",function(){
		$(".search-input").val('');
	})
}());





//弹出框的显示隐藏
 (function (){
 	var select = $(".select");
	var aside = $(".side");
	var body = $("body");
	var btn = $(".foot_btn");

	//点击筛选按钮，弹出div(side)
	select.on("touchstart",function(){
		aside.css({
			left : 0
		});
		body.toggleClass("overflow");
	});

	//隐藏side
	 function sideHidden(){
	 	body.toggleClass("overflow");
	 	aside.css({
	 		left:"100%"
	 	});
	 }
	var curX;
	var tarX;
	var sidew = $(".side").width();
	var smain = $(".side-main").width();
	var figure = sidew - smain;
	aside.on("touchstart",function(e){
		//获取第一个手指的事件对象changeTouches[0];
		//获取第一个手指的X轴坐标
		curX=e.changedTouches[0].pageX;
 		aside.on("touchmove",function(){
 			tarX=e.changedTouches[0].pageX;
 			//手指移动超过一定范围(假设是30)
 			if(tarX - curX > 30){
 				sideHidden();
 			}
 		});
 		//点击半透明区域筛选层消失
 		if(figure>curX){
 			sideHidden();
 		}
	})

 }());

//筛选弹出框里面的显示隐藏
(function(){
	var titles= document.querySelectorAll(".hide");
	var ctrls=document.querySelectorAll(".ctrl");
	var contents=document.querySelectorAll(".con");
	var toggle=false;
 	for (var i = 0; i < titles.length; i++) {

 		ctrls[i].index=i;
 		ctrls[i].addEventListener("touchstart",function(){
 				if(!toggle){
 		ctrls[this.index].classList.add("show");
 			contents[this.index].style.display="block";
 			toggle=true;
 			}
 			else{
			ctrls[this.index].classList.remove("show");
 			contents[this.index].style.display="none";
 			toggle=false;
 		}
 		});
 	}
 
}());
//点击弹出框里的a,a会改变背景等样式
(function(){
	function changea(container){
		var a_container=document.querySelector(container);
		var as=a_container.querySelectorAll("a");
		for (var i = 0; i < as.length; i++) {
			as[i].index = i;
			as[i].addEventListener("touchstart",function(){
				for (var i = 0; i < as.length; i++) {
					as[i].classList.remove("active")
					}
			as[this.index].classList.add("active");
			});
		}
	}
	changea(".brand-con");
	changea(".sort ");
	changea(".product-type-con");
	changea(".location-con");
	changea(".time-con");
}());

//写入地址
(function(){
	var form=document.getElementById("form1");
	var address=document.getElementsByClassName("address")[0];
	var add=document.getElementsByName("add");
	var btn=document.getElementById("add-btn");

	btn.addEventListener("touchstart",function(){
		for (var i = 0; i < add.length; i++) {
			if(add[i].checked){
				address.innerHTML=add[i].value;
			}
		}
	});
}());
//点击确定变颜色
(function(){
	var btn = document.querySelector(".foot_btn");
	btn.addEventListener("touchstart",function(){
		btn.classList.add("on");
	});
}());
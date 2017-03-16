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


/* 商品列表的无限加载 */
var overflow=false;
(function(){

	var content = $(".content");
	var winh = $(window).height();
	var ul = $("#goods-ul");

	/*
	 * describe: 创建加载的文档碎片，并且插入到content
	 * arguments : content , 要插入到的容器
	 * return ：返回插入的div jq对象
	*/

	function appendLoading(content){
		var html = "";
		var wrap;

		html += '<div class="load">';
		html += '<img src="../img/pic_loading.gif">';
		html += '<span>正在加载</span>';
		html += '</div>';
		
		wrap = $(html)

		$(content).append(wrap);

		return wrap;
	}

	var loading = appendLoading(content)[0];
	var loadTop = 0;
	var isFinish = false;

	$(window).on("scroll",function(){

		//获取新添加的div到屏幕顶部的高度
		loadTop = loading.getBoundingClientRect().top;
		if(loadTop < winh && !isFinish){
			ajaxLoad();
			isFinish = true;
		}
	})
	
	function ajaxLoad(){

		$.ajax({
		  type: "GET",
		  url: "../js/goodslist2.json",
		  //data: { name: "John", location: "Boston"}
		}).done(function( obj ) {
		  
			var html = "";

			for(var key in obj){
				html+='<li class="padd clearfix"><div class="goods-left fl"><a href="#"><img src=" '+obj[key]["img"]+'"></a></div>';
				html+='<div class="goods-right fr"><p>'+obj[key]["describe"]+'</p>';
				html+= '<p class="goods-thirdp"><a href="#">包邮</a></p>';
				html+='<div class="goods-div"><p class="goods-fourthp fl"><span>￥'+obj[key]["price"]+'</span>';
				html+='<s>￥' +obj[key]["s"]+'</s></p>';
				html+='<p class="goods-fifthp fr"><span><em>'+obj[key]["em"]+"</em>人付款</span></p>";

				html+="</div></div></li>";   
				
			}           

			// setTimeout为了测试作用，真正开发不需要
			setTimeout(function(){
				ul.append(html)
				isFinish = false;
			},500);
		});
	}
	
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
	changea(".peplum-con");
	changea(".style-con");
	changea(".time-con");
}());

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
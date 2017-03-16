 


//返回前缀
var prefix = function(){
    var div = document.createElement('div');
    var cssText = '-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
    div.style.cssText = cssText;
    var style = div.style;
    if (style.webkitTransition) {
        return 'webkit';
    }
    if (style.MozTransition) {
        return 'moz';
    }
    if (style.oTransition) {
        return 'o';
    }
    if (style.msTransition) {
        return 'ms';
    }
    return '';
}();

 /*滚动条移动到内容高度时，内容从旁边开始移动*/
//getBoundingClientRect div等元素到浏览器窗口顶部的距离
 var winH = document.body.clientHeight;
 var left = document.querySelectorAll(".move_left");
 var right = document.querySelectorAll(".move_right");
 var tops= document.querySelectorAll(".move_top");
 var down = document.querySelectorAll(".move_down");
 var time = 0;
 // var Wtop;

 function move(){
 	for(var i =0; i<left.length;i++){
 		var top = left[i].getBoundingClientRect().top;
 		if( 0 < top && top <winH){
 			left[i].style.animationDelay = time +"s";
 			left[i].classList.add("lefteffect");
 			time +=0.2;
 		}
 		else{time=0;}
 	}
 	for(var i=0;i<right.length;i++){
 		var top = right[i].getBoundingClientRect().top;
 		if( 0 < top && top < winH){
 			right[i].style.animationDelay = time +"s";
 			right[i].classList.add("righteffect");
 			time +=0.2;
 		}
 		else{time=0;}
 	}
 	for(var i=0;i<down.length;i++){
 		var top = down[i].getBoundingClientRect().top;
 		if( 0 < top && top < winH){
 			down[i].style.animationDelay = time +"s";
 			down[i].classList.add("downeffect");
 			time +=0.2;
 		}
 		else{time=0;}
 	}
 	for(var i=0;i<tops.length;i++){
 		var top=tops[i]. getBoundingClientRect().top;
 		if( 0 < top && top < winH){
 			tops[i].style.animationDelay = time +"s";
 			tops[i].classList.add("topeffect");
 			time +=0.2;
 		}
 		else{time=0;}
 	}
 }
 window.onload=function(){
 	move();
 }
 window.onscroll = function(){
 	move();
 }

 /*banner广告条图片轮播*/

 var bn_last = document.getElementById("bn_last");
 var bn_next= document.getElementById("bn_next");
 var banner_ul = document.getElementById("banner_ul");
 var lis = banner_ul.getElementsByTagName("li");
 var li_w= lis[0].offsetWidth;
 var li_left=lis[0].offsetLeft;
 var index =0;
 var stop=null;
 		bn_next.onclick=function(aa){
 			sister(true);
 		}

 		bn_last.onclick=function(aa){
 			sister(false);
 		}

 		// bn_next.onmouseover=function(){
 		// 	clearInterval(stop);
 		// }

 		// 	clearInterval(stop);
 		// banner_ul.onmouseleave=function(){
 		// 	stop = setInterval(function(){
 		// 	sister(false);
 		// },1000)
 		// }

 		// stop = setInterval(function(){
 		// 	sister(false);
 		// },1000)

 		function sister(aa) {
 			if(aa){
 				index++;
 			}else{
 				index--;
 				// console.log(index);
 			}

 			if(index > 0){
 				index=-2;
 			}else if(index <-2){
 				index=0;
 			}

 			banner_ul.setAttribute("style","left:" +index*li_w +"px");
 		}






(function(){

	roll(".trait_function",".trait_last",".trait_next"); 
	 roll(".secli_wrap","#prev_day17","#next_day17");
	roll(".tec3_center",".tec_last",".tec_next");
	roll(".exp_content",".exp_last",".exp_next");
	function roll(wrap,btnl,btnr){
		var wrapp = document.querySelector(wrap);
		var ul = wrapp.querySelector("ul");
		var ali = ul.querySelectorAll("li");
		var aliw=ali[0].offsetWidth;
		//因为大ul里面包含了<ol></ol>和一些<li></li>,不能直接查找ul里的li标签名，原有方法是找到所有的li,用父元素的子集来获取可避免该问题，不用更改结构
		var len =ul.children.length;
		var left = document.querySelector(btnl);
		var right = document.querySelector(btnr);
		var index = 0;
		var finish = false;
		var trans= prefix +" TransitionEnd";
		var timer = null;

		//设置ul的宽度
		ul.style.width = len*aliw +"px";
		
		/*测试*/
		/*right.onmouseover = function(){
			alert("right");
		}
		left.onmouseover = function(){
			alert("left");
		}*/


		/*下一张图片事件*/
		right.addEventListener("click",function(){
			next();
		});
		function next(){
			 /*if(!finish){
			 	finish=true;*/
				index++;
				if(index>=len){
					index=0;
			}	

			ul.style.transform= "translateX(-"+(aliw *index) + "px)";
			ul.addEventListener(trans,function(){
			finish = false;
		})		
	 /*  }*/
	}

	left.addEventListener("click",function(){
		last();
	});
	function last(){
			/* if(!finish){
			 finish =true;*/
			index--;
			if(index<0){
				index=len-1;
			}
			console.log(aliw*index,index,len);
			ul.style.transform="translateX(-" +(aliw*index) +"px";
			ul.addEventListener(trans,function(){
				finish=false;
			});
		 /*}*/
		}
	function run(){
		timer = setTimeout(function(){
			next();
			run();
		},2000);
	}
	run();
	wrapp.addEventListener("mouseover",function(){
		clearTimeout(timer);
	});
	wrapp.addEventListener("mouseout",function(){
		run();
	})
	}
}())



//动力引擎不能实现时，小生单独写的方法
/*function moves(){
		var oDiv = document.getElementsByClassName("secli_wrap")[0];
		var oPrev = document.getElementsByClassName("power3_ctrllast")[0];
		var oNext = document.getElementsByClassName("power3_ctrlnext")[0];
		var oPrev = document.getElementById("prev_day17");
		var oNext = document.getElementById("next_day17");
		var oUl = oDiv.getElementsByTagName("ul")[0];
		var aLi = oUl.getElementsByTagName("li");
		var len = aLi.length;
		var ali_w = aLi[0].offsetWidth;
		var iNow = 0;
		var timer = null;
		var Toggle = true;
		oDiv.onmouseover = function(){
			Toggle = false;
			clearInterval(timer)
		}
		oDiv.onmouseout = function(){
			Toggle = true;
			clearInterval(timer)
			timer = setInterval(run, 1000);
		}
		oNext.onclick = function(){

			iNow++;
			run();
		}
		oPrev.onclick = function(){
			iNow--;
			run();
		}
		clearInterval(timer);
			timer = setInterval(run, 1000);
			function run(){
				if(Toggle){
				iNow--;
				}
				if(iNow>0){
					iNow=-(len-1);
				}else if(iNow<-(len-1)){
					iNow= 0;
				}
				oUl.style.transform="translateX(" +(ali_w*iNow) +"px";
			}
		run()
		}
		moves();*/
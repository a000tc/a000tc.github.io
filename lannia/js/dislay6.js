//dislay6全部js
function all(){
	// 菜单切换
	qq();

	// 图片切换
	aa();
	
	// 迷笛X蓝鸟之夜
	bb();
	
	//点击人物对象
	qu(".lichen");
	qu(".zhengkai");
	qu(".chenjianzhou");
	// atlas();
	video();
	wrapConcent5();
}


// 点击切换图片功能
function aa(){
	var navClink = document.querySelector(".navClink");
	var btns = navClink.querySelectorAll("li");		
	var showClink = document.querySelector(".showClink");
	var showPics = showClink.querySelectorAll("img");	
	var dot = document.querySelector(".dot");
	var shDot = dot.querySelectorAll("span");

	for(var i = 0; i < btns.length; i++){
		btns[i].index = i+1;			
		btns[i].onclick = function(){			
			for(var j = 0; j < btns.length; j++){			
				btns[j].className = "small" + (j+1);
				showPics[j].className = "";
				shDot[j].className = "";
			}			
			btns[this.index-1].className = "small" + this.index + " big" + this.index;
			showPics[this.index-1].className = "upslope";
			shDot[this.index-1].className = "showDot";
		}
	}
	for(var i = 0; i < shDot.length; i++){
		shDot[i].index = i+1;			
		shDot[i].onclick = function(){			
			for(var j = 0; j < shDot.length; j++){		
				btns[j].className = "small" + (j+1);
				showPics[j].className = "";
				shDot[j].className = "";
			}			
			btns[this.index-1].className = "small" + this.index + " big" + this.index;
			showPics[this.index-1].className = "upslope";
			shDot[this.index-1].className = "showDot";
		}
	}
};




// 菜单切换
function qq(){
	var nav = document.getElementsByClassName("navul")[0];
	var btns = nav.getElementsByTagName("li");
	var display6 = document.getElementsByClassName("display6")[0];
	var shows = display6.getElementsByClassName("navul_show");
	for(var i = 0; i < btns.length; i++){
		btns[i].index = i+1;
		btns[i].onclick = function(){
			for(var j = 0; j < btns.length; j++){
				btns[j].className = "black" + (j+1);
				shows[j].classList.remove("navConcent_show");
			}
			btns[this.index-1].className = "black" + this.index + " bluebg" + this.index;
			shows[this.index-1].classList.add("navConcent_show");
		}
	}
}



//迷笛X蓝鸟之夜
function bb(){
	var navConcent3 = document.querySelector(".navConcent3");
	var btn = navConcent3.querySelector("img");
	var showact = document.querySelector(".showact");
	var btnshowact = document.querySelector(".btnshowact");	
	btn.onclick = function(){
		showact.style.display = "block";
	}
	btnshowact.onclick = function(){
		showact.style.display = "none";
	}
}

//点击人物显示块执行
function qu(name){
	var lc = document.querySelector(name);
	var wrapLc = document.querySelector(".wrapLc");
	var closeLc = document.querySelector(".closeLc"); 
	lc.onclick = function(){
		wrapLc.style.display = "block";
		cc();
	}
	closeLc.onclick = function(){
		wrapLc.style.display = "none";
	}
}


//潮牌合作相同轮播
function cc(){
	var showLc = document.querySelector(".showLc");
	var ul = showLc.querySelector(".imgLc");
	var lis = ul.querySelectorAll("li");
	var liw = lis[0].offsetWidth;
	var ulw = liw * lis.length;
 
	var btnL = document.querySelector(".leftLc");
    var btnR = document.querySelector(".ringhtLc");
    var transitionend = prefix + "TransitionEnd";
    var off = false;
    var index = 0;
    var len = lis.length;
    var timer;

	ul.style.width = ulw + "px";

	// 下一张
	btnR.onclick = function(){
		next();
	}

	//上一张
	btnL.onclick = function(){
		prev();
	}

	//自动执行
	function am(){
		timer = setTimeout(function(){
			next();
			am();
		},2000);
	}
	am();

	//鼠标上
	showLc.addEventListener("mouseover",function(){
		clearTimeout(timer);
	});

	//鼠标移出
	showLc.addEventListener("mouseout",function(){
		am();
	});
	
	function next(){
		if(!off){
			off = true;
			index++;
			if(index == len){
				index = 0;
			}
			ul.style.transform = "translateX(-" + (liw * index) + "px";
			ul.addEventListener("transitionend",function(){
				off = false;
			});
		}
	}
	
	function prev(){
		if(!off){
			off = true;
			index --;
			if(index < 0){
				index = len - 1;
			}
			ul.style.transform = "translateX(-" + (liw * index) + "px";
			ul.addEventListener("transitionend",function(){
				off = false;
			});
		}
	}
}	


//返回前缀transition
var prefix = function(){
	var div = document.createElement("div");
	var cssText = '-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
	div.style.cssText = cssText;
	var style = div.style;
	if(style.webkitTransition){
		return "webkit";
	}
	if(style.MozTransition){
		return "moz";
	}
	if(style.oTransition){
		return "o";
	}
	if(style.msTransition){
		return "ms";
	}
	return " ";
}();


//澎湃图集显示关闭
// function atlas(){
// 	var btn = document.querySelector(".atlas"); 
// 	var show = document.querySelector(".wrapAtlas");
// 	var close = document.querySelector(".closeAtlas");

// 	btn.onclick = function(){
// 		show.style.display = "block";
// 		atlasSilde();
// 	}

// 	close.onclick = function(){
// 		show.style.display = "none";
// 	}
// }

//澎湃图集轮播
function atlasSilde(){
	var Dul = document.querySelector(".imgAtlas1");
	var Dlis = Dul.querySelectorAll("li");
	var DbtnL = document.querySelector(".atlas1L");
	var DbtnR = document.querySelector(".atlas1R");
	var Dliw = getStyle(Dlis[0],"width");
	var Dulw = Dliw * Dlis.length; 
	var transitionend = prefix + "TransitionEnd";

	var xul	= document.querySelector(".imgAtlas2");
	var xlis = xul.querySelectorAll("li");
	var xbtnL = document.querySelector(".atlas2L");
	var xbtnR = document.querySelector(".atlas2R");
	var xliw = getStyle(xlis[0],"width");
	var xulw = xliw * xlis.length;

	var index = 0;
	var off = false;
	
	Dul.style.width = Dulw + "px";
	xul.style.width = xulw + "px";	
	
	//大图下一张
	DbtnR.onclick = function(){
		
		if(!off){
			off =true;
			index++;
			if(index == Dlis.length){
				index = 0;
			}
			Dul.style.transform = "translateX(-" + (Dliw * index) + "px)";
			for(var i = 0; i < xlis.length; i++){
				xlis[i].className = "";
			}
			xlis[index].className = "bgblue";
			Dul.addEventListener("transitionend",function(){
				off = false;
			});
		
			if(index > 2){				
				xul.style.transform = "translateX(-" + (xliw * (index-2)) + "px";
			}
			if(index == 0){
				xul.style.transform = "translateX(-" + 0 + "px";
			}
		}
	}

	//大图上一张
	DbtnL.onclick = function(){
		if(!off){
			off = true;
			index--;
			if(index < 0){
				index = Dlis.length-1;
			}
			Dul.style.transform = "translateX(-" + (Dliw * index) + "px)";
			for(var i = 0; i < xlis.length; i++){
				xlis[i].className = "";
			}
			xlis[index].className = "bgblue";
			Dul.addEventListener("transitionend",function(){
				off = false;
			});

			if(index > 2){				
				xul.style.transform = "translateX(-" + (xliw * (index-2)) + "px";
			}
			if(index == 0){
				xul.style.transform = "translateX(-" + 0 + "px";
			}
		}
	}

	//小图下一张
	xbtnR.onclick = function(){
		if(!off){
			off =true;
			index++;
			if(index == xlis.length){
				index = 0;
			}
			Dul.style.transform = "translateX(-" + (Dliw * index) + "px)";
			for(var i = 0; i < xlis.length; i++){
				xlis[i].className = "";
			}
			xlis[index].className = "bgblue";
			Dul.addEventListener("transitionend",function(){
				off = false;
			});

			if(index > 2){				
				xul.style.transform = "translateX(-" + (xliw * (index-2)) + "px";
			}
			if(index == 0){
				xul.style.transform = "translateX(-" + 0 + "px";
			}
		}
	}

	//小图上一张
	xbtnL.onclick = function(){
		if(!off){
			off = true;
			index--;
			if(index < 0){
				index = xlis.length-1;
			}
			Dul.style.transform = "translateX(-" + (Dliw * index) + "px)";
			for(var i = 0; i < xlis.length; i++){
				xlis[i].className = "";
			}
			xlis[index].className = "bgblue";
			Dul.addEventListener("transitionend",function(){
				off = false;
			});

			if(index > 2){				
				xul.style.transform = "translateX(-" + (xliw * (index-2)) + "px";
			}
			if(index == 0){
				xul.style.transform = "translateX(-" + 0 + "px";
			}
		}
	}

}



function video(){
	var btn = document.querySelector(".video"); 
	var show = document.querySelector(".wrapVideo");
	var close = document.querySelector(".closeVideo");

	btn.onclick = function(){
		show.style.display = "block";
		// videoSilde();
	}

	close.onclick = function(){
		show.style.display = "none";
	}
}


function getStyle(obj,attr){
	return parseInt(obj.currentStyle && obj.currentStyle[attr] || getComputedStyle(obj,false)[attr]);
}

function wrapConcent5(){
	var Dul = document.querySelector(".imgAtlas1");
	var Dlis = Dul.querySelectorAll("li");
	var DbtnL = document.querySelector(".atlas1L");
	var DbtnR = document.querySelector(".atlas1R");
	var Dliw = getStyle(Dlis[0],"width");
	var Dulw = Dliw * Dlis.length; 
	var transitionend = prefix + "TransitionEnd";

	var xul	= document.querySelector(".imgAtlas2");
	var xlis = xul.querySelectorAll("li");
	var xbtnL = document.querySelector(".atlas2L");
	var xbtnR = document.querySelector(".atlas2R");
	var xliw = getStyle(xlis[0],"width");
	var xulw = xliw * xlis.length;

	var index = 0;
	var off = false;

	Dul.style.width = Dulw + "px";
	xul.style.width = xulw + "px";	
	
	//大图下一张
	DbtnR.onclick = function(){
		
		if(!off){
			off =true;
			index++;
			if(index == Dlis.length){
				index = 0;
			}
			Dul.style.transform = "translateX(-" + (Dliw * index) + "px)";
			for(var i = 0; i < xlis.length; i++){
				xlis[i].className = "";
			}
			xlis[index].className = "bgblue";
			Dul.addEventListener("transitionend",function(){
				off = false;
			});
		
			if(index > 2){				
				xul.style.transform = "translateX(-" + (xliw * (index-2)) + "px";
			}
			if(index == 0){
				xul.style.transform = "translateX(-" + 0 + "px";
			}
		}
	}

	//大图上一张
	DbtnL.onclick = function(){
		if(!off){
			off = true;
			index--;
			if(index < 0){
				index = Dlis.length-1;
			}
			Dul.style.transform = "translateX(-" + (Dliw * index) + "px)";
			for(var i = 0; i < xlis.length; i++){
				xlis[i].className = "";
			}
			xlis[index].className = "bgblue";
			Dul.addEventListener("transitionend",function(){
				off = false;
			});

			if(index > 2){				
				xul.style.transform = "translateX(-" + (xliw * (index-2)) + "px";
			}
			if(index == 0){
				xul.style.transform = "translateX(-" + 0 + "px";
			}
		}
	}

	//小图下一张
	xbtnR.onclick = function(){
		if(!off){
			off =true;
			index++;
			if(index == xlis.length){
				index = 0;
			}
			Dul.style.transform = "translateX(-" + (Dliw * index) + "px)";
			for(var i = 0; i < xlis.length; i++){
				xlis[i].className = "";
			}
			xlis[index].className = "bgblue";
			Dul.addEventListener("transitionend",function(){
				off = false;
			});

			if(index > 2){				
				xul.style.transform = "translateX(-" + (xliw * (index-2)) + "px";
			}
			if(index == 0){
				xul.style.transform = "translateX(-" + 0 + "px";
			}
		}
	}

	//小图上一张
	xbtnL.onclick = function(){
		if(!off){
			off = true;
			index--;
			if(index < 0){
				index = xlis.length-1;
			}
			Dul.style.transform = "translateX(-" + (Dliw * index) + "px)";
			for(var i = 0; i < xlis.length; i++){
				xlis[i].className = "";
			}
			xlis[index].className = "bgblue";
			Dul.addEventListener("transitionend",function(){
				off = false;
			});

			if(index > 2){				
				xul.style.transform = "translateX(-" + (xliw * (index-2)) + "px";
			}
			if(index == 0){
				xul.style.transform = "translateX(-" + 0 + "px";
			}
		}
	}


}

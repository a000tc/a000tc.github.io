
//取消双击文本时变成蓝色即禁止选择
var body=document.getElementsByTagName("body")[0];
body.onselectstart = function(){return false;};


// 汽车用品分类点击出现信息
/*var nav_ul=document.getElementById("nav_ul");
var btns0=nav_ul.getElementsByTagName("li");
var nav_info=document.getElementById("nav_info");
var lis0 = nav_info.children;
var btn0_last = btns0[0];
var li0_last = lis0[0];


for(var i =0;i<btns0.length;i++){
	btns0[i].index=i;
	btns0[i].onclick = function(){ 
 
		btn0_last.className = "";
		li1_last.className = "";

		this.className = "active";
		lis0[this.index].className ="show";
		btn0_last = this;
		li0_last = lis0[this.index];






	 }
}*/
function showHidden(){

	var oDiv = document.getElementById("menu_info");
	var oUl = document.getElementById("nav_ul");
	var aBtn = oUl.getElementsByTagName("li");
	var aContent = oDiv.getElementsByTagName("div");
	var oBody = document.getElementsByTagName("body")[0];

	for(var i = 1; i<aBtn.length; i++){
		aBtn[i].index = i-1;
		aBtn[i].onclick = function(ev){
			var event = window.ev || ev;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
			for(var i = 1; i<aContent.length; i++){
				aContent[i].style.display = "none";
			}
			aContent[this.index].style.display = "block";
		}
	}
	for(var i = 0; i<aContent.length; i++){
			aContent[i].onclick = function(ev){
				var event = window.ev || ev;
				if(event.stopPropagation){
					event.stopPropagation();
				}else{
					event.cancelBubble = true;
				}
			}
		}
	oBody.onclick = function(){
		for(var i = 0; i<aContent.length; i++){
			aContent[i].style.display = "none";
		}
	}
}
showHidden()
/*鼠标经过汽车用品分类时显示其具体商品*/ 
var menu_left = document.getElementById("menu_left");
var menus = menu_left.getElementsByTagName("li");
var menu_info=document.getElementById("menu_info");
var infos=menu_info.getElementsByTagName("ul");
var trigons = menu_left.getElementsByClassName("trigon");

for(var i =0; i<infos.length;i++){
	menus[i].index=i;

	menus[i].onmouseover = function(){
		
		for(var j=0;j<infos.length;j++){
			infos[this.index].style.display="none"; 
		}
		infos[this.index].style.display="block"; 
		infos[this.index].style.zIndex=999;
		menus[this.index].style.background="#255b99";
		trigons[this.index].style.display="block";
		trigons[this.index].style.zIndex=1000;
	}
	menus[i].onmouseout= function(){
		infos[this.index].style.display="none"; 
		trigons[this.index].style.display="none";
		menus[this.index].style.background="#2f76c6";
	}
}

// 鼠标经过汽车用品等选项卡时，出现其具体信息
var btn = document.getElementById("btn");
var btns = btn.getElementsByTagName("button");

var ul = document.getElementById("mycar_ul");
var lis = ul.getElementsByTagName("li");

var btn_last = btns[0];
var li_last = lis[0];

for(var i = 0; i < btns.length; i++){
	btns[i].index = i;

	btns[i].onclick = function(){

		btn_last.className = "";
		li_last.className = "";

		this.className = "active";
		lis[this.index].className = "active";

		btn_last = this;
		li_last = lis[this.index];

	}
}

 
/*维修保养选项卡*/
var btn_wrap=document.getElementById("repair_btns");
var btns1=btn_wrap.getElementsByTagName("button");
var repair_ul=document.getElementById("repair_ul");
var lis1 = repair_ul.children;
var btn1_last = btns1[0];
var li1_last = lis1[0];


for(var i =0;i<btns1.length;i++){
	btns1[i].index=i;
	btns1[i].onclick = function(){ 
 
		btn1_last.className = "";
		li1_last.className = "";

		this.className = "active";
		lis1[this.index].className = "active";
		btn1_last = this;
		li1_last = lis1[this.index];

	 }
}

/*车载电器选项卡*/

var btn_wrap2=document.getElementById("elect_btns");
var btns2=btn_wrap2.getElementsByTagName("button");
var elect_ul=document.getElementById("elect_ul");
var lis2 = elect_ul.children;
var btn2_last = btns2[0];
var li2_last = lis2[0];


for(var i =0;i<btns2.length;i++){
	btns2[i].index=i;
	btns2[i].onclick = function(){ 
 
		btn2_last.className = "";
		li2_last.className = "";

		this.className = "active";
		lis2[this.index].className = "active";
		btn2_last = this;
		li2_last = lis2[this.index];

	 }
}
/*车内装饰电器选项卡*/

var btn_wrap3=document.getElementById("decor_btns");
var btns3=btn_wrap3.getElementsByTagName("button");
var decor_ul=document.getElementById("decor_ul");
var lis3 = decor_ul.children;
var btn3_last = btns3[0];
var li3_last = lis3[0];


for(var i =0;i<btns3.length;i++){
	btns3[i].index=i;
	btns3[i].onclick = function(){ 
 
		btn3_last.className = "";
		li3_last.className = "";

		this.className = "active";
		lis3[this.index].className = "active";
		btn3_last = this;
		li3_last = lis3[this.index];

	 }
}
/*美容清洗*/
var btn_wrap4=document.getElementById("wash_btns");
var btns4=btn_wrap4.getElementsByTagName("button");
var wash_ul=document.getElementById("wash_ul");
var lis4 = wash_ul.children;
var btn4_last = btns4[0];
var li4_last = lis4[0];


for(var i =0;i<btns4.length;i++){
	btns4[i].index=i;
	btns4[i].onclick = function(){ 
 
		btn4_last.className = "";
		li4_last.className = "";

		this.className = "active";
		lis4[this.index].className = "active";
		btn4_last = this;
		li4_last = lis4[this.index];

	 }
}
/*线下服务*/
var btn_wrap5=document.getElementById("off_btns");
var btns5=btn_wrap5.getElementsByTagName("button");
var off_ul=document.getElementById("off_ul");
var lis5 = off_ul.children;
var btn5_last = btns5[0];
var li5_last = lis5[0];


for(var i =0;i<btns5.length;i++){
	btns5[i].index=i;
	btns5[i].onclick = function(){ 
 
		btn5_last.className = "";
		li5_last.className = "";

		this.className = "active";
		lis5[this.index].className = "active";
		btn5_last = this;
		li5_last = lis5[this.index];

	 }
}
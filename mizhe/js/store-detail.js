

var content = document.getElementsByClassName("div")[0];
var ul = document.getElementsByClassName("gt_home_ul")[0];
var winh = window.innerHeight
var isFinish = false;

function appendLoading(content){
	var fragment = document.createDocumentFragment();
	var wrap = document.createElement("div");
	var img = document.createElement("img");
	var span = document.createElement("span");

	wrap.className = "loading";
	img.src = "../img/pic_loading.gif";
	span.innerHTML = "正在加载";

	wrap.appendChild(img);
	wrap.appendChild(span);
	fragment.appendChild(wrap);
	content.appendChild(fragment);
	return wrap;
}

var loading = appendLoading(content);
var loadTop = 0;

window.addEventListener("scroll",function(){
	loadTop = loading.getBoundingClientRect().top;

	if(loadTop < winh && !isFinish){
		ajaxLoad();
		isFinish = true;
	}
});


function ajaxLoad(){
	var xhr = new XMLHttpRequest();

	xhr.open("get","../js/storedetail.json",true);

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var res = xhr.responseText;
			var obj = JSON.parse(res);
			var html = "";

			for(var key in obj){
				html +='<li><a href="#"><img src=' + obj[key]["img"] +' alt=""><p>'+ obj[key]["describe"] +'</p><span><em>￥</em><em>' + obj[key]["price"] +'</em></span><s>￥' + obj[key]["s"] + '</s></a></li>';
			}

			setTimeout(function(){
				ul.insertAdjacentHTML("beforeEnd",html);
				isFinish = false;
			},2000);
		}
	}
	xhr.send(null);
}
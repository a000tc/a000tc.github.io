 //猜你喜欢的无限加载
 	var content=document.getElementsByClassName("content")[0];
 	var winh=window.innerHeight;
 	var ul =document.getElementById("like-ul");
 	var isFinish = false;
 	/*
 		describe:创建加载的文档碎片，并且插入到content
 		arguments:content,要插入到的容器
 		return；返回要插入的div
 	 */

 	function appendLoading(content){
 		var fragment=document.createDocumentFragment();
 		var wrap=document.createElement("div");
 		var img=document.createElement("img");
 		var span = document.createElement("span");
 	 	
 	 	wrap.className="load";
 	 	img.src="../img/pic_loading.gif";
 	 	span.innerHTML="正在加载";

 	 	wrap.appendChild(img);
 	 	wrap.appendChild(span)
 	 	fragment.appendChild(wrap);
 	 	content.appendChild(fragment);
 	 	return wrap;
 	}
 	//向content加入文档碎片
 	var loading=appendLoading(content);
 	var loadTop=0; 
 	window.addEventListener("scroll",function(){
 		loadTop=loading.getBoundingClientRect().top;
 		if(loadTop < winh && !isFinish){
 		ajaxLoad();
 		isFinish=true;
 		}
 	});
 	function ajaxLoad(){
 		//创建一个Ajax对象
 		var xhr= new XMLHttpRequest();
 		//需要请求的链接
 		//true表示异步加载
 		xhr.open("get","../js/pay-success.json",true);
 		xhr.onreadystatechange=function(){
 			if(xhr.readyState == 4 && xhr.status==200){
 				//接受请求回来的文本
 				var res = xhr.responseText;
 				//JSON.parse：对象转换为字符串
 				var obj=JSON.parse(res);
 				var html = "";
 				for(var key in obj){
 					html+='<li><a href="#"><img src=" '+obj[key]["img"]+' "><p>'+ obj[key]["describe"]+'</p><span><i>￥</i>'+obj[key]["price"] +'</span> </a></li>';
 				}
 				setTimeout(function(){
 					ul.insertAdjacentHTML("beforeEnd",html);
 					isFinish=false;

 				},1000);
 			}
 		}
 		xhr.send(null);
 	} 	 



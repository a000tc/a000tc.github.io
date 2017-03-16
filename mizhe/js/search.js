
//点击取消按钮,清空input输入框的搜索内容
 (function(){
 	var del= document.querySelector(".delete-search");
 	var input= document.querySelector(".search-input");
 	del.addEventListener("touchstart",function(){
 		input.value="";

 	})
 }());


 //设置缓存
 (function(){
 	var list=document.querySelector(".store-list");
 	var input=document.querySelector(".search-input");
 	var clear = document.querySelector(".clear");
 	var form= document.getElementsByTagName("form")[0];
 	var store=[];

 	//表单提交事件
 	form.addEventListener("submit",function(){
 		setHistory();
 	});
 	//页面一开始初始化li
 	localforage.getItem("keystore").then(function(value){
 		value && createHistory(value);
 	});
 	//设置localstorage
 	function setHistory(){
 		//获取搜索框的值
 		var key= input.value;
 		//获取localstorage
 		localforage.getItem('keystore',function(err,value){
 			//判断输入框的值是否为空：第一次进入页面的时候输入框的值是空的
 			if(value==null){
 				//将输入框的值存进空数组
 				store.push(key);

 				//向缓存插入内容
 				localforage.setItem('keystore',store);
 			}
 			else{
 				//如果存在keystore
 				//value是localstorage保存数组
 				 store= value;
 				 if(store.indexOf(key) == -1){
 				 	store.unshift(key);
 				 	store.length > 5 && (store.length=5);
 				 	localforage.setItem('keystore',store);

 				}
 			
 			}
 		});
 	}
 	//创建生成li
 	function createHistory(arr){
 		//html:li的内容
 		var html = "";
 		//e是数组的值，i是下标
 		arr.forEach(function(e,i){
 			html +="<li>"+ e + "</li>";
 		})
 		list.innerHTML=html;

 	}
 	//删除localstorage
 	clear.addEventListener("touchstart",function(){
 		localforage.clear().then(function(){
 			list.innerHTML = "";
 			//重新设置keystore为空，因为clear数组还有空的内容；
 			localforage.setItem("keystore",[]);
 		})
 	})
}());
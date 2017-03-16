
(function(){

	var list = document.querySelector(".goods-ul");
	var ali = document.querySelectorAll("li");
	//接收当前点击的star
	var num;

	for (var a = 0; a < ali.length; a++) {
		ali[a].index=a;

		ali[a].addEventListener("touchstart",function(){
			num= this.index;
			//移除所有star的样式
			for (var b = 0; b < ali.length; b++) {
				ali[b].classList.remove("changeStar");
			}
			//num是当前点击的star，所以循环之后，之前的star也添加了该样式
			for (var i = 0; i <= num; i++) {
				ali[i].classList.toggle("changeStar");
			}
		});
	}
}());
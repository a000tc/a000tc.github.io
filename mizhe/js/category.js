(function(){

	var classify_goods = document.getElementsByClassName("classify_goods")[0];
	var uls = classify_goods.getElementsByTagName("ul");
	var classify_option_ul = document.getElementsByClassName("classify_option_ul")[0];
	var lis = classify_option_ul.getElementsByTagName("li");


	for(var a = 0; a < lis.length; a++){
		lis[a].index = a;
		uls[a].index = a;
		lis[a].addEventListener("touchstart",function(){
			for(var v = 0; v < lis.length; v++){
				lis[v].classList.remove("action");
				uls[v].classList.add("diplay");
			}
			lis[this.index].classList.add("action");
			uls[this.index].classList.remove("diplay");
		})
	}

	var cut = document.getElementsByClassName("cut")[0];
	var text = document.getElementsByClassName("text")[0];

	cut.addEventListener("touchstart",function(){
		text.value = "";
	})

}())
var choose = document.querySelectorAll(".choose");
var next;
for (var i = 0; i < choose.length; i++) {
	choose[i].index=i;
	choose[i].addEventListener("touchstart",function(){
		for (var i = 0; i < choose.length; i++) {
			choose[i].classList.remove("selected");
			next =choose[i].parentNode.parentNode.parentNode.nextElementSibling;
			next.classList.remove("bordercolor");
		}
		next =choose[this.index].parentNode.parentNode.parentNode.nextElementSibling;
		next.classList.add("bordercolor");
		choose[this.index].classList.add("selected");
	});
}


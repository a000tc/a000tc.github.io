var select = document.querySelectorAll(".select");
console.log(select);
for (var i = 0; i < select.length; i++) {
	select[i].index=i;
	select[i].addEventListener("touchstart",function(){
		for (var i = 0; i < select.length; i++) {
			select[i].classList.remove("selected");
		}
		select[this.index].classList.add("selected");
	});
}
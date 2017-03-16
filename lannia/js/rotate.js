//旋转部分功能

var run = (function(){

	var wrap = document.querySelector(".wrap");
	var box = document.querySelector(".show");
	var ro = "rotate2"; //class名

	function rotate(event){
		
		event.stopPropagation();
		wrap.classList.remove(ro);
		ro = ro == "rotate2" ? "rotate" : "rotate2";
		wrap.classList.add(ro);			
		wrapEnd();
	}

	function wrapEnd(){
		wrap.addEventListener("webkitAnimationEnd",wrapHandle)
	}

	function wrapHandle(e){
		e.preventDefault();
		box.removeEventListener("webkitAnimationEnd",rotate);
		box.classList.remove("scale");
		box.classList.add("shrink");	
		boxEnd();
		wrap.removeEventListener("webkitAnimationEnd",wrapHandle)
	}

	function boxEnd(){
		box.addEventListener("webkitAnimationEnd",shrink);
	}

	function shrink(event){
		event.stopPropagation();
		box.classList.remove("shrink");
		box.removeEventListener("webkitAnimationEnd",shrink);

		// off是判断动画是否完成
		off = false;
	}

	return function(){

		box.classList.add("scale");
		box.addEventListener("webkitAnimationEnd",rotate)
	}

}());




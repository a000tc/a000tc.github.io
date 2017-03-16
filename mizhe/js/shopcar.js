
	var minus = document.querySelectorAll(".minus");
	var plus = document.querySelectorAll(".plus");
	var count=document.querySelectorAll(".count");
	var deletes = document.querySelectorAll(".delete");
	var allselect = document.getElementsByClassName("all")[0];
	var allprice= document.querySelector(".total-price");
	var choice =document.querySelectorAll(".choice");
	var choice_title= document.querySelectorAll(".choice_title");
	var choose=document.querySelectorAll(".choose");
	var unit = document.querySelectorAll(".unit");
	var save = document.querySelector(".save");
	var pieces=document.querySelector(".piece");
	var piece;
	for (var a = 0; a < count.length; a++) {
		count[a].index=a;
		plus[a].index=a;
		minus[a].index = a;
		unit[a].index=a;
		var value;
		//plus  pcs
	 	plus[a].addEventListener("touchstart",function(){
	 		value = parseInt(count[this.index].innerHTML);
	 	 	 if(value>=0) {
	 	 	 	value++;
	 	 	 	count[this.index].innerHTML = value;
	 	 	 	allprice.innerHTML=getMoney(); 
	 	 	 	save.innerHTML=saveMoney();
	 	 	 	pieces.innerHTML=countpiece();
	 	 	 }  
	 	});
	 	//minus pcs
	 	minus[a].addEventListener("touchstart",function(){
	 		value = parseInt(count[this.index].innerHTML);
	 	 	 if(value>=1) {
	 	 	 	value--;
	 	 	 	count[this.index].innerHTML = value;
	 	 	 	allprice.innerHTML=getMoney();
	 	 	 	save.innerHTML=saveMoney(); 
	 	 	 	pieces.innerHTML=countpiece();
	 	 	 }	 	 	 
	 	}); 	
	}
	//delete product
	for (var b = 0; b < deletes.length; b++) {
		deletes[b].index=b;
		deletes[b].addEventListener("touchstart",function(){
			//div
			var parent1=deletes[this.index].parentNode;
			//div
			var granpa1=parent1.parentNode;
			//li
			var greatgranpa1=granpa1.parentNode;
			//ul
			var ancestor1 = greatgranpa1.parentNode;
		
			//store'productlist
			var goods1=ancestor1.parentNode;

			//store's container
			var content1=goods1.parentNode;
			var gray = content1.getElementsByClassName("gray")[0];
			ancestor1.removeChild(greatgranpa1);

			allprice.innerHTML=getMoney(); 
			save.innerHTML=saveMoney();
			pieces.innerHTML=countpiece();

			if (ancestor1.children.length==0){
				//if goods has nothing,delete this goods
				content1.removeChild(goods1);
				//delete border of goods
				content1.removeChild(gray);
			}
		});
	}
	//select single product	
	for (var c = 0; c < choice.length;c++) {
		choice[c].index=c;
		choice[c].addEventListener("touchstart",function(){
	 		this.classList.toggle("selected");
	 		allprice.innerHTML=getMoney(); 	
			save.innerHTML=saveMoney();
			pieces.innerHTML=countpiece();
	 	});
	}

	//store'title then select its all product
	var isfinsh = false;
	for(var d=0;d<choice_title.length;d++){
		choice_title[d].index = d;
		choice_title[d].addEventListener('touchstart',function(){

			if(!isfinsh){
			 var par = choice_title[this.index].parentNode.parentNode;
			 choice_title[this.index].classList.add('selected');
			 var choice = par.getElementsByClassName('choice');
			  for(var e =0;e<choice.length;e++){
			  	choice[e].classList.add('selected');
			  }
			  isfinsh = true;
			}else{
			 var par = choice_title[this.index].parentNode.parentNode;
			 choice_title[this.index].classList.remove('selected');
			 var choice = par.getElementsByClassName('choice');
			  for(var e =0;e<choice.length;e++){
			  	choice[e].classList.remove('selected');
			  }
			  isfinsh = false;
			}
		allprice.innerHTML=getMoney();
		save.innerHTML=saveMoney(); 
		pieces.innerHTML=countpiece();
		})
	}
	//if single product selected,store_title is not selected;if all product selected,store_title is selected
	for (var g = 0; g < choice.length; g++) {
		choice[g].index=g;
		choice[g].addEventListener("touchstart",function(){
			var goods_li=choice[this.index].parentNode.parentNode.parentNode.children;
			var selected = choice[this.index].parentNode.parentNode.parentNode.querySelectorAll(".selected");
			var store_title=choice[this.index].parentNode.parentNode.parentNode.parentNode.querySelector(".choice_title");
			if (goods_li.length == selected.length) {
				store_title.classList.add("selected");
			}
			else{
				store_title.classList.remove("selected");
			}
		});
	}
	//select all product
	allselect.addEventListener("touchstart",function(){
		this.classList.toggle("selected");
		for (var f = 0; f < choose.length; f++){
			if(this.classList.contains("selected")){
				choose[f].classList.add("selected");
			}
			if(!this.classList.contains("selected")){
				choose[f].classList.remove("selected");
			}
		}
		allprice.innerHTML=getMoney(); 	
		save.innerHTML=saveMoney();
		pieces.innerHTML=countpiece();
	})
	//count money
	function getMoney(){
		var states = document.getElementsByClassName("choice");
		var product_num = document.getElementsByClassName("count");
		var unit = document.getElementsByClassName("unit");
		var money_count = 0;
		var aState = [];
		var money_arr = [];
		for(var i = 0; i<states.length; i++){
			aState[i] = states[i].className == "choice choose selected"? "true":"false";
		}
		for (var i = 0; i < aState.length; i++) {
			if(aState[i] == "true"){
				money_arr[i] = parseFloat(product_num[i].innerHTML)*parseFloat(unit[i].innerHTML);
			}
		}
		if(money_arr.length != 0){
			money_count = money_arr.reduce(function(prev,next,index,array){
	 	 	 	return parseFloat(next)+parseFloat(prev);
	 	 	})
		}
		return money_count.toFixed(2);
	}

	//savemoney
	function saveMoney(){
		var states = document.getElementsByClassName("choice");
		var product_num = document.getElementsByClassName("count");
		var quondam=document.getElementsByTagName("s");
		var unit = document.getElementsByClassName("unit");
		var money_count = 0;
		var aState = [];
		var money_arr = [];
		for(var i = 0; i<states.length; i++){
			aState[i] = states[i].className == "choice choose selected"? "true":"false";
		}
		for (var i = 0; i < aState.length; i++) {
			if(aState[i] == "true"){
				var save_unit=parseFloat(quondam[i].innerHTML)-parseFloat(unit[i].innerHTML);
				 money_arr[i] = parseFloat(product_num[i].innerHTML)*save_unit;
			}
		}
		if(money_arr.length != 0){
			money_count = money_arr.reduce(function(prev,next,index,array){
	 	 	 	return (parseFloat(next)+parseFloat(prev));
	 	 	})
		}
		return money_count.toFixed(2);
	}
	//submit:count piece
	function countpiece(){
		return document.getElementsByClassName("choice choose selected").length;
	}
	
	



 

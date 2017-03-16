
var loc = document.querySelector("#location");
var input= document.querySelector("#input");
var container = document.querySelector(".container");
var map_con=document.querySelector(".BMap");
var back=document.querySelector(".return")
var contentsss = document.getElementsByClassName("map_con")[0];
var pos=[];

getAddress(function(text){
	input.value= text;
});
loc.addEventListener("touchstart",function(){
	contentsss.style.display = "block";
	map_con.style.visibility="visible";	 
	getAddress(function(text){
		input.value =text;
	})
});
back.addEventListener("touchstart",function(){
	contentsss.style.display = "none";
});

function getAddress(fn){
	var map = new BMap.Map("BMap");
	var point= new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,20);
	var geolocation = new BMap.Geolocation();
	var geoc = new BMap.Geocoder();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus()==BMAP_STATUS_SUCCESS){
			var mk= new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			alert("您的位置:"+r.point.lng+","+r.point.lat);
			point = new BMap.Point(r.point.lng,r.point.lat);
			geoc.getLocation(point,function(rs){
				var addComp = rs.addressComponents;
				var locaiton = addComp.province+","+addComp.city+","+addComp.district+","+addComp.streetNumber;
				fn(locaiton);
			});
		}
		else{
			alert("failed"+this.getStatus());
		}
	},{enableHignAccuracy:true});
}

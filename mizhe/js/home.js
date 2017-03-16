//猜你喜欢的无限加载
(function() {
    var content = document.getElementsByClassName("content")[0];
    var footer = document.getElementsByTagName("footer")[0];
    //innerHeight可视区域的高度
    var winh = window.innerHeight - footer.offsetHeight;
    var ul = document.getElementById("like-ul");
    var isFinish = false;
    /*
    	describe:创建加载的文档碎片，并且插入到content
    	arguments:content,要插入到的容器
    	return；返回要插入的div
     */
    function appendLoading(content) {
        var fragment = document.createDocumentFragment();
        var wrap = document.createElement("div");
        var img = document.createElement("img");
        var span = document.createElement("span");

        wrap.className = "load";
        img.src = "../img/pic_loading.gif";
        span.innerHTML = "正在加载";

        wrap.appendChild(img);
        wrap.appendChild(span)
        fragment.appendChild(wrap);
        content.appendChild(fragment);
        return wrap;
    }
    //向content加入文档碎片
    var loading = appendLoading(content);
    var loadTop = 0;

    //判断正在加载是否出现在屏幕
    content.addEventListener("scroll", function() {

        loadTop = loading.getBoundingClientRect().top;
        if (loadTop < winh && !isFinish) {
            ajaxLoad();
            isFinish = true;
        }
    });
    //ajax加载数据
    function ajaxLoad() {
        //创建一个Ajax对象
        var xhr = new XMLHttpRequest();
        //需要请求的链接
        //true表示异步加载
        xhr.open("get", "../js/home.json", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {

                //接受请求回来的文本
                var res = xhr.responseText;
                console.log(res);
                //JSON.parse：对象转换为字符串
                var obj = JSON.parse(res);
                var html = "";

                for (var key in obj) {
                    html+='<li><div class="like-img"><img src="'+obj[key]["img"]+'"></div>';
                    html+='<div class="like-right"><p>'+obj[key]["store"]+'</p>';
                    html+='<p>['+obj[key]["belong"]+"]+"+obj[key]["supprot"]+"</p>";
                    html+='<p>地址：'+obj[key]["address"]+'</p>';
                    html+='<p><span class="price fl">'+obj[key]["newprice"]+'元</span>';
                    html+='<span class="fr">已售出'+obj[key]["count"]+'<span>';
                    html+='</p></div></li>';
                }
            
                setTimeout(function() {
                    ul.insertAdjacentHTML("beforeEnd", html);
                    isFinish = false;

                }, 2000);
            }
        }
        xhr.send(null);
    }
}())
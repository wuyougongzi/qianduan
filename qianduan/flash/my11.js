$(function(){
			function showImg(index){
				var imgWidth=$(".container_img").width();
				$(".container_img ul li").stop(true,false).animate({left:-imgWidth*index},400);
			}
			var i=0,timer=null;
	timer = setInterval( function change(){i++;if(i>3){i=0}showImg(i);$(".container_num li").eq(i).addClass("current").siblings("li").removeClass("current");},3500);
			$(".container_num li").mouseover(function(){	
				clearInterval(timer);
				var index=$(".container_num li").index(this);
			$(this).addClass("current").siblings("li").removeClass("current");
		   showImg(index);
			})
				$(".container_num li").mouseout(function(){
					timer = setInterval( function change(){i++;if(i>3){i=0}showImg(i);$(".container_num li").eq(i).addClass("current").siblings("li").removeClass("current");},3500);});
			
	})
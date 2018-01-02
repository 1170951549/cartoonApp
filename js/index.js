$(function(){
	//计算根节点的字体大小
	var htmlWidth = $("html").width();
	$("html").css("fontSize",htmlWidth/15);//每次%50=rem
	//头部菜单
	function topMenu(){
		$(".top-btn1").on("touchend",function(e){
			e.preventDefault();//阻止默认事件
	
			if($(".top-menu-box").css("display")=="none"){
				$(".top-menu-box").css("display","block");
			}else{
				$(".top-menu-box").css("display","none");
			}
		});
	}
	topMenu();
	//轮播
	function banner(){
		var mySwiper=new  Swiper(".swiper-container",{
//			autoplay:true,
			autoplay:{
				 delay: 3000,//5秒切换一次
			},
			loop:true,
		})
	}
	banner();
	//无良推荐
	function recommend(){
		$.ajax({
			type:"get",
			url:"json/in-recommend.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str=""
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<img src='images/"+msg.img+"'/>"
							str+="<p>"
								str+="<strong>"+msg.name+"</strong>"
								str+="<span>"+msg.exp+"</span>"
							str+="</p>"
						str+="</a>"
					str+="</li>"
				});
				$(".recommend-box ul").append(str);
			}
		});
	}
	 recommend();
	 //每日
	function dayRecommend(){
		$.ajax({
			type:"get",
			url:"json/in-dayRecommend.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str=""
				$.each(data, function(index,msg) {
					str+="<a href='javascript:;' class='dayRecommend-conImg'>"
						str+="<img src='images/"+msg.img+"' />"
					str+="</a>"
					str+="<a href='javascript:;' class='dayRecommend-conText'>"
						str+="<span>"+msg.name+"</span>"
						str+="<span>"+msg.zz+"</span>"
					str+="</a>"
				});
				$(".dayRecommend-con").append(str);
			}
		});
	}
	 dayRecommend();
	 //特别
	 function particularly(){
	 	$.ajax({
	 		type:"get",
	 		url:"json/in-particularly.json",
	 		async:true,
	 		datatype:"json",
	 		success:function(data){
	 			var str="";
	 			$.each(data, function(index,msg) {
	 				str+="<li>"
	 					str+="<a href='javascript:;'>"
	 						str+="<img src='images/"+msg.img+"' />"
	 					str+="</a>"
	 				str+="</li>"
	 			});
	 			$(".particularly-list").append(str);
	 		}
	 	});
	 }
	 particularly();
	 //每日更新
	 function todayUp(){
	 	$.ajax({
	 		type:"get",
	 		url:"json/in-todayUp.json",
	 		async:true,
	 		datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='todayUp-conList-img'>"
								str+="<img src='images/"+msg.img+"' />"
							str+="</div>"
							str+="<div class='todayUp-conList-text'>"
								str+="<strong>"+msg.name+"</strong>"
								str+="<span>"+msg.zz+"</span>"
								str+="<span>"+msg.update+"</span>"
								str+="<span>平分："+msg.pf+"</span>"
							str+="</div>"
						str+="</a>"
					str+="</li>"
				});
				$(".todayUp-conList").append(str);
			}
	 	});
	 }
	 todayUp();
	 //动画
	 function animation(){
	 	$.ajax({
	 		type:"get",
	 		url:"json/in-animation.json",
	 		async:true,
	 		datatype:"json",
	 		success:function(data){
	 			var str="";
	 			$.each(data, function(index,msg) {
	 				str+="<li>"
	 					str+="<a href='javascript:;'>"
	 						str+="<img src='images/"+msg.img+"' />"
	 						str+="<p><strong>"+msg.name+"</strong><span>"+msg.up+"</span></p>"
	 						str+="<i></i>"
	 					str+="</a>"
	 				str+="</li>"
	 			});
	 			$(".animation-list").append(str);
	 		}
	 	});
	 }
	 animation();
	 //日漫
	 function cartoon(){
	 	$.ajax({
	 		type:"get",
	 		url:"json/in-cartoon.json",
	 		async:true,
	 		datatype:"json",
	 		success:function(data){
	 			var str="";
	 			$.each(data, function(index,msg) {
	 				str+="<li>"
	 					str+="<a href='javascript:;'>"
	 						str+="<img src='images/"+msg.img+"' />"
	 						str+="<p><strong>"+msg.name+"</strong><span>"+msg.clas+"</span></p>"
	 					str+="</a>"
	 				str+="</li>"
	 			});
	 			$(".cartoon-list").append(str);
	 		}
	 	});
	 }
	 cartoon();
	  //日漫
	 function newWork(){
	 	$.ajax({
	 		type:"get",
	 		url:"json/in-newWork.json",
	 		async:true,
	 		datatype:"json",
	 		success:function(data){
	 			var str="";
	 			$.each(data, function(index,msg) {
	 				str+="<li>"
	 					str+="<a href='javascript:;'>"
	 						str+="<img src='images/"+msg.img+"' />"
	 						str+="<p><strong>"+msg.name+"</strong><span>"+msg.clas+"</span></p>"
	 					str+="</a>"
	 				str+="</li>"
	 			});
	 			$(".newWork-list").append(str);
	 		}
	 	});
	 }
	 newWork();
	 //返回顶部
	 function returnTop(){
		$(document).scroll(function(){
			var t=$(this).scrollTop();
			var days=$(".dayRecommend-box").offset().top;
			var tops=$(".top-box").offset().top;
			if(t>=days){
				$(".returnTop").show();
			}else{
				$(".returnTop").hide();
			}
			$(".returnTop").on("touchstart",function(e){
				e.preventDefault();//阻止默认事件
				 var time = setInterval(function(){
	              if(t < 0){
	                  clearInterval( time );
	              }else{
	                  t -= 50;
	                  $(window).scrollTop(t);
	              }
	            },13);
			})
		});
	}
	 returnTop();
})

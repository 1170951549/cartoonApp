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
	function rankingToken(){
		//更新
		$.ajax({
			type:"get",
			url:"json/rank-up-top.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<a href='javascript:;'>"
						str+="<img src='images/"+msg.imgs+"' />"
						str+="<p><strong>"+msg.name+"</strong><span>"+msg.up+"</span></p>"
					str+="</a>"
				});
				$(".rank-token-list1").append(str);
			}
		});
		//畅销
		$.ajax({
			type:"get",
			url:"json/rank-active-top.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<a href='javascript:;'>"
						str+="<img src='images/"+msg.imgs+"' />"
						str+="<p><strong>"+msg.name+"</strong><span>"+msg.up+"</span></p>"
					str+="</a>"
				});
				$(".rank-token-list2").append(str);
			}
		});
		//人气
		$.ajax({
			type:"get",
			url:"json/rank-pop-top.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<a href='javascript:;'>"
						str+="<img src='images/"+msg.imgs+"' />"
						str+="<p><strong>"+msg.name+"</strong><span>"+msg.up+"</span></p>"
					str+="</a>"
				});
				$(".rank-token-list3").append(str);
			}
		});
		//月票
		$.ajax({
			type:"get",
			url:"json/rank-num-top.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<a href='javascript:;'>"
						str+="<img src='images/"+msg.imgs+"' />"
						str+="<p><strong>"+msg.name+"</strong><span>"+msg.up+"</span></p>"
					str+="</a>"
				});
				$(".rank-token-list4").append(str);
			}
		});
	}
	rankingToken();
	function rankCon(){
		//更新
		$.ajax({
			type:"get",
			url:"json/rank-up-con.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='rank-conList-img'>"
								str+="<img src='images/"+msg.imgs+"' />"
							str+="</div>"
							str+="<div class='rank-conList-text'>"
								str+="<strong>"+msg.name+"</strong>"
								str+="<span>"+msg.up+"</span>"
								str+="<span>"+msg.clas+"</span>"
								str+="<span>"+msg.jies+"</span>"
								str+="<i>"+msg.pm+"</i>"
							str+="</div>"
						str+="</a>"
					str+="</li>"
				});
				$(".rank-con-list1 ul").append(str);
			}
		});
		//畅销
		$.ajax({
			type:"get",
			url:"json/rank-active-con.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='rank-conList-img'>"
								str+="<img src='images/"+msg.imgs+"' />"
							str+="</div>"
							str+="<div class='rank-conList-text'>"
								str+="<strong>"+msg.name+"</strong>"
								str+="<span>"+msg.up+"</span>"
								str+="<span>"+msg.clas+"</span>"
								str+="<span>"+msg.jies+"</span>"
								str+="<i>"+msg.pm+"</i>"
							str+="</div>"
						str+="</a>"
					str+="</li>"
				});
				$(".rank-con-list2 ul").append(str);
			}
		});
		//人气
		$.ajax({
			type:"get",
			url:"json/rank-pop-con.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='rank-conList-img'>"
								str+="<img src='images/"+msg.imgs+"' />"
							str+="</div>"
							str+="<div class='rank-conList-text'>"
								str+="<strong>"+msg.name+"</strong>"
								str+="<span>"+msg.up+"</span>"
								str+="<span>"+msg.clas+"</span>"
								str+="<span>"+msg.jies+"</span>"
								str+="<i>"+msg.pm+"</i>"
							str+="</div>"
						str+="</a>"
					str+="</li>"
				});
				$(".rank-con-list3 ul").append(str);
			}
		});
		//月票
		$.ajax({
			type:"get",
			url:"json/rank-num-con.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='rank-conList-img'>"
								str+="<img src='images/"+msg.imgs+"' />"
							str+="</div>"
							str+="<div class='rank-conList-text'>"
								str+="<strong>"+msg.name+"</strong>"
								str+="<span>"+msg.up+"</span>"
								str+="<span>"+msg.clas+"</span>"
								str+="<span>"+msg.jies+"</span>"
								str+="<i>"+msg.pm+"</i>"
							str+="</div>"
						str+="</a>"
					str+="</li>"
				});
				$(".rank-con-list4 ul").append(str);
			}
		});
	}
	rankCon();
})
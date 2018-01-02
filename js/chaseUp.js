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
	function weekList(){
		//1
		$.ajax({
			type:"get",
			url:"json/week1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='week-list-img'><img src='images/"+msg.imgs+"' /></div>"
							str+="<div class='week-list-text'><strong>"+msg.name+"</strong><span>"+msg.up+"</span><span>"+msg.jies+"</span></div>"
						str+="</a>"
					str+="</li>"
				});
				$(".week-list1 ul").append(str);
			}
		});
		//2
		$.ajax({
			type:"get",
			url:"json/week2.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='week-list-img'><img src='images/"+msg.imgs+"' /></div>"
							str+="<div class='week-list-text'><strong>"+msg.name+"</strong><span>"+msg.up+"</span><span>"+msg.jies+"</span></div>"
						str+="</a>"
					str+="</li>"
				});
				$(".week-list2 ul").append(str);
			}
		});
		//3
		$.ajax({
			type:"get",
			url:"json/week3.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='week-list-img'><img src='images/"+msg.imgs+"' /></div>"
							str+="<div class='week-list-text'><strong>"+msg.name+"</strong><span>"+msg.up+"</span><span>"+msg.jies+"</span></div>"
						str+="</a>"
					str+="</li>"
				});
				$(".week-list3 ul").append(str);
			}
		});
		//4
		$.ajax({
			type:"get",
			url:"json/week4.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='week-list-img'><img src='images/"+msg.imgs+"' /></div>"
							str+="<div class='week-list-text'><strong>"+msg.name+"</strong><span>"+msg.up+"</span><span>"+msg.jies+"</span></div>"
						str+="</a>"
					str+="</li>"
				});
				$(".week-list4 ul").append(str);
			}
		});
		//5
		$.ajax({
			type:"get",
			url:"json/week5.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='week-list-img'><img src='images/"+msg.imgs+"' /></div>"
							str+="<div class='week-list-text'><strong>"+msg.name+"</strong><span>"+msg.up+"</span><span>"+msg.jies+"</span></div>"
						str+="</a>"
					str+="</li>"
				});
				$(".week-list5 ul").append(str);
			}
		});
		//6
		$.ajax({
			type:"get",
			url:"json/week6.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='week-list-img'><img src='images/"+msg.imgs+"' /></div>"
							str+="<div class='week-list-text'><strong>"+msg.name+"</strong><span>"+msg.up+"</span><span>"+msg.jies+"</span></div>"
						str+="</a>"
					str+="</li>"
				});
				$(".week-list6 ul").append(str);
			}
		});
		//7
		$.ajax({
			type:"get",
			url:"json/week7.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;'>"
							str+="<div class='week-list-img'><img src='images/"+msg.imgs+"' /></div>"
							str+="<div class='week-list-text'><strong>"+msg.name+"</strong><span>"+msg.up+"</span><span>"+msg.jies+"</span></div>"
						str+="</a>"
					str+="</li>"
				});
				$(".week-list7 ul").append(str);
			}
		});
	}
	weekList();
})

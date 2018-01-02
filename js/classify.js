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
})
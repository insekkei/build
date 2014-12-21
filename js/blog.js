$(function(){
	$('#ad-slide-nav li a').click(function(e){
		e.preventDefault();
		$(this).addClass('hover').parent('li').siblings().find('a').removeClass('hover');
		var i = $(this).index(),
		id = $(this).attr('href');
		$(id).fadeIn();
		$(id).siblings('a').fadeOut();
	});

	var index =0;
	//3秒轮播一次
	var timer = setInterval(function(){
	    index = (index == 2) ? 0 : index + 1;          
	    //某个div显示，其他的隐藏
	    $(".ad-slide-link").fadeOut().eq(index).fadeIn();
	    $('#ad-slide-nav li a').removeClass('hover').eq(index).addClass('hover');
	}, 8000);
});


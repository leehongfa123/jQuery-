// 入口函数
$(function () {

	// 购物车消息框弹出
	$('#chart_menu_show').hover(function () {
		$('.chart-menu').slideDown(400);
	},
	function () {
		$('.chart-menu').slideUp(400);
	});

	// 头部导航栏下拉框
	$('.header-nav .nav-item').hover(function () {
		// body...
		$('.header-nav-menu').appendTo($(this)).slideDown(400);

	},function () {
		// body...
		$(this).find('.header-nav-menu').slideUp(400);
	})








	// 用鼠标监听解决了该问题，但是不太好，需要想其他问题

	// var flag1 = false;
	// var flag2 = false;

	// function isonfather() {
	// 	// body...
	// 	$('.header-nav .nav-item').hover(function() {
	// 		flag1 = true;
	// 		}, function() {
	// 			flag1 = false;
	// 	});
	// };

	// function isonchild() {
	// 	// body...
	// 	$('.header-nav-menu').hover(function() {
	// 		flag2 = true;
	// 		}, function() {
	// 			flag2 = false;
	// 	});
	// };

	
	// function isshow() {
	// 	// body...
	// 	$('body').mousemove(function () {
	// 		// body...
	// 		isonfather();
	// 		isonchild();
	// 		console.log(flag1);
	// 		console.log(flag2);
	// 		if (!flag1 & !flag2)
	// 		{
	// 			$('.header-nav-menu').slideUp(400);
	// 		}else{
	// 			$('.header-nav-menu').slideDown(400);
	// 		};
	// 	});
	// };

	// // 先加载页面出来

	// $('.header-nav .nav-item').mouseenter(function () {
		
		


	// 	// 改变a标签字体颜色
	// 	$(this).find('a').css('color', '#ff6700').parent().siblings().find('a').css('color', '#333');


	// 	switch($(this).index())
	// 	{
	// 		case 1:
	// 			// console.log($('.header-nav-menu img'));
	// 			$('.header-nav-menu img').each(function (index, element) {
	// 				// body...
	// 				element.src = `./images/mi-phone/${index+1}.png`
	// 			});
	// 			break;

	// 		case 2:
	// 			// console.log($('.header-nav-menu img'));
	// 			$('.header-nav-menu img').each(function (index, element) {
	// 				// body...
	// 				element.src = `./images/Redmi-phone/${index+1}.png`
	// 			});
	// 			break;

	// 		case 3:
	// 			// console.log($('.header-nav-menu img'));
	// 			$('.header-nav-menu img').each(function (index, element) {
	// 				// body...
	// 				element.src = `./images/TV/${index+1}.jpg`
	// 			});
	// 			break;

	// 	}
	// 	// $('.header-nav-menu').slideDown(400);
		
	// });
	// isshow();

    


});
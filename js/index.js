// 入口函数
$(function () {

	// 购物车消息框弹出
	$('#chart_menu_show').hover(function () {
		$('.chart-menu').slideDown(400);
	},
	function () {
		$('.chart-menu').slideUp(400);
	});

	// ********************************************************************************
	// 头部导航栏下拉框
	// ********************************************************************************

	// 下拉菜单中的数据
	var mi_phone_title = ['小米CC9 Pro', '小米9 Pro 5G', '小米MIX Alpha', '小米CC9', '小米CC9e', '小米CC9 美图定制版']
	var mi_phone_price = ['2799元起', '3699元起', '19999元', '1699元', '1099元', '2199元']

	var Redmi_phone_title = ['Redmi 8A', 'Redmi 8', 'Redmi K20 Pro 尊享版', 'Redmi Note 8 Pro', 'Redmi Note 8', 'Redmi 7A']
	var Redmi_phone_price = ['699元', '749元起', '2699元起', '1299元起', '999元起', '579元起']

	var TV_title = ['Redmi 红米电视 70英寸 R70A', '小米壁画电视 65英寸', '小米全面屏电视E65A', '小米电视4A 32英寸', '小米电视4A 55英寸', '小米电视4A 65英寸'];
	var TV_price = ['3599元', '6999元', '1799元', '699元', '1699元', '2599元'];
	// 注意动画stop的使用
	$('.header-nav .nav-item').hover(function () {

		// 当鼠标悬浮到标签范围，改变字体颜色
		$(this).find('a').css('color', '#ff6700').parent().siblings().find('a').css('color', '#333');
		
		//通过选择标签的index，判断要展示的图片
		switch($(this).index())
		{
			case 1:
				// console.log($('.header-nav-menu img'));
				$('.header-nav-menu img').each(function (index, element) {
					// body...
					element.src = `./images/mi-phone/${index+1}.png`
				});

				$('.header-nav-menu .title').each(function (index, element) {
					element.innerText = mi_phone_title[index];
				});

				$('.header-nav-menu .price').each(function (index, element) {
					// body...
					element.innerText = mi_phone_price[index];
				});

				break;

			case 2:
				// console.log($('.header-nav-menu img'));
				$('.header-nav-menu img').each(function (index, element) {
					// body...
					element.src = `./images/Redmi-phone/${index+1}.png`
				});

				$('.header-nav-menu .title').each(function (index, element) {
					element.innerText = Redmi_phone_title[index];
				});

				$('.header-nav-menu .price').each(function (index, element) {
					// body...
					element.innerText = Redmi_phone_price[index];
				});
				break;

			case 3:
	
				$('.header-nav-menu img').each(function (index, element) {
					// body...
					element.src = `./images/TV/${index+1}.jpg`
				});

				$('.header-nav-menu .title').each(function (index, element) {
					element.innerText = TV_title[index];
				});

				$('.header-nav-menu .price').each(function (index, element) {
					// body...
					element.innerText = TV_price[index];
				});
				break;
		};

		$('.header-nav-menu').stop().slideDown(400);
		},
		function () {
			$('.header-nav-menu').stop().slideUp(400);
			$(this).find('a').css('color', '#333').parent().siblings().find('a').css('color', '#333');
	});
	
	// 给下拉的菜单也添加上下拉和上浮的动作
	$('.header-nav-menu').hover(function () {
		$('.header-nav-menu').stop().slideDown(400);
	},function () {
		$('.header-nav-menu').stop().slideUp(400);
	});	



	// *********************************************
	
	// 轮播图部分

	// *********************************************

	var img_index = 0;
	var lunbo_img_display = function () {

		// 这里需要对index为5时，在切回到0
		img_index ++ ;
		if(img_index == 5){
			img_index = 0;
		}
	
		// ************************************************************
		// 先完成fadeout在用回调函数，进行fadein，这样可以让切换看起来更加流畅
		// 同时要注意当index为0时，需要轮回切换
		// ************************************************************
		if (img_index == 0)
		{
			$($('.lunbo_img')[4]).fadeOut(500, function () {
			 // 改变轮播图下面的圆形按钮
			$($('.lunbo-btn a')[img_index]).css({'backgroundColor': '#fff','border-color':'rgba(0,0,0,.4)'}).siblings().css({'backgroundColor':'rgba(0,0,0,.4)', 'border-color':'hsla(0,0%,100%,.3)'});
			$($('.lunbo_img')[img_index]).fadeIn(500);
			});
		}else{
			$($('.lunbo_img')[img_index-1]).fadeOut(500, function () {
			// 改变轮播图下面的圆形按钮
			$($('.lunbo-btn a')[img_index]).css({'backgroundColor': '#fff','border-color':'rgba(0,0,0,.4)'}).siblings().css({'backgroundColor':'rgba(0,0,0,.4)', 'border-color':'hsla(0,0%,100%,.3)'});
			$($('.lunbo_img')[img_index]).fadeIn(500);
			
			});
		};	
	};

	// 设置定时，开启之前先清除
	clearInterval(timer);
	var timer = setInterval(lunbo_img_display, 10000);

	// *************************************
	// 给圆形按钮添加点击事件
	// ************************************
	$('.lunbo-btn a').on('click', function(event) {
		event.preventDefault();

		// clearInterval(timer);
		// 将点击按钮的index用新的变量存放，直接用的化，this改变了，所有就不是之前的对象了
		var btn_index = $(this).index()
		
		$($('.lunbo_img')[img_index]).fadeOut(500, function () {
			// 也需要改变圆形按钮的样式
			$($('.lunbo-btn a')[btn_index]).css({'backgroundColor': '#fff','border-color':'rgba(0,0,0,.4)'}).siblings().css({'backgroundColor':'rgba(0,0,0,.4)', 'border-color':'hsla(0,0%,100%,.3)'});
			$($('.lunbo_img')[btn_index]).fadeIn(500);

			// 更新图片index
			img_index = btn_index;
		});
	});

	// 给轮播图上的切换上下图片的箭头按钮添加事件
	$('.lunbo_img_next').on('click', function (event) {

		if (img_index == 4)
		{
			$($('.lunbo_img')[img_index]).fadeOut(500, function () {
			 // 改变轮播图下面的圆形按钮
			$($('.lunbo-btn a')[0]).css({'backgroundColor': '#fff','border-color':'rgba(0,0,0,.4)'}).siblings().css({'backgroundColor':'rgba(0,0,0,.4)', 'border-color':'hsla(0,0%,100%,.3)'});
			$($('.lunbo_img')[0]).fadeIn(500);
			img_index = 0;
			});
		}else{
			$($('.lunbo_img')[img_index]).fadeOut(500, function () {
			// 改变轮播图下面的圆形按钮
			$($('.lunbo-btn a')[img_index+1]).css({'backgroundColor': '#fff','border-color':'rgba(0,0,0,.4)'}).siblings().css({'backgroundColor':'rgba(0,0,0,.4)', 'border-color':'hsla(0,0%,100%,.3)'});
			$($('.lunbo_img')[img_index+1]).fadeIn(500);

			img_index = img_index + 1;
			
			});
		};
		
	});

	$('.lunbo_img_prev').on('click', function (event) {

		if (img_index == 0)
		{
			$($('.lunbo_img')[img_index]).fadeOut(500, function () {
			 // 改变轮播图下面的圆形按钮
			$($('.lunbo-btn a')[4]).css({'backgroundColor': '#fff','border-color':'rgba(0,0,0,.4)'}).siblings().css({'backgroundColor':'rgba(0,0,0,.4)', 'border-color':'hsla(0,0%,100%,.3)'});
			$($('.lunbo_img')[4]).fadeIn(500);

			img_index = 4;

			});
		}else{
			$($('.lunbo_img')[img_index]).fadeOut(500, function () {
			// 改变轮播图下面的圆形按钮
			$($('.lunbo-btn a')[img_index-1]).css({'backgroundColor': '#fff','border-color':'rgba(0,0,0,.4)'}).siblings().css({'backgroundColor':'rgba(0,0,0,.4)', 'border-color':'hsla(0,0%,100%,.3)'});
			$($('.lunbo_img')[img_index-1]).fadeIn(500);

			img_index = img_index - 1;
			
			});
		};
	});


	// 轮播图上导航栏区域设置,鼠标进入出现，鼠标退出就隐藏
	$('.site-category-item').hover(function () {
		$(this).find('.site-category-item-child').show();
	},function () {
		$('.site-category-item .site-category-item-child').hide();
	});



	// ********************************

	// 小米闪购时间倒计时
	// 设置截止时间
	var dead_h = 22;
	var dead_m = 30;
	var dead_s = 0;

	var countdown = function () {

		// 获取当前时间
		var myDate = new Date();            	 
		var h=myDate.getHours();              
		var m=myDate.getMinutes();          
		var s=myDate.getSeconds();

		// 计算当前时间与结束时间之间的时间差.先换算成秒
		var seconds = (dead_h * 3600 + dead_m * 60 + dead_s) - (h * 3600 + m * 60 + s)

		if (seconds <= 0)
		{
			clearInterval(timer1);
		}

		// 将秒换算成小时和分钟
		diff_h = parseInt(seconds / 3600);
		diff_m = parseInt((seconds % 3600) / 60);
		diff_s = seconds - diff_h * 3600 - diff_m * 60;

		$('.page_main .countdown #hour').html(diff_h);
		$('.page_main .countdown #minute').html(diff_m);
		$('.page_main .countdown #second').html(diff_s);
		
	};
	clearInterval(timer1);
	var timer1 = setInterval(countdown, 1000);


	// 小米闪购商品区域动画设置
	var stage_now = 1;
	var stage_all = 3;

	var is_left_move = true;

	// 向左移动函数，通过修改left的值进行修改，
	var left_move = function () {


		$('.home-flashsale-content').each(function (index, element) {

				var new_left = element.offsetLeft - 992;
				$(element).stop().animate({"left":new_left}, 1000);
			});

		stage_now += 1;
	};

	// 向右移动函数
	var right_move = function () {

		$('.home-flashsale-content').each(function (index, element) {

				var new_left = element.offsetLeft + 992;
				$(element).stop().animate({"left":new_left}, 1000);
			});
		stage_now -= 1;
		
	};

	// 此函数用于判断箭头改变闪购内容，箭头的样式,每一次移动就进行判断即可
	var isable_arry_change = function (stage_now) {

		if (stage_now <= 1)
		{
			$('.swiper-flashsale-next').css({
				'color': '#e0e0e0',
				'cursor': 'not-allowed'
			});

		}else if (stage_now >= stage_all)
		{
			$('.swiper-flashsale-prev').css({
				'color': '#e0e0e0',
				'cursor': 'not-allowed'
			});

		}else{
			$('.swiper-flashsale-next').css({
				'color': '#333',
				'cursor': 'pointer'
			});
			$('.swiper-flashsale-prev').css({
				'color': '#333',
				'cursor': 'pointer'
			});

		};
		
	};

	// 一开始需要判断一下箭头的样式
	isable_arry_change(stage_now);

	// 判断是左移还是右移动
	function show_shangou_good() {


		if(is_left_move)
		{	
			left_move();
			isable_arry_change(stage_now);

			
			if(stage_now >= stage_all)
			{
				is_left_move = false;	

			}
		}else{
			
			right_move();
			isable_arry_change(stage_now);

			if(stage_now <= 1)
			{
				is_left_move = true;
			}
		};
	};

	// 设置定时器
	var timer3 = setInterval(show_shangou_good, 10000);


	// 设置箭头改变内容部分
	$('.swiper-flashsale-prev').click(function(event) {

		console.log(132)

		if (stage_now >= stage_all)
		{
			is_left_move = false;
		}else{
			left_move();
			isable_arry_change(stage_now);
		}

		// 这是因为变量的更新要等到left_move函数执行之后
		if (stage_now >= stage_all)
		{
			is_left_move = false;
		};
	
	});

	$('.swiper-flashsale-next').click(function(event) {
		if (stage_now <= 1)
		{
			is_left_move = true;
		}else{
			right_move();
			isable_arry_change(stage_now);
		};

		// 这是因为变量的更新要等到right_move函数执行之后
		if (stage_now <= 1)
		{
			is_left_move = true;
		};

	});









});
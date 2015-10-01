//动画相关
var babyAnimateCtrl=angular.module('babyAnimations',['ngAnimate']);
//选中.animated的元素(事先在dom中添加该类元素),这一类的js动画需要第三方库的支持
babyAnimateCtrl.animation('.animated',function(){
	return {
		//执行enter动画
		enter: function(ele,done){
			var h=$(ele).outerHeight();
			$(ele).css({'height':0,'opacity':0});
			$(ele).animate({height:h,opacity:1});
		},
		//执行leave动画
		leave: function(ele,done){
			$(ele).animate({height:0,opacity:0},'swing',done);
		},
		move: function(ele,done){
			$(ele).hide().slideDown();
		}
	}
});

//view进场动画
babyAnimateCtrl.animation('.view',function(){
	return {
		enter:function(ele,done){
			$(ele).hide().fadeIn(400,done);
		}
	}
});



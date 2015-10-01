//主程序
var babyApp=angular.module('ngBabyApp',[
		'ngRoute',
		'babyControllers',
		'babyAnimations'
	]);

//路由模块

babyApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/list',{
		templateUrl:'./views/list.html',
		controller:'babyIndexController'
	})
	.when('/detail/:query',{
		templateUrl:'./views/detail.html',
		controller:'babyDetailController'
	})
	.otherwise({
		redirectTo:'/list',
		controller:'babyIndexController'
	});
}]);

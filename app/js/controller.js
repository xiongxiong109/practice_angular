//控制器模块,添加服务的时候一定要记得给模块注入对应服务的模块ngResource
var babyListCtrl=angular.module('babyControllers',['ngResource']);

//添加具体控制器
/*
*index控制器,负责加载服务端json数据,并显示到前端
*/
babyListCtrl.controller('babyIndexController',['$scope','$resource',function($scope,$resource){
	//获取服务器资源
	var babies=$resource('./data/baby.json');
	$scope.babyListData=babies.query({
		method:'GET',
		isArray:true
	});

	//添加绑定select数据
	$scope.filterSelectorArr=[
		{
			name:'姓名',
			origin:'name',
		},
		{
			name:'年龄',
			origin:'age'
		}
	];
	$scope.defaultSelect=$scope.filterSelectorArr[0];

	//绑定筛选数据,默认按照年龄顺序排序
	$scope.filterSelect=$scope.defaultSelect.origin;
	//改变筛选条件
	$scope.changeFilter=function(){
		$scope.filterSelect=$scope.defaultSelect.origin;
	}

	//瀑布流布局
	// setTimeout(function(){
	// 	$("#listWaterFall").masonry({
	// 		itemSelector:'.animated'
	// 	});
	// },200);
}]);

//详情控制器
/*
*根据不同的查询,加载不同的数据文件
*/
babyListCtrl.controller('babyDetailController',['$scope','$resource','$routeParams',function($scope,$resource,$routeParams){
	var queryName=$routeParams.query;
	//根据路由内容拼接需要请求的json文件
	var babyDetailData=$resource('./data/'+queryName+'.json');
	$scope.detailData=babyDetailData.get();
}]);


'use strict';

/* Controllers */
define(['app'], function (app) {
	app.controller('ProductsCtrl', function ($scope, $routeParams) {
  	$scope.testId = $routeParams.testId;
//  	console.log(Products);
//  	$scope.products = Products.get();
  });
  app.controller('MyCtrl2', function () {});
  return app;
});

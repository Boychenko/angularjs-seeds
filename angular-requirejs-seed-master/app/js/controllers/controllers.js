'use strict';

/* Controllers */
define(['app'], function (app) {
	app.controller('ProductsCtrl', function ($scope, $routeParams, Products) {
  	$scope.testId = $routeParams.testId;
//  	console.log(Products);
  	$scope.product = Products.get();
  });
  app.controller('MyCtrl2', function () {});
  return app;
});

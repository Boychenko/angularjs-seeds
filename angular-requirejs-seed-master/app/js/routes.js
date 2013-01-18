define([
  'app',
  'controllers/controllers'
], function(app, controller) {
  return app.config(['$routeProvider', function($routeProvider) {
    console.log(controller);
    $routeProvider.when('/view1/:testId', {
      templateUrl: 'partials/partial1.html',
      controller: 'ProductsCtrl'
    });
    $routeProvider.when('/view2', {
      templateUrl: 'partials/partial2.html',
      controller: 'MyCtrl2'
    });
    $routeProvider.otherwise({redirectTo: '/view1/1'});
  }]);

});

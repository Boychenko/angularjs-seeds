/* Services */
define(['angular', 'angularResource'], function(angular){
angular.module('productServices', ['ngResource']).
    factory('Products', function($resource){
    var get = function(){
    	return {name: 'test'};
    };
    return {
    	get: get
    };
  });
});
'use strict';

/* Services */

define(['app'], function (app) {
    return app.value('version', '0.1');
});

/* Services */
/*define(['angular', 'angularResource'], function(angular){
angular.module('productServices', ['ngResource']).
    factory('Products', function($resource){
    var get = function(){
    	return {name: 'test'};
    };
    return {
    	get: get
    };
  });
});*/
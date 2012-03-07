
/*!
 * @module AngularBlog
 */

/*!
 * BlogService
 */

function BlogService($http) {
  var _BlogService = {};
  _BlogService.get = function(callback) {
    $http({ method : 'GET', url : 'json/blog.json' }).success(function(response, statusCode) {
      if (statusCode === 200 || 304) {
        callback(null, response);
      } else {
        callback(new Error(response), null);
      }
    }).error(function(response, statusCode) {
      callback(new Error(response), null);
    });
  };
  return _BlogService;
};

/*!
 * App Module
 */

var angularBlogApp = angular.module('angularBlogApp', [], function($locationProvider, $filterProvider, $provide, $httpProvider) {
  $provide.factory('BlogService', function($http) {
    return new BlogService($http);
  });

}, { inject : ['$http', '$location', '$log']} )

angularBlogApp.config(function($locationProvider) {  
  $locationProvider.hashPrefix('');
});

/*!
 * Routing Controller
 */

RoutingController.$inject = ['$route'];

function RoutingController($route) {
  $route.when('/blog/', {
    template: 'partials/blog.html',
    controller: BlogController
  });
  $route.when('/blog/on-blogging/', {
    template: 'partials/blog.html',
    controller: BlogController
  });
  $route.otherwise({ 
    redirectTo: '/blog/'
  });
  $route.parent(this);
};

BlogController.$inject = ['BlogService'];

function BlogController(BlogService) {
  var scope = this;
};

/* EOF */
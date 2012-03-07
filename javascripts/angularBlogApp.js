
/*!
 * @module AngularBlog
 */

var angularBlogApp = angular.module('angularBlogApp', [], function($locationProvider, $filterProvider, $provide, $httpProvider) {
  $provide.factory('BlogService', function($http, $location, $log) {
    //return new BlogService($http, $location, $log);
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
    template: '/partials/blog.html',
    controller: BlogController
  });
  $route.otherwise({ 
    redirectTo: '/blog/'
  });
  $route.parent(this);
};

BlogController.$inject = ['$location'];

function BlogController($location) {
  var scope = this;
};

/* EOF */
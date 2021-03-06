define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato){

  var module = angular.module('app.modules.layout', ['ui.router']);

  couchPotato.configureApp(module);

  module.config(function($stateProvider, $couchPotatoProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        data: {
          title: 'Layout View'
        },
        views: {
          root: {
            templateUrl: 'app/modules/layout/views/layout.html',
            controller: 'LayoutCtrl',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'modules/layout/controllers/LayoutCtrl'
              ])
            }
          }
        }
      });

    // load the default layout
    $urlRouterProvider.otherwise('/app');
  });

  module.run(function($couchPotato, $rootScope, $state, $stateParams){
    module.lazy = $couchPotato
  });

  return module;
});

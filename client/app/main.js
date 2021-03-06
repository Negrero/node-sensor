// Defer AngularJS bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

define(['require',
        'jquery',
        'angular',
        'domReady',
        'bootstrap',
        'app',
        'includes'
], function (require, $, ng, domReady) {
  'use strict';

  domReady(function (document) {
    ng.bootstrap(document, ['app']);
    ng.resumeBootstrap();
  });
});

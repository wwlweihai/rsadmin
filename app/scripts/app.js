/**
 * Created by ww on 2015/3/24.
 */
angular.module('app', [
    'app.core',
    'app.config',
    'app.directive',
    'app.controller'
]);
angular.module('app.core', [
    /*3rd-party modules*/
    //restful request tool
    'restangular',
    'ui.bootstrap',
    'ui.tree',
    'ui.router'
    //'ui.bootstrap'
]);
angular.module('app.config', ['ui.router']);
angular.module('app.controller', []);
angular.module('app.directive', []);


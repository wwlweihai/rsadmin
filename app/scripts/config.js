/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        '$stateProvider',
        '$urlRouterProvider',
        'RestangularProvider',
        config
]);

function config($stateProvider, $urlRouterProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('/localData');
    $urlRouterProvider.otherwise('/app/userMg/userGroup');
    $urlRouterProvider.otherwise('/signin');
    $stateProvider
    .state('signin', {
        url: "/signin",
        templateUrl: "modules/signin/signin.html"
    })
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'modules/layout/app.html'
    })
    .state('app.infoMg', {
        url: '/infoMg',
        views:{
            'appContentView':{
                templateUrl: 'modules/infoMg/infoIndex.html'
            }
        }
    })
    .state('app.userMg', {
        url: '/userMg',
        views:{
            'appContentView':{
                templateUrl: 'modules/userMg/userIndex.html'
            }
        }
    })
    .state('app.userMg.userGroup', {
        url: '/userGroup',
        views:{
            'centerBoard':{
                templateUrl: 'modules/userMg/userGroup/userGroup.html',
                controller:'userGroupCtrl'
            }
        }
    })
    ;
}

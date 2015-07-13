angular.module('app.controller')
.controller('mainCtrl',mainCtrl);

mainCtrl.$inject = [
    '$rootScope',
    '$state',
    '$scope'
];

function mainCtrl($rootScope,$state,$scope) {
    $rootScope.$on('$ionicView.beforeEnter', function () {
        var stateName = $state.current.name;
        if (stateName === 'tab.chats' ||
            stateName === 'tab.friends' ||
            stateName === 'tab.cooperation' ||
            stateName === 'tab.self') {
            $rootScope.hideTabs = false;
        } else {
            $rootScope.hideTabs = true;
        }
    });
}



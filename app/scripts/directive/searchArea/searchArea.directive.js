angular.module('app.directive')
.directive('searchAreaDirective',searchAreaDirective);

function searchAreaDirective() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directive/searchArea/searchArea.html',
        scope: {

        },
        restrict: 'E',
        controller:'searchAreaController'
    };
    return directive;

    function link(scope, element, attrs) {

    }
}



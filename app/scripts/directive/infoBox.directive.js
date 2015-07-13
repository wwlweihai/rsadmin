angular.module('app.directive')
.directive('infoBox',infoBox);
infoBox.$inject = [
];

function infoBox() {
    var directive = {
        link: link,
        scope: {
        },
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        var boxHeader = angular.element('<div class="info-box-header">'+
                                            '<div class="info-box-name">'+
                                                attrs.headerName+
                                            '</div>'+
                                            '<div class="more">'+'更多</div>' +
                                        '</div>');
        element.append(boxHeader);
    }
}



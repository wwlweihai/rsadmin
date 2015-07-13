angular.module('app.directive')
.directive('cname',[
    function cname() {
        var directive = {
            link: link,
            templateUrl: '',
            scope: {

            },
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('click',function(){
                console.log('指令载入成功');
            });
        }
    }
]);





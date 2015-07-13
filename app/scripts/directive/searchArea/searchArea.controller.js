angular.module('app.controller')
.controller('searchAreaController', searchAreaController);
searchAreaController.$inject = [
	'$scope'
];
function searchAreaController($scope) {
    $scope.data = {};
    $scope.data.showAdvance = false;
    $scope.toggleAdvanceSearch = toggleAdvanceSearch;
	activate();
	////////////////
	function activate() {
	}

    function toggleAdvanceSearch(){
        console.log('toggleAdvanceSearch');
        $scope.data.showAdvance = !$scope.data.showAdvance;
    }
};

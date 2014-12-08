angular.module('app',[]);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{title: 'Sales Person', description: 'you will sell stuff'},
                    {title: 'Teacher', description: 'you will show maths to the students'}];
})
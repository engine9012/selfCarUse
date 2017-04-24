/**
 * Created by jingren on 17/4/23.
 */
angular.module('starter')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('private_car_address_certain', {
            url: '/private/car/address/certain',
            templateUrl: 'js/privateCarUser/private.car.address.html',
            controller: 'com.handchina.huilianyi.PrivateCarAddressCertainController'
        })
    }])
    .controller('com.handchina.huilianyi.PrivateCarAddressCertainController', function ($scope, $state, $ionicLoading, $timeout) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            viewData.enableBack = true;
        });

        $scope.show = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $scope.hide = function(){
            $ionicLoading.hide();
        };

        $scope.goTo = function () {
            $scope.show();
            $timeout(function () {
                $scope.hide();
                $state.go('private_car_for_public', {'dest': '上海佳通轮胎（长宁区临虹路280 - 2号楼）'});
            },1000);
        }
    });

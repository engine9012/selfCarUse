/**
 * Created by jingren on 17/4/23.
 */
angular.module('starter')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('private_car_settings', {
            url: '/private/car/settings',
            templateUrl: 'js/privateCarUser/private.car.settings.html',
            controller: 'com.handchina.huilianyi.PrivateCarSettingsController'
        })
    }])
    .controller('com.handchina.huilianyi.PrivateCarSettingsController', function ($scope, $state) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            viewData.enableBack = true;
        });

        $scope.view = {
            versions: [
                {
                    id: 1,
                    date: '2017年01月－2017年12月'
                },
                {
                    id: 2,
                    date: '2017年07月－2017年12月'
                },
                {
                    id: 3,
                    date: '2016年01月－2017年06月'
                }
            ],
            goTo: function () {
                $state.go('private_car_settings_show');
            }
        }
    });

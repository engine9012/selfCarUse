/**
 * Created by jingren on 17/4/23.
 */
angular.module('starter')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('private_car_settings_show', {
            url: '/private/car/settings/show',
            templateUrl: 'js/privateCarUser/private.car.settings.show.html',
            controller: 'com.handchina.huilianyi.PrivateCarSettingsShowController'
        })
    }])
    .controller('com.handchina.huilianyi.PrivateCarSettingsShowController', function ($scope, $state) {
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
                $state.go('private_car_for_public');
            }
        }
    });

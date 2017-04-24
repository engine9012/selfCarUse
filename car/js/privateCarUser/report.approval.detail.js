/**
 * Created by jingren on 17/4/23.
 */
angular.module('starter')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('report_approval_detail', {
            url: '/report/approval/detail',
            templateUrl: 'js/privateCarUser/report.approval.detail.tpl.html',
            controller: 'com.handchina.huilianyi.reportApprovalDetailController'
        })
    }])
    .controller('com.handchina.huilianyi.reportApprovalDetailController', function ($scope, $state, $timeout, $rootScope) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            viewData.enableBack = true;
        });

        $scope.view = {
            sheetList: [
                {
                    date: '4月25日',
                    name: '私车公用',
                    lenght: '5.0km',
                    start: '14:34   上海金环商务花园16号楼...',
                    end: '15:20   上海佳通轮胎 （长宁区临虹路...'
                },
                {
                    date: '4月21日',
                    name: '私车公用',
                    lenght: '25.8km',
                    start: '16:34   上海市真北路958号天地科技...',
                    end: '17:20   上海市中环广场'
                },
                {
                    date: '4月20日',
                    name: '私车公用',
                    lenght: '50.3km',
                    start: '16:34   上海市真北路958号天地科技...',
                    end: '17:20   上海市松江体育馆'
                }
            ]
        }
        $scope.goTo = function (url) {
            $rootScope.show();
            $timeout(function () {
                $rootScope.hide();
                $state.go(url);
            }, 500);
        }
    });

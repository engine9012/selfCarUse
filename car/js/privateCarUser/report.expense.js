/**
 * Created by jingren on 17/4/23.
 */
angular.module('starter')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('report_expense', {
            url: '/report/expense',
            templateUrl: 'js/privateCarUser/report.expense.tpl.html',
            controller: 'com.handchina.huilianyi.reportExpenseController',
            resolve: {
                content: function () {
                    return 'create'
                }
            }
        })
    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('report_expense_passed', {
            url: '/report/expense/passed',
            templateUrl: 'js/privateCarUser/report.expense.tpl.html',
            controller: 'com.handchina.huilianyi.reportExpenseController',
            resolve: {
                content: function () {
                    return 'passed'
                }
            }
        })
    }])
    .controller('com.handchina.huilianyi.reportExpenseController', function ($scope, $state, content, $timeout, $rootScope) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            viewData.enableBack = true;
        });

        console.log(content)
        $scope.view = {
            content: content,
            reportList: [
                {
                    code: 'No.3894056004',
                    date: '2017-04-25',
                    name: '私车公用报销单',
                    status: '编辑中',
                    useTime: '2017年4月',
                    lenght: '5.0km',
                    total: 'CNY 40.00'
                },
                {
                    code: 'No.3894056014',
                    date: '2017-04-20',
                    name: '私车公用报销单',
                    status: '编辑中',
                    useTime: '2017年4月',
                    lenght: '300km',
                    total: 'CNY 400.00'
                },
                {
                    code: 'No.3894056024',
                    date: '2017-04-09',
                    name: '私车公用报销单',
                    status: '编辑中',
                    useTime: '2017年4月',
                    lenght: '500km',
                    total: 'CNY 500.00'
                }
            ]
        }
        $scope.goTo = function (arg) {
            $rootScope.show();
            $timeout(function () {
                $rootScope.hide();
                $state.go('report_expense_detail', {arg: arg});
            }, 500);
        }
    });

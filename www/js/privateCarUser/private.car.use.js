/**
 * Created by jingren on 17/4/23.
 */
'use strict';

angular.module('starter')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('private_car_for_public', {
      url: '/private/car/for/public/{dest}',
      templateUrl: 'js/privateCarUser/private.car.use.tpl.html',
      controller: 'com.handchina.huilianyi.PrivateCarForPublicController'
    })
  }])
  .controller('com.handchina.huilianyi.PrivateCarForPublicController', ['$scope', '$ionicModal', '$state', '$stateParams', '$ionicPopup', '$timeout', '$ionicLoading', '$rootScope', function ($scope, $ionicModal, $state, $stateParams, $ionicPopup, $timeout, $ionicLoading, $rootScope) {
      $scope.goBack = function () {
          if (ionic.Platform.isIOS()) {
              cordova.exec(null, null, "BridgePlugin", "closeWebView", []);
          } else if(ionic.Platform.isAndroid()) {
              var dict = {
                  "className": "WebBridge",
                  "function": "close",
                  "successCallBack": "ACallBack",
                  "failureCallBack": "bCallBack"
              };
              HandBridge.postMessage(JSON.stringify(dict));
          }
      }

      /*$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
          viewData.enableBack = true;
      });*/

      // console.log($stateParams.dest)

      $scope.view = {
          status: 0,
          dest: $stateParams.dest,
          showSearchBtn: false,
          showSearchResult: false,
          historyAddress: [
              {
                  id: 1,
                  address: '上海佳通轮胎 （长宁区临虹路280 - 2号楼）'
              },
              {
                  id: 2,
                  address: '上海市真北路958号天地科技广场'
              },
              {
                  id: 3,
                  address: '上海市真北路958号天地科技广场'
              }
          ],
          sheetList: [
              {
                  date: '2017-04-25',
                  journey: '5.0km',
                  start: '上海金环商务花园16号楼',
                  end: '上海佳通轮胎 （长宁区临虹路…'
              },{
                  date: '2017-04-24',
                  journey: '21km',
                  start: '上海市真北路958号天地科技广场',
                  end: '上海市淮海中路中环广…'
              },{
                  date: '2017-04-16',
                  journey: '56km',
                  start: '上海市真北路958号天地科技广场',
                  end: '上海市淮海中路中环广…'
              },{
                  date: '2017-04-12',
                  journey: '32km',
                  start: '上海市真北路958号天地科技广场',
                  end: '上海市淮海中路中环广…'
              }
              ,{
                  date: '2017-04-08',
                  journey: '28.9km',
                  start: '上海市真北路958号天地科技广场',
                  end: '上海市淮海中路中环广…'
              },{
                  date: '2017-04-05',
                  journey: '28.9km',
                  start: '上海市真北路958号天地科技广场',
                  end: '上海市淮海中路中环广…'
              }

          ]
      }

      //添加交通
      $ionicModal.fromTemplateUrl('js/privateCarUser/private.car.dest.search.tpl.html', {
          scope: $scope,
          animation: 'slide-in-up'
      }).then(function (modal) {
          $scope.selectCity = modal;
      });

      //弹出框，行程列表
      $scope.showPop = function () {
          $scope.sheetPopup = $ionicPopup.show({
              cssClass: 'sheet-pop',
              title: '<img src="img/car/title.png">',
              scope: $scope,
              templateUrl: 'js/privateCarUser/private.car.sheet.html',
              buttons: [{ text: '关闭' }]
          })
              .then(function () {
                  $scope.view.showSearchBtn =  false;
                  $scope.view.showSearchResult = false;
                  $scope.view.status = 0;
                  $scope.view.dest = null;
                  // $state.go('private_car_for_public')
              })
      }

      $scope.show = function() {
          $ionicLoading.show({
              template: 'Loading...'
          });
      };
      $scope.hide = function(){
          $ionicLoading.hide();
      };

      $scope.operations = {
          addDest: function () {
              $scope.selectCity.show();
          },
          closeModal: function() {
              $scope.selectCity.hide();
          },
          search: function () {
              $scope.show();
              $timeout(function () {
                  $scope.operations.closeModal();
                  $scope.hide();
                  $state.go('private_car_address_certain');
              },1500);
          },
          checkStatus: function (status) {
              if(status === 'running'){
                  $scope.view.status = 1;
              }else if(status === 'over'){
                  $scope.view.status = 2;
              }else if(status === 'overd'){
                  $ionicPopup.show({
                      template: '<div><div>出发地</div><div>上海金环商务花园16号楼</div><div>目的地</div><div>上海佳通轮胎（长宁区临虹路280 - 2号楼）</div><div>里程</div><div>5.0km</div></div>',
                      title: '请确认行程',
                      scope: $scope,
                      buttons: [
                          { text: '取消' },
                          {
                              text: '<b>确定</b>',
                              type: 'button-positive',
                              onTap: function(e) {
                                    $scope.showPop()
                              }
                          },
                      ]
                  })
              }
          },
          goTo: function () {
              $state.go('private_car_settings')
          }
      }

      $scope.goTo = function (url) {
          $rootScope.show();
          $timeout(function () {
              $rootScope.hide();
              $state.go(url);
          }, 500);
      }
  }])
;

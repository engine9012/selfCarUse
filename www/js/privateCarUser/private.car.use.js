/**
 * Created by jingren on 17/4/23.
 */
'use strict';

angular.module('starter')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('private_car_for_public', {
      url: '/private/car/for/public',
      templateUrl: 'js/privateCarUser/private.car.use.tpl.html',
      controller: 'com.handchina.huilianyi.PrivateCarForPublicController',
    })
  }])
  .controller('com.handchina.huilianyi.PrivateCarForPublicController', ['$scope', function ($scope) {
        console.log("mmmm")
  }])
;

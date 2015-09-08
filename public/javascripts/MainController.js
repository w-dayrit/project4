(function() {
  'use strict';

  angular
    .module('lineUp')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$http'];

  function MainController($scope, $http) {
    $scope.text = "HELLO WOORLLLLLDSTAAARRRRRRR"
  }

})();

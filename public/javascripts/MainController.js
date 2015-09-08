(function() {
  'use strict';

  angular
    .module('lineUp')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$http', '$resource'];

  function MainController($scope, $http, $resource) {
    $scope.text = "HELLO WOORLLLLLDSTAAARRRRRRR"
  }

})();

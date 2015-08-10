'use strict';

angular.module('validationTest',['ez-angular-validation'])
    .controller('basicTest', function ($scope,EV) {

        EV.init($scope,"basicForm");

        $scope.i_strategy_opts = [
            {id: "Lower_or_Raise", name: "Lower or Raise my Buy Box price"},
            {id: "Raise", name: "Lower my Buy Box price to stay competitive"},
            {id: "Lower", name: "Raise my Buy Box price to maximize profit"},
            {id: "Do_not_change", name: "Do not change my Buy Box price"},
            {id: "Disable", name: "Disable Buy Box Settings"}
        ];

        $scope.ok = function () {
            if (EV.validation()) {
                alert("OK");
            }else{
               // alert("Has Error.");
            }
        };

    });

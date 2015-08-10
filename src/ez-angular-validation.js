'use strict';

angular.module('ez-angular-validation', []);
angular.module('ez-angular-validation')
    .factory('EV', function ($rootScope) {

        var _$scope = null;
        var _$form = null;
        var _formName = null;

        $('body').on('mouseover', '*[ng-model]', function () {
            var $ele = $(this);
            if ($ele.hasClass('ev-error')) {
                $(this).popover({
                    'html': true,
                    'placement': 'top',
                    'trigger': 'hover'
                });
            } else {
                $ele.popover('hide');
            }
        }).on('mouseleave', '*[ng-model]', function () {
            var $ele = $(this);
            var name = $ele.attr('name');
            $ele.removeAttr('data-content');
            if (!_$form[name].$invalid) {
                $ele.removeClass('alert-danger');
                $ele.removeClass('ev-error');
            } else {
                angular.forEach(_$form[name].$error, function (error, ttype) {
                    addErrorMsg(ttype, $ele);
                });
            }
        });

        function addErrorMsg(ttype, ele) {
            ele.addClass('ev-error');
            ele.addClass('alert-danger');
            var msg = ele.attr('data-content');
            if (!msg) {
                msg = '';
            }
            switch (ttype) {
                case 'required':
                    msg += '* 必填项<br/>';
                    break;
                case 'number':
                    msg += '* 必须是数字<br/>';
                    break;
                case 'email':
                    msg += '* 邮件格式错误<br/>';
                    break;
                case 'min':
                    msg += '* 数字要大于' + ele.attr('min') + '<br/>';
                    break;
                case 'max':
                    msg += '* 数字要小于' + ele.attr('max') + '<br/>';
                    break;
                case 'minlength':
                    msg += '* 长度要大于' + ele.attr('ng-minlength') + '<br/>';
                    break;
                case 'maxlength':
                    msg += '* 长度要小于' + ele.attr('ng-maxlength') + '<br/>';
                    break;
                case 'pattern':
                    var rMsg = ele.attr('r-msg');
                    if (rMsg) {
                        msg += '* ' + rMsg + '<br/>';
                    } else {
                        msg += '* 正则不匹配<br/>';
                    }
            }
            ele.attr('data-content', msg);
        }


        function validation() {
            $('form[name=' + _formName + '] .form-control').each(function () {
                $(this).removeAttr('data-content');
            });
            var isPass=true;
            angular.forEach(_$form.$error, function (eles, ttype) {
                for (var i = 0; i < eles.length; i++) {
                    var ele = angular.element(document.querySelectorAll('[name=' + eles[i].$name + ']'));
                    if(!ele.attr('ng-show') || _$scope.$eval(ele.attr('ng-show'))) {
                        addErrorMsg(ttype, ele);
                        isPass=false;
                    }
                }
            });
            return isPass;
        }

        return {
            init: function ($scope, formName) {
                $scope.$watch(formName, function () {
                    _$scope = $scope;
                    _$form = $scope[formName];
                    _formName = formName;
                });
            },
            validation: function () {
                return validation();
            }
        }
    });



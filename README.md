AngularJS 1.4.x ԭ������֤��չ
===

![Demo](demo/demo.png)

## ��չ����

1. ֧��Bootstrap���Ĵ�����ʾ
1. ֧�ּ�ʱ������������뿪ʱ��֤��

## ��֤����
 
 ֧�ֵ����� |  ���� | ʾ��
 -------------- | ------------------- | ------------------------------------------
 ���� | required | &lt; input name="demo" ng-model="demo" required class="form-control" /&gt;
 ���� | type="number" |  &lt; input name="demo" ng-model="demo" type="number" class="form-control" /&gt;
 Email | type="email" |  &lt; input name="demo" ng-model="demo" type="email" class="form-control" /&gt;
 �����Сֵ | min/max |  &lt; input name="demo" ng-model="demo" type="number" min="0" max="23" class="form-control" /&gt;
 �����С���� | min/max |  &lt; input name="demo" ng-model="demo" ng-minlength="3" ng-maxlength="8"  class="form-control" /&gt;
���� | pattern [r-msg] |  &lt; input name="demo" ng-model="demo" pattern="(([0-9])|(1\d)|(2[0-3]))" r-msg="������0-24�������"  class="form-control" /&gt;

* r-msg : �Զ������������ʾ�����Բ�д
* ����������֤���統xx��������ʱ��Ҫ��֤��������Ҫ��

         <input name="demo" ng-model="demo" required class="form-control" ng-if="otherModelName==true" />

## �÷�

HTML��

    <form name="<form name>" novalidate>
        <X [type="<HTML5 support type>"] ng-model="model name" [min=""] [max=""] [ng-minLength=""] [ng-maxlength=""] [required] [pattern=""] [r-msg=""] />
        ...
    </from>
 
JS��

    angular.module('<module name>',['ez-angular-validation'])
        .controller('<controller name>', function ($scope,EV) {
    
            EV.init($scope,"<form name>");
    
            $scope.<submit function name> = function () {
                if (EV.validation()) {
                    // pass
                }else{
                   // error
                }
            };
    
        });
    
## ����

1. AngularJS 1.4.x
1. Bootstrap 3.x
1. Jquery >= 1.8
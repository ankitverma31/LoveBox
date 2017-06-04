var calculate = angular.module("loveCalculator",[]);
calculate.controller("loveCtrl",function($scope){
  $scope.calculate = function(){
    var sum = 0;
    var sum1 = 0;
    var me = $scope.myName.toUpperCase();;
    var crush = $scope.crushName.toUpperCase();;
    for(var i =0;i<me.length;i++){
      var n = me.charCodeAt(i);
      sum=sum+n;
    }
    for(var i =0;i<crush.length;i++){
      var n = crush.charCodeAt(i);
      sum1=sum1+n;
    }
    var total = sum+sum1;
    var percentage =total%100;
    $scope.percentage = percentage ;
    $scope.name = true;
    $scope.me=$scope.myName;
    $scope.crush = $scope.crushName;
     document.getElementById('count').innerHTML=percentage;
    $('#count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  };
});

//--------------------------- SoulMate Function--------------------------- 


var soulmate = angular.module("soulMate",[])
soulmate.controller("soulMateCtrl",function($scope){
  $scope.findSoulMate = function(){
    $scope.smMyName.textRequired = true;
    $scope.soulMateName=true;
  };
});

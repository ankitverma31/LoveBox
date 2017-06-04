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
    // Display Message Timeout Function Start
    setTimeout(function(){
      if (percentage>=90 && percentage<=100){
        if(!alert('Made For Each Other, A Perfect Match!')){window.location.reload();}
      }
      else if (percentage>=80 && percentage<90){
        if(!alert('Change Your Name Else Lend Your Surname')){window.location.reload();}
      }
      else if (percentage>=70 && percentage<80){
        if(!alert('Worth Taking Risk!Go Ahead...')){window.location.reload();}
      }
      else if (percentage>=60 && percentage<70){
        if(!alert('Still High Chances Of Getting Together')){window.location.reload();}
      }
      else if (percentage>=50 && percentage<60){
        if(!alert('There Are No Half Measures, Do or Die For You')){window.location.reload();}
      }
      else if (percentage>=40 && percentage<50){
        if(!alert('A Lot Of Effort Required From Both Sides!')){window.location.reload();}
      }
      else if (percentage>=30 && percentage<40){
        if(!alert('Try Becoming A Puppy For Him/Her!Might Work...')){window.location.reload();}
      }
      else if (percentage>=20 && percentage<30){
        if(!alert('Try Becoming A Puppy For Him/Her!Might Work...')){window.location.reload();}
      }
      else if (percentage>=0 && percentage<10){
        if(!alert('Try Searching: Ways To Commit Sucide!')){location.href = 'https://www.youtube.com/watch?v=ncdLBvFIIco';}
      }


  }, 5000);
  // Display Message Timeout Function End
     document.getElementById('count').innerHTML=percentage;
    $('#count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
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
  $scope.doCheck = function () {
        if (!$scope.smMyName) {
            $scope.soulMateName=false;
            //  alert('too long');
        }
    }
  $scope.findSoulMate = function(){
    $scope.smMyName.textRequired = true;
    $scope.soulMateName=true;
  };
});

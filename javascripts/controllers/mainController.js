app.controller('MainController', [
'$scope',
function($scope,$window,$cookiestore){
  $scope.test = 'Hello world!';
  /*login function*/
  $scope.loginUser = function(){
      signinWin = window.open("/auth/facebook", "SignIn", "width=780,height=410,toolbar=0,scrollbars=0,status=0,resizable=0,location=0,menuBar=0");
      signinWin.focus();
      return false;
  }
  function CheckLoginStatus() {
	    if (signinWin.closed) {
	        $('#UserInfo').text($.cookie("some_cookie");
	    }
	    else setTimeout(CheckLoginStatus, 1000);
	}
}]);
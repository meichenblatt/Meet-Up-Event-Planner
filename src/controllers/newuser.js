EventApp.controller('newuserController', function ($scope){


	$scope.createAccount = function (){

		alert("You account have been created successfully :)");
		window.location.href = "/";
	}

	$scope.validate = function(inputID){

		if (document.getElementById(inputID).validationMessage) {
			document.getElementById(inputID).style.borderColor = "red";
		} else{
			document.getElementById(inputID).style.borderColor = "#32CD32";
		}

		if(inputID == "email"){
			if(document.getElementById(inputID).validationMessage){
				$scope.emailError = "Please enter a valid Email";
			} else {
				$scope.emailError = '';				
			}
		}

		if(inputID == "password"){
			if(document.getElementById(inputID).validationMessage){
				$scope.passwordError = "Your password must have an UpperCase, LowerCase, Number/SpecialChar and min 8 Chars";
			} else {
				$scope.passwordError = '';				
			}
		}
		
	}

	document.getElementById('name').focus();
});

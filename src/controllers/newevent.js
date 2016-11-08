EventApp.controller('neweventController', function($scope, $rootScope, $location) {

	$scope.createEvent = function(){

		var newEvent = {
			"Name": $scope.ename, 
			"Type": $scope.etype, 
			"Host": $scope.host, 
			"Start": $scope.start, 
			"End": $scope.end,
			"Guests": $scope.guests, 
			"Location": $scope.location, 
			"Message": $scope.message 	
		}

		$rootScope.allEvents.push(newEvent);

		$location.path("/");

	}

	$scope.validate = function(inputID){

		if (document.getElementById(inputID).validationMessage) {
			document.getElementById(inputID).style.borderColor = "red";
		} else{
			document.getElementById(inputID).style.borderColor = "#32CD32";
		}

		if(inputID === "start"){
			var now = new Date();
			if($scope.start < now){
				document.getElementById(inputID).style.borderColor = "red";
				$scope.startMessage = "Events can't start in the past";
			} else{
				$scope.startMessage = '';
			}
		}

		if(inputID === "end"){
			if($scope.end <= $scope.start){
				document.getElementById(inputID).style.borderColor = "red";
				$scope.endMessage = "Event End date-time can not take place before or at the same time as Event Start date-time.";
			} else {
				$scope.endMessage = '';
			}
		}
		
	}

	document.getElementById('ename').focus();
	
});

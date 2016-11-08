EventApp.controller('eventsController', function($scope, $rootScope) {

	var events = [
    	{"Name": "Annas Birthday", "Type": "Birthday", "Host": "Anna", "Start": "8/12/2016 4:30 PM", "End": "8/12/2016 9:30 PM", "Guests":"James, Joe, Lue, Dale, Abigail","Location": "Griffith Park", "Message": "I can't wait to see you all:)"},
    	{"Name": "James and Kerrys Wedding", "Type": "Wedding", "Host": "Kerry", "Start": "9/15/2016 6:30 PM", "End": "9/15/2016 10:30 PM","Guests":"Luna, Adele, Josh, Henry", "Location": "Hilton Hotel", "Message": "Thank you for joining!"},
    	{"Name": "Tech Conference", "Type": "Conference", "Host": "Tech Co", "Start": "11/1/2016 1:00 PM", "End": "11/1/2016 5:00 PM","Guests":"Mr. Bee, Matis Green, Joe Smith, Patty, Jones", "Location": "Westin Hotel", "Message": ""},
    	];

	if($rootScope.allEvents === undefined){
		$rootScope.allEvents = events;
	}	
	
});


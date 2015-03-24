var app = angular.module("OnlineUniversity", []);

app.controller("OnlineUniversityController",
function ($scope, $http)
{

    $scope.editCourse = function(course) {
    	$scope.newCourse = { name : "farts", category : "PROG", dateCreated : "2015-01-18", description : "cool" };
    	$('#myModal').modal('show');
    };

    $scope.removeCourse = function(course) {
    	console.log("removing", course);
    };

    $scope.addCourse = function(newCourse) {
    	console.log(newCourse);
    }

    $http.get("/courses")
    .success( function(response) {
    	$scope.courses = response;
    });


});

function setCurrentDate(form) {
	dateInputs = $(form.find('input[type=date]'));
	var today = new Date();
	var month = twoDigitFormat(today.getMonth()+1);
	var day = twoDigitFormat(today.getDate());
	today = today.getFullYear() + '-' + month + '-' + day;
	dateInputs.val(today);
}

function twoDigitFormat(n) {
	return n >= 10 ? n : "0" + n;
}

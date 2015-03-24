var app = angular.module("OnlineUniversity", []);

app.controller("OnlineUniversityController",
function ($scope, $http)
{

	$scope.openEditCourseDialog = function(course) {
		$scope.submitCourse = $scope.editCourse;
		course.dateCreated = new Date(course.dateCreated);
		$scope.newCourse = course;
		$('#courseModal').modal('show');
	};

	$scope.openAddCourseDialog = function() {
		$scope.submitCourse = $scope.addCourse;
		if ($scope.form) {
	    	$scope.form.$setPristine();
	      	$scope.form.$setUntouched();
	    }
		var today = new Date();
		$scope.newCourse = {name: "", category:"", dateCreated : today, description: ""};
		$('#courseModal').modal('show');
	};

    $scope.editCourse = function(newCourse) {
    	if ($scope.form.$invalid) {
    		return;
    	}
    	$('#courseModal').modal('hide');
    	console.log("editing", newCourse);
    };

    $scope.addCourse = function(newCourse) {
    	if ($scope.form.$invalid) {
    		return;
    	}
    	$('#courseModal').modal('hide');
    	console.log("adding", newCourse);
    };

    $scope.removeCourse = function(course) {
    	console.log("removing", course);
    };

    $scope.formatDate = function(date) {
		date = new Date(date);
		var month = twoDigitFormat(date.getMonth()+1);
		var day = twoDigitFormat(date.getDate());
		return month + '/' + day + '/' + date.getFullYear();
	};

	twoDigitFormat = function(n) {
		return n >= 10 ? n : "0" + n;
	};

    $http.get("/courses")
    .success( function(response) {
    	$scope.courses = response;
    });


});

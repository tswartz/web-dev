var app = angular.module("OnlineUniversity", []);

app.controller("OnlineUniversityController",
function ($scope, $http)
{

	$scope.openEditCourseDialog = function(course) {
		$scope.newCourse = course;
		$('#submit-course').attr('ng-click', 'editCourse(newCourse)');
		$('#courseModal').modal('show');
	};

	$scope.openAddCourseDialog = function() {
		var today = new Date();
		$scope.newCourse = {name: "", category:"", dateCreated : today, description: ""};
		$('#submit-course').attr('ng-click', 'addCourse(newCourse)');
		$('#courseModal').modal('show');
	};

    $scope.editCourse = function(newCourse) {
    	console.log("editing", newCourse);
    };

    $scope.removeCourse = function(course) {
    	console.log("removing", course);
    };

    $scope.addCourse = function(newCourse) {
    	console.log("adding", newCourse);
    }

    $scope.formatDate = function(date) {
		date = new Date(date);
		var month = twoDigitFormat(date.getMonth()+1);
		var day = twoDigitFormat(date.getDate());
		return month + '/' + day + '/' + date.getFullYear();
	}

	twoDigitFormat = function(n) {
		return n >= 10 ? n : "0" + n;
	}

    $http.get("/courses")
    .success( function(response) {
    	$scope.courses = response;
    });


});

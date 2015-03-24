var app = angular.module("OnlineUniversity", []);

app.controller("OnlineUniversityController",
function ($scope, $http)
{

	// opens modal to edit course (populates inputs with clicked course)
	$scope.openEditCourseDialog = function(course, index) {
		$scope.submitCourse = $scope.editCourse;
		$scope.editIndex = index;
		course.dateCreated = new Date(course.dateCreated);
		$scope.newCourse = course;
		$('#courseModal').modal('show');
	};

	// opens modal to add a course (populates dateCreated with today's date)
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

	// updates course at $scope.editIndex
    $scope.editCourse = function(updatedCourse) {
    	if ($scope.form.$invalid) {
    		return;
    	}
    	$('#courseModal').modal('hide');
    	$http.put('/api/course/' + $scope.editIndex, updatedCourse).
		success(function(response) {
			$scope.courses = response;
		});
    };

    // adds course
    $scope.addCourse = function(newCourse) {
    	if ($scope.form.$invalid) {
    		return;
    	}
    	$('#courseModal').modal('hide');
    	$http.post('/api/courses', newCourse).
		success(function(response) {
			$scope.courses = response;
		});
    };

    // removes course at index
    $scope.removeCourse = function(course, index) {
    	$http.delete('/api/course/' + index).
		success(function(response) {
			$scope.courses = response;
		});
    };

    // formats dateCreated value to be more human-readable
    $scope.formatDate = function(date) {
		date = new Date(date);
		var month = twoDigitFormat(date.getMonth()+1);
		var day = twoDigitFormat(date.getDate());
		return month + '/' + day + '/' + date.getFullYear();
	};

	// formats single digit numbers with leading zero for dates
	// ex: twoDigitFormat(1) -> "01"
	twoDigitFormat = function(n) {
		return n >= 10 ? n : "0" + n;
	};

	// Initial retrieval of courses
    $http.get("/api/courses")
    .success( function(response) {
    	$scope.courses = response;
    });


});

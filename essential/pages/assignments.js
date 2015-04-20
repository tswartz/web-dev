app.controller("AssignmentsCtrl", function ($scope, $http, $location) {


	$scope.assignments = [

		// HTML
		{
			main: {
				name: "HTML Assignment",
				link: "assignments/html/studyList.html"
			},
			source: [
				{
					name: "HTML",
					link: "fileview/default.aspx?~/assignments/html/studyList.html"
				}
			]
		},

		// CSS
		{
			main: {
				name: "CSS Assignment",
				link: "assignments/css/profile.html"
			},
			source: [
				{
					name: "HTML",
					link: "fileview/default.aspx?~/assignments/css/profile.html"
				},
				{
					name: "CSS",
					link: "fileview/default.aspx?~/assignments/css/styles.css"
				}
			]
		},

		// jQuery
		{
			main: {
				name: "jQuery Assignment",
				link: "assignments/jquery/profile.html"
			},
			source: [
				{
					name: "HTML",
					link: "fileview/default.aspx?~/assignments/jquery/profile.html"
				},
				{
					name: "CSS",
					link: "fileview/default.aspx?~/assignments/jquery/styles.css"
				},
				{
					name: "JS",
					link: "fileview/default.aspx?~/assignments/jquery/script.js"
				}
			]
		},

		// Angular
		{
			main: {
				name: "Angular Assignment",
				link: "http://onlineuniversity-tswartz.rhcloud.com/assignments/angular/profile.html"
			},
			source: [
				{
					name: "Git Repo",
					link: "https://github.com/tswartz/web-dev/tree/master/essential/assignments/angular"
				}
			]
		}

	];

});
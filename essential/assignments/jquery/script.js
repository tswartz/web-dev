var courses = [
	{ name : "java 123", category : "PROG", dateCreated : "1/18/2015", description : "Awesome" },
	{ name : "Java 234", category : "PROG", dateCreated : "1/18/2015", description : "Awesome" }
];

$(function () {
	var tbody = $('#courses-created');
	var template = $('.template');
	tbody.empty();

	courses.map(function (course, index) {
		var clonedTemplate = template.clone();
		for (var prop in course) {
			var td = clonedTemplate.find('.' + prop);
			if (td.length != 0) {
				td.html(course[prop]);
			}
		};
		tbody.append(clonedTemplate);
	});
});



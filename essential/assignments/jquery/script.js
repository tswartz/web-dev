var courses = [
	{ name : "java 123", category : "PROG", dateCreated : "2015-01-18", description : "Awesome" },
	{ name : "Java 234", category : "PROG", dateCreated : "2015-01-18", description : "Awesome" }
];

$(function () {
	renderCourses(courses);
	$('#courses-created').on('click', 'button.remove', removeCourse);
	$('#courses-created').on('click', 'button.edit', editCourse);
});

function renderCourses(courses) {
	var tbody = $('#courses-created');
	var template = $( $('.template').get(0) );
	tbody.empty();

	courses.map(function (course, index) {
		var clonedTemplate = template.clone();
		for (var prop in course) {
			var td = clonedTemplate.find('.' + prop);
			if (td.length != 0) {
				td.html(course[prop]);
			}
		};
		clonedTemplate.find('.edit').attr('id', index);
		clonedTemplate.find('.remove').attr('id', index);
		tbody.append(clonedTemplate);
	});
}

function removeCourse(e) {
	bootbox.confirm({
		title: "Delete Course",
	  	message: "Are you sure you want to delete this course?",
	  	callback: function(result) {
	  		if (result) {
				var id = $(e.currentTarget).attr('id')
				courses.splice(id, 1);
				renderCourses(courses);
	  		}
	  	}
	});
}

function editCourse(e) {
	var clonedForm = $('#add-edit-form').clone();
	var id = $(e.currentTarget).attr('id');
	var course = courses[id];
	for (var prop in course) {
		var input = clonedForm.find('input#' + prop + ', select#' + prop);
		if (input.length != 0) {
			// for populating select tags
			if (input.prop('tagName') == 'SELECT') {
				var selectedOption = input.find('option[value=' + course[prop] + ']');
				selectedOption.attr('selected', 'selected');
			// for populating all other tags
			} else {
				input.attr('value', course[prop]);
			}
		}
	};
	openNewCourseDialog(clonedForm);
}

function openNewCourseDialog(form, callback) {
	bootbox.dialog({
		title: "Create New Course",
	  	message: $(form).html(),
	  	buttons: [
	  		{
		    	label: "Cancel",
		    },
		    {
		    	label: "OK",
		      	className: "btn-primary",
		      	callback: function(e) {
		      		$('.modal-body #add-edit-form').find('input');
		      		callback();
		      	}
		    },
	  	]
	});
}



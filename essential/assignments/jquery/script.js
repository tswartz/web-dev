// Global variable that holds all courses
var courses = [
	{ name : "java 123", category : "PROG", dateCreated : "2015-01-18", description : "Awesome" },
	{ name : "Java 234", category : "PROG", dateCreated : "2015-01-18", description : "Awesome" }
];

// On page load:
// Initial rendering of courses in "courses" variable
// Sets event handlers for add, edit, and remove buttons
$(function () {
	renderCourses(courses);
	$('#courses-created').on('click', 'button.remove', removeCourse);
	$('#courses-created').on('click', 'button.edit', editCourse);
	$('.courses-created-table').on('click', 'button.add', addCourse);
});

// Takes in course list argument and renders each course as tr in table
function renderCourses(courses) {
	var tbody = $('#courses-created');
	var template = $( $('.template').get(0) );
	tbody.empty();

	// render each row
	courses.map(function (course, index) {
		var clonedTemplate = template.clone();
		for (var prop in course) {
			var td = clonedTemplate.find('.' + prop);
			if (td.length != 0) {
				td.html(course[prop]);
			}
		};
		// For each course, give its edit/remove buttons a unique id (its list index) 
		// that will be passed to edit/remove methods for when user clicks on them
		// so we know which course is supposed to be edited or removed
		clonedTemplate.find('.edit').attr('id', index);
		clonedTemplate.find('.remove').attr('id', index);
		tbody.append(clonedTemplate);
	});
}

// Removes a course (confirmation dialog pops up first)
// Re-renders course table
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

// Edits a course
// Populates form with clicked course's properties and shows edit dialog
// Re-renders course table
function editCourse(e) {
	var clonedForm = $('#add-edit-form').clone();
	var id = $(e.currentTarget).attr('id');
	var course = courses[id];
	for (var prop in course) {
		var input = clonedForm.find('#' + prop);
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
	// Opens dialog with populated form
	openNewCourseDialog(clonedForm, function (updatedCourse) {
		courses[id] = updatedCourse;
		renderCourses(courses);
	});
}

// Adds a course
// Opens dialog with blank fields and dateCreated set to today
// Re-renders course table
function addCourse(e) {
	var clonedForm = $('#add-edit-form').clone();
	var id = $(e.currentTarget).attr('id');
	var course = courses[id];
	// set dateCreated field on form to today's date
	setCurrentDate(clonedForm);
	// opens course dialog with blank form (except for dateCreated)
	openNewCourseDialog(clonedForm, function (newCourse) {
		courses.push(newCourse);
		renderCourses(courses);
	});
}

// Open the add/edit dialog
// Takes a form to show in dialog (blank for adding, filled out for edit)
// Finishes by calling callback method that is passed the new or edited course
function openNewCourseDialog(form, callback) {
	bootbox.dialog({
		title: "Create New Course",
	  	message: form,
	  	buttons: [
	  		{
		    	label: "Cancel",
		    },
		    {
		    	label: "OK",
		      	className: "btn-primary",
		      	callback: function (e) {
		      		// get values from inputs
		      		var serializedArray = $('.modal-body #add-edit-form').serializeArray();
		      		var course = {};
		      		serializedArray.map(function (pair) {
		      			course[pair.name] = pair.value;
		      		});
		      		callback(course);
		      	}
		    }
	  	]
	});
}

// sets dateCreated input to today's date
function setCurrentDate(form) {
	dateInputs = $(form.find('input[type=date]'));
	var today = new Date();
	var month = twoDigitFormat(today.getMonth()+1);
	var day = twoDigitFormat(today.getDate());
	today = today.getFullYear() + '-' + month + '-' + day;
	dateInputs.val(today);
}

// adds a leading zero to single digit number (returned as string) for date display
// ex: 4 -> "04"
function twoDigitFormat(n) {
	return n >= 10 ? n : "0" + n;
}

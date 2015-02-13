var courses = [
	{ name : "java 123", category : "PROG", dateCreated : "2015-01-18", description : "Awesome" },
	{ name : "Java 234", category : "PROG", dateCreated : "2015-01-18", description : "Awesome" }
];

$(function () {
	renderCourses(courses);
	$('#courses-created').on('click', 'button.remove', removeCourse);
	$('#courses-created').on('click', 'button.edit', editCourse);
	$('.courses-created-table').on('click', 'button.add', addCourse);
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
	openNewCourseDialog(clonedForm, function (updatedCourse) {
		courses[id] = updatedCourse;
		renderCourses(courses);
	});
}

function addCourse(e) {
	var clonedForm = $('#add-edit-form').clone();
	var id = $(e.currentTarget).attr('id');
	var course = courses[id];
	setCurrentDate(clonedForm);
	openNewCourseDialog(clonedForm, function (newCourse) {
		courses.push(newCourse);
		renderCourses(courses);
	});
}

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

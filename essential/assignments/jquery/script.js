var courses = [
	{ name : "java 123", category : "PROG", dateCreated : "1/18/2015", description : "Awesome" },
	{ name : "Java 234", category : "PROG", dateCreated : "1/18/2015", description : "Awesome" }
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
				var removeButton = $(e.currentTarget);
				var id = removeButton.attr('id')
				courses.splice(id, 1);
				renderCourses(courses);
	  		}
	  	}
	});
}

function editCourse() {
	bootbox.dialog({
		title: "Create New Course",
	  	message: $('#add-edit-dialog').html(),
	  	buttons: [
	  		{
		    	label: "Cancel",
		    },
		    {
		    	label: "OK",
		      	className: "btn-primary",
		      	callback: function(e) {
		      		console.log($('.modal-body #add-edit-form').find('input'));
		        	console.log('great success');
		      	}
		    },
	  	]
	});
}

function openNewCourseDialog(form) {
	
}



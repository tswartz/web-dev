var express = require('express');
var app     = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

var courses = [
	{ name : "java 123", category : "PROG", dateCreated : "Tue Mar 24 2015 10:49:58 GMT-0400 (EDT)", description : "Awesome" },
	{ name : "Java 234", category : "PROG", dateCreated : "Tue Mar 24 2015 10:49:58 GMT-0400 (EDT)", description : "Awesome" }
];

app.get('/courses', function(req,res) {
	res.json(courses);
});

app.get('/courses/:index', function(req,res) {
	var index = req.params.index;
	res.json(courses[index]);
});

app.post('/courses', function(req,res) {
	var newCourse = req.body;
	courses.push(newCourse);
	res.json(courses);
});


// POST
// /api/course
// accepts a JSON course object, adds it to the array, returns all courses

// DELETE
// /api/course/:index
// removes course at index, returns all remaining courses

// PUT
// /api/course/:index
// accepts a JSON course object, updates object at index, returns all courses


app.listen(3000);
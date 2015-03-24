var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/public'));

var courses = [
	{ name : "java 123", category : "PROG", dateCreated : "2015-01-18", description : "Awesome" },
	{ name : "Java 234", category : "PROG", dateCreated : "2015-01-18", description : "Awesome" }
];

app.get('/courses', function(req,res) {
	res.json(courses);
});

app.listen(3000);
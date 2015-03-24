var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/public'));

var courses = [
	{ name : "java 123", category : "PROG", dateCreated : "Tue Mar 24 2015 10:49:58 GMT-0400 (EDT)", description : "Awesome" },
	{ name : "Java 234", category : "PROG", dateCreated : "Tue Mar 24 2015 10:49:58 GMT-0400 (EDT)", description : "Awesome" }
];

app.get('/courses', function(req,res) {
	res.json(courses);
});

app.listen(3000);
'use strict';

const express = require('express');
const app = express ();

// creates a route to the server
app.get('/test', function (req,res) {
  res.status(200).send ('msg from the server');
});

app.get ('/json', function (req,res) {
  let course = {
    date: Date.now(),
    title: 'Code 301',
    instructor: 'Brian',
    studentCount: 20
  }
  res.status(200).json(course)
})

app.listen(3000, function() {
  console.log('listening on port 3000')
});


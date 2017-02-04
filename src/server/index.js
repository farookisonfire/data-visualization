const express = require('express');
const PORT = process.env.PORT || 3000;

/* eslint-disable no-console */

const port = 3000;
const app = express();

const dummyData = [
  {
  id: "9",
  firstName: "Farook",
  lastName: "Khan",
  programType: "Health-Innovation",
  programDuration: "4 week",
  programDates: "July 3 - July 28"
  }
];


app.get('/dummy', (req,res) => {
  res.send(dummyData);
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('listening on port ' + port);
  }
});

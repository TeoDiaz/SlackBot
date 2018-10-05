const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost/slackbot", {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(e => console.error(e));

const mongoose = require('mongoose');

mongoose
  .connect(`${process.env.MONGO_URL}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(e => console.error(e));

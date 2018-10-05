const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LeaderSchema = new Schema({
   name: String,
})
 const Leader = mongoose.model('Leader', LeaderSchema);
 
 module.exports = Leader;
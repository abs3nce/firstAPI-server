const mongoose = require('mongoose');

//vytvorime schemu pre to ako ma vyzerat Post
const PostSchema = mongoose.Schema({
    title: String,
    desc: String,
    date: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('Posts', PostSchema);
const { default: mongoose } = require("mongoose")
const Song = mongoose.Schema({
    song: {
        type: String,
    },
    singer: {
        type: String
    }
});
module.exports=mongoose.model('Song',Song)
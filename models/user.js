const mongoose = require("mongoose");

const translatorSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    translateTo: {
        type: String,
        required: true,
        trim: true
    },
    
    
}, { timestamps: true })
module.exports = mongoose.model("translator", translatorSchema)
const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {
    type: String,
    maxlength: 10,
    minlenght: 3
},  
 cost: {
    type: Number,
    min: 20,
   max: 50
} 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 
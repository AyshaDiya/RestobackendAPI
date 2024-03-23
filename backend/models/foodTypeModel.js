
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const foodTypeSchema = new mongoose.Schema({

    foodTypeName: {
        type: String,
        trim: true,
        required: [true, 'food category is required'],
        maxlength: 70,
    },

    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },



}, { timestamps: true })

module.exports = mongoose.model("foodType", foodTypeSchema);
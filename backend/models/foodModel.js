const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const foodSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
    },
    price: {
        type: String,
        trim: true,
        required: [true, 'price is required'],
    },
    location: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
    foodType: {
        type: ObjectId,
        ref: "foodType",
        required: true
    },
    user: {
        type: ObjectId,
        ref: "user",
        required: true
    },



}, { timestamps: true })

module.exports = mongoose.model("Food", foodSchema);
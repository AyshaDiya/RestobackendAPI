const foodType = require('../models/foodTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create food category
exports.createfoodType = async (req, res, next) => {
    try {
        const foodT = await foodType.create({
            foodTypeName: req.body.foodTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            foodT
        })
    } catch (error) {
        next(error);
    }
}


//all foods category
exports.allfoodType = async (req, res, next) => {
    try {
        const foodT = await foodType.find();
        res.status(200).json({
            success: true,
            foodT
        })
    } catch (error) {
        next(error);
    }
}
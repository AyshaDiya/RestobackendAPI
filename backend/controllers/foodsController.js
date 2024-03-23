const food= require('../models/foodModel');
const foodType = require('../models/foodTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create food
exports.createfood = async (req, res, next) => {
    try {
        const food = await food.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.salary,
            location: req.body.location,
            foodType: req.body.jobType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            food
        })
    } catch (error) {
        next(error);
    }
}


//single food
exports.singlefood = async (req, res, next) => {
    try {
        const food = await food.findById(req.params.id);
        res.status(200).json({
            success: true,
            food
        })
    } catch (error) {
        next(error);
    }
}


//update food by id.
exports.updatefood = async (req, res, next) => {
    try {
        const food = await food.findByIdAndUpdate(req.params.food_id, req.body, { new: true }).populate('foodType', 'foodTypeName').populate('user', 'firstName lastName');
        res.status(200).json({
            success: true,
            food
        })
    } catch (error) {
        next(error);
    }
}


//update food by id.
exports.showfoods = async (req, res, next) => {

    //enable search 
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    // filter food by category ids
    let ids = [];
    const foodTypeCategory = await foodType.find({}, { _id: 1 });
    foodTypeCategory.forEach(cat => {
        ids.push(cat._id);
    })

    let cat = req.query.cat;
    let categ = cat !== '' ? cat : ids;

    

    //enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    //const count = await food.find({}).estimatedDocumentCount();
    const count = await food.find({ ...keyword, foodType: categ }).countDocuments();

    try {
        const foods = await food.find({ ...keyword, foodType: categ }).skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            foods,
            page,
            pages: Math.ceil(count / pageSize),
            count
        })
    } catch (error) {
        next(error);
    }
}

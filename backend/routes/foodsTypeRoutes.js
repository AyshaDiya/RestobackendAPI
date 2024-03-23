const express = require('express');
const router = express.Router();
const { createfoodType, allfoodType } = require('../controllers/foodsTypeController');
const { isAuthenticated } = require('../middleware/auth');



//food type routes

// /api/type/create
router.post('/type/create', isAuthenticated, createfoodType)
// /api/type/food
router.get('/type/foods', allfoodsType)





module.exports = router;
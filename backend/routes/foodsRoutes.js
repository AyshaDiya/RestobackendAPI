const express = require('express');
const router = express.Router();
const { createfood, singlefood, updatefood, showfood } = require('../controllers/foodsController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');



//food routes

// /api/food/create
router.post('/food/create', isAuthenticated, isAdmin, createfood);
// /api/food/id
router.get('/food/:id', singlefood);
// /api/food/update/food_id
router.put('/food/update/:food_id', isAuthenticated, isAdmin, updatefood);
// /api/food/show
router.get('/food/show', showfood);



module.exports = router;
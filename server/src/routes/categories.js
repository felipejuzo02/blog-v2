const express = require('express');

const categoriesController = require('../controllers/categoriesController');
const categoriesMiddleware = require('../middlewares/categoriesMiddleware');

const router = express.Router();

router.get('/categories', categoriesController.fetchAll);
router.post('/categories', categoriesMiddleware.validateFields, categoriesController.createCategory);

module.exports = router;
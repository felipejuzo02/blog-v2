const express = require('express');

const categoriesController = require('../controllers/categoriesController');

const router = express.Router();

router.get('/categories', categoriesController.fetchAll);
router.post('/categories', categoriesController.createCategory);

module.exports = router;
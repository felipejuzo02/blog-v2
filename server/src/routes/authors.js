const express = require('express');

const authorsController = require('../controllers/authorsController');
const authorsMiddleware = require('../middlewares/authorsMiddleware');

const router = express.Router();

router.get('/authors', authorsController.fetchAll);
router.get('/authors/:id', authorsController.fetchAuthor);
router.delete('/authors/:id', authorsController.deleteAuthor);
router.post('/authors', 
  authorsMiddleware.validateFields,
  authorsController.createAuthor
);
router.put('/authors/:id', 
  authorsMiddleware.validateFields,
  authorsController.updateAuthor
);

module.exports = router;
const express = require('express');

const authorsController = require('./controllers/authorsController');
const authorsMiddleware = require('./middlewares/authorsMiddleware');

const router = express.Router();

router.get('/authors', authorsController.getAll);
router.delete('/authors/:id', authorsController.deleteAuthor);
router.post('/authors', 
  authorsMiddleware.validateFieldName,
  authorsMiddleware.validateFieldEmail,
  authorsController.createAuthor
);
router.put('/authors/:id', 
  authorsMiddleware.validateFieldName,
  authorsMiddleware.validateFieldEmail,
  authorsController.updateAuthor
);

module.exports = router;
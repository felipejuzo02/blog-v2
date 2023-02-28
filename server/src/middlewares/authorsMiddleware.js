const validateFieldName = (req, res, next) => {
  const { body } = req;

  if (body.name === undefined || body.name === '') {
    return res.status(400).json({ message: 'The field name is required' });
  }

  next();
};

const validateFieldEmail = (req, res, next) => {
  const { body } = req;

  if (body.email === undefined || body.email === '') {
    return res.status(400).json({ message: 'The field email is required' });
  }

  next();
};

module.exports = {
  validateFieldName,
  validateFieldEmail
};
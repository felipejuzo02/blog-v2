// TODO: criar middleware de categorias
const validateFields = (req, res, next) => {
  const requiredFields = ['name', 'description'];
  const error = {};

  const { body } = req;

  requiredFields.forEach(field => {
    if (body[field] === undefined || body[field] === '') {
      error[field] = 'The field is required'; 
    }
  });
  
  return Object.keys(error).length === 0
    ? next()
    : res.status(400).json(error);
};

module.exports = {
  validateFields
};
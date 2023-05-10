const genericErrors = {
  required: 'Campo obrigatório.',
  invalidEmail: 'Email inválido.',
  differentPassword: 'As senhas não conferem',
  passwordInvalid: 'A senha deve conter no mínimo 8 caracteres.'
}

const handleErrors = (model, error) => {
  const errorMessage = genericErrors[error] || error

  return { 
    errorMessage,
    error: model
  }
}

export default handleErrors
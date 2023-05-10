const validateEmail = email => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

  return regex.test(email)
}

export default validateEmail
const validateEmail = (rule, value, callback) => {
  // eslint-disable-next-line
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (value === '') {
    callback(new Error('Please input the email'))
  } else if (!re.test(value)) {
    callback(new Error('Please input a valid email'))
  } else {
    callback()
  }
}
const validatePhoneNumber = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the phone number'))
  } else {
    callback()
  }
}
const validateTopic = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the Topic'))
  } else {
    callback()
  }
}
const validateWhen = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the Date'))
  } else {
    callback()
  }
}

export { validateEmail, validatePhoneNumber, validateTopic, validateWhen }

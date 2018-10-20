import { isEmpty } from 'lodash';

const verifyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validateSignup = (data) => {
  const errors = {};
  if (data.firstName === undefined || data.firstName.trim() === "") {
    errors.firstName = 'Please enter your First Name';
  } else if (data.lastName === undefined || data.lastName.trim() === "") {
    errors.lastName = 'Please enter your Last Name';
  } else if (data.email === undefined || !verifyEmail.test(data.email) || data.email.trim() === " ") {
    errors.email = 'Enter a valid email address'
  } else if (data.middleName === undefined || data.middleName.trim() === "") {
    errors.middleName = "Please enter your middle name"
  } else if (data.role === undefined || data.role.trim() === "") {
    errors.role = "Please pick a role"
  } else if (data.password === undefined || data.password.trim() === "" || data.password.length < 8) {
    errors.password = "Input a password greater than 8 characters."
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateSignup;

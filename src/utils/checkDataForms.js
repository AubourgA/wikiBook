
import { isAlphabetic, isValidEmail, isValidFrenchPhoneNumber, isValidPassword } from './validation';
import { INITIAL_VALIDATION_VALUE } from '../Constants/initialize.state'

export const checkValidationSignUp = (formData, setShowValidation) => {
  const areValid = {
    ...INITIAL_VALIDATION_VALUE
  };

  if (!isAlphabetic(formData.name)) {
    setShowValidation(state => ({ ...state, name: true }));
  } else {
    areValid.name = true;
    setShowValidation(state => ({ ...state, name: false }));
  }

  if (!isAlphabetic(formData.firstname)) {
    setShowValidation(state => ({ ...state, firstname: true }));
  } else {
    areValid.firstname = true;
    setShowValidation(state => ({ ...state, firstname: false }));
  }

  if (!isValidFrenchPhoneNumber(formData.numPortable)) {
    setShowValidation(state => ({ ...state, numPortable: true }));
  } else {
    areValid.numPortable = true;
    setShowValidation(state => ({ ...state, numPortable: false }));
  }

  if (!isAlphabetic(formData.city)) {
    setShowValidation(state => ({ ...state, city: true }));
  } else {
    areValid.city = true;
    setShowValidation(state => ({ ...state, city: false }));
  }

  if (!isValidEmail(formData.email)) {
    setShowValidation(state => ({ ...state, email: true }));
  } else {
    areValid.email = true;
    setShowValidation(state => ({ ...state, email: false }));
  }

  if (!isValidPassword(formData.password)) {
    setShowValidation(state => ({ ...state, password: true }));
  } else {
    areValid.password = true;
    setShowValidation(state => ({ ...state, password: false }));
  }

  return Object.values(areValid).every(value => value);
};

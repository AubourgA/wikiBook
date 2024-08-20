
import { isAlphabetic, isValidEmail, isValidFrenchPhoneNumber, isValidPassword, isBool } from './validation';
import { INITIAL_VALIDATION_VALUE,  } from '../Constants/initialize.state'

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



export const validateContactForm = (formData) => {
  const newErrors = {};

  if (!formData.lastname) {
    newErrors.lastname = 'Le nom est requis';
  } else if (!isAlphabetic(formData.lastname)) {
    newErrors.lastname = 'Le nom ne doit contenir que des lettres';
  }
  if (!formData.firstname) {
    newErrors.firstname = 'Le prénom est requis';
  } else if (!isAlphabetic(formData.firstname)) {
    newErrors.firstname = 'Le prénom ne doit contenir que des lettres';
  }


  if (!formData.email) {
    newErrors.email = 'L\'email est requis';
  } else if (!isValidEmail(formData.email)) {
    newErrors.email = 'L\'email est invalide';
  }

  if (!formData.message) {
    newErrors.message = 'Le message est requis';
  }

  return newErrors;
};

export const validateLoginForm = (formData) => {
  const newErrors = {};

  if (!formData.email) {
    newErrors.email = 'L\'email est requis';
  } else if (!isValidEmail(formData.email)) {
    newErrors.email = 'L\'email est invalide';
  }

  if (!formData.password) {
    newErrors.password = 'Le password est requis';
  }

  return newErrors;
};



export const validateBookForm = (formData) => {
  const newErrors = {};

  if (!formData.title) {
    newErrors.title = "Le titre est requis";
  }

  if (!formData.synopsys) {
    newErrors.synopsys = "Le synopsys est requis";
  }

  if (!formData.YearPublished) {
    newErrors.YearPublished = "L'année de publication est requise";
  } else if (!/^\d{4}$/.test(formData.YearPublished)) {
    newErrors.YearPublished = "L'année de publication doit être une année valide";
  }

  if (!formData.ISBN) {
    newErrors.ISBN = "L'ISBN est requis";
  } else if (!/^\d{10,13}$/.test(formData.ISBN)) {
    newErrors.ISBN = "L'ISBN doit être un nombre de 10 ou 13 chiffres";
  }

  if (!formData.nbPage) {
    newErrors.nbPage = "Le nombre de pages est requis";
  } else if (isNaN(formData.nbPage) || formData.nbPage <= 0) {
    newErrors.nbPage = "Le nombre de pages doit être un nombre positif";
  }

  if (!formData.author) {
    newErrors.author = "L'auteur est requis";
  }

  if (!formData.genre) {
    newErrors.genre = "Le genre est requis";
  }

  if (!formData.editor) {
    newErrors.editor = "L'éditeur est requis";
  }

  if (!formData.language) {
    newErrors.language = "La langue est requise";
  }

  if(!isBool(formData.isOnLine)) {
    newErrors.isOnLine = "La disponibilité est requis"
  }

  return newErrors;
};
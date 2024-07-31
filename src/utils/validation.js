export const isAlphabetic = (str) => {
    const regex = /^[A-Za-z]+$/;
  return regex.test(str);
}


export const isValidEmail = (str) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
    };


export const isValidFrenchPhoneNumber = (str) => {
    const regex = /^(?:\+33|0)[1-9](?:\d\s?){8}$/;
    return regex.test(str);
    };

export const isValidPassword = (str) => {
    const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    return regex.test(str);
    };



import { nanoid } from 'nanoid';

export const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };



  export const extractUsersFromData = (data) => {
    const userArray = [];
  
    data.forEach(item => {
      if (item.loans) {
        item.loans.forEach( loan => {
          if (loan.user && loan.user.firstname && loan.user.name) {
            userArray.push({ 
              id:nanoid(8),
              name: loan.user.name, 
              firstname: loan.user.firstname,
              date:  loan.borrowDate
            });
          }
        });
      }
    });
  
    return userArray;
  };


  export const filterDatasWithParameter = (data, param, value) => {
    return data.filter( item => item[param] !== value)
  }
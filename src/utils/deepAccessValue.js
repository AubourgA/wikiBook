import { nanoid } from 'nanoid';

export const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };



  export const extractUsersFromSortedData = (data,limit) => {
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
    userArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    return userArray.slice(0,limit);
  };


  export const filterDatasWithParameter = (data, param, value) => {
    return data.filter( item => item[param] !== value)
  }

  export const filteredUserbyRoleAndDate = ( data) => {
    let customersFiltered = []
     if (data && Array.isArray(data)) {
       customersFiltered = data.filter( item => !item.roles.includes("ROLE_ADMIN") )
       
       customersFiltered.sort( (a,b) => new Date(b.subscribedAt) - new Date(a.subscribedAt) )
       
       return customersFiltered
     }
     
   }

   export const orderedDescDataByDate = (data, params, max) => {
       
    if( data && Array.isArray(data)) {
         const sortedData = data.sort( (a,b)=> new Date(b[params] - new Date(a[params])))
         return sortedData.slice(0,max) 
      }
   }

   export const filteredbookCopies = (data) => {
    const bookCopiesArray = [];
    if( data && Array.isArray(data)) {
    data.forEach(item => {
      console.log("item", item)
      if (item.status.type != "Retiré")  bookCopiesArray.push(item );
        
      }
    )
   
    return bookCopiesArray.length;
  }
  };
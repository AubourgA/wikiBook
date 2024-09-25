export const transformData = (item) => {
    const monthlyCounts = {};
  
    item.forEach((item) => {
      item.loans.forEach((loan) => {
        const date = new Date(loan.borrowDate);
        const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        monthlyCounts[month] = (monthlyCounts[month] || 0) + 1;
      });
    });
  
    return Object.entries(monthlyCounts).map(([name, nb]) => ({ name, nb }));
  };
import  { useState, useEffect } from 'react';

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 360000); 

    return () => clearInterval(timer); 
  }, []);

  const formattedDate = currentDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
   
      <span>{formattedDate}</span>
     
 
  );
};

export default DateDisplay;
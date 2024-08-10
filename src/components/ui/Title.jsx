


const Title = ({ text1, text2, level = 1, custom1 = "", custom2="" }) => {
    const Tag = `h${level}`;

    const getLevel = (level) => {
        switch (level) {
          case 1:
            return 'font-primary leading-10 text-4xl  md:text-6xl py-4 text-dark';
          case 2:
            return 'font-primary text-primary100 text-3xl py-4 ';
          case 3:
            return 'text-dark font-primary text-2xl py-4';
          case 4 :
             return 'text md:text-md lg:text-lg  font-semibold pb-2'
          default:
            return '';
        }
      };


    return <Tag className={`${getLevel(level)} ${custom1}` }>{text1} {text2 && <span className={custom2}>{text2}</span>}</Tag>;
  };
  
  export default Title;

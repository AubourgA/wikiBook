import Button from './Button'; // 

const Pagination = ({ paginationButtons, onPageChange, page }) => {
  return (
    <div className='flex items-center justify-center gap-2 my-4'>
      {paginationButtons.map(({ key, title }) => (
        page["hydra:view"] && (<Button
          key={key}
          title={title}
          category='paginate'
          type="button"
          onButtonClick={() => onPageChange(page["hydra:view"][key])}
        />)
      ))}
    </div>
  );
};

export default Pagination;
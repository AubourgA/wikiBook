import Button from "../Forms/Button"; //
import PropTypes from 'prop-types';

const Pagination = ({ paginationButtons, onPageChange, page }) => {
  return (
    <div className="flex items-center justify-center gap-2 my-4">
      {paginationButtons.map(
        ({ key, title }) =>
          page[key] && (
            <Button
              key={key}
              title={title}
              category="paginate"
              type="button"
              onButtonClick={() => onPageChange(page[key])}
            />
          )
      )}
    </div>
  );
};

Pagination.propTypes = {
  paginationButtons: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,  
      title: PropTypes.string.isRequired, 
    })
  ).isRequired,  
  onPageChange: PropTypes.func.isRequired,  
  page: PropTypes.object.isRequired,  
};

export default Pagination;

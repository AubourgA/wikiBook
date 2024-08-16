import Button from "../Forms/Button"; //

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

export default Pagination;

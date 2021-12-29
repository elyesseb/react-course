import React from "react";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div>
      {goToPrevPage && (
        <button className="btn_pages" onClick={goToPrevPage}>
          Previous
        </button>
      )}
      &nbsp;
      {goToNextPage && (
        <button className="btn_pages" onClick={goToNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;

import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const { updateCurrentPage, currentPageNumber, lastPage } = props;
  const getNextPageNumbers = () => {
    // Repeated Buttons, can be concatenated
    return (
      <div className="page-numbers">
        <button
          className="pagination-button"
          onClick={() => updateCurrentPage(currentPageNumber)}
        >
          {currentPageNumber}
        </button>
        {currentPageNumber < lastPage && (
          <button
            className="pagination-button"
            onClick={() => updateCurrentPage(currentPageNumber + 1)}
          >
            {currentPageNumber + 1}
          </button>
        )}
        {currentPageNumber + 1 < lastPage && (
          <button
            className="pagination-button"
            onClick={() => updateCurrentPage(currentPageNumber + 2)}
          >
            {currentPageNumber + 2}
          </button>
        )}
      </div>
    );
  };
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => updateCurrentPage(currentPageNumber - 1)}
        disabled={currentPageNumber <= 1}
        aria-label="Go to previous page"
        aria-disabled={currentPageNumber === 1 ? "true" : "false"}
      >
        Prev
      </button>
      {getNextPageNumbers()}
      <button
        className="pagination-button"
        onClick={() => updateCurrentPage(currentPageNumber + 1)}
        disabled={currentPageNumber >= lastPage}
        aria-label="Go to next page"
        aria-disabled={currentPageNumber === lastPage ? "true" : "false"}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

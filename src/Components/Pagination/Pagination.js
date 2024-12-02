import React from "react";

const Pagination = (props) => {
  const { updateCurrentPage, currentPageNumber } = props;
  const getNextPageNumbers = () => {
    return (
      <div>
        <button onClick={() => updateCurrentPage(currentPageNumber)}>
          {currentPageNumber}
        </button>
        <button onClick={() => updateCurrentPage(currentPageNumber + 1)}>
          {currentPageNumber + 1}
        </button>
        <button onClick={() => updateCurrentPage(currentPageNumber + 2)}>
          {currentPageNumber + 2}
        </button>
      </div>
    );
  };
  return (
    <div>
      <button onClick={() => updateCurrentPage(currentPageNumber - 1)}>
        Prev
      </button>
      {getNextPageNumbers()}
      <button onClick={() => updateCurrentPage(currentPageNumber + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

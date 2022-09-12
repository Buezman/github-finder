import React from "react";

const Pagination = () => {
  return (
    <div className='page'>
      <div className='page-item'>
        <i className='fa-solid fa-circle-chevron-left' />
        Previous
      </div>
      <div className='page-item'>
        Next
        <i className='fa-solid fa-circle-chevron-left' />
      </div>
    </div>
  );
};

export default Pagination;

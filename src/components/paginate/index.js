import React from 'react';
import PropTypes from 'prop-types';
import Paginate from 'react-paginate';
import StyledPaginate from './styledPaginate';

function HotelPaginate({ currentPage, pageCount, onPageChange }) {
  const handleChange = selectedItem => {
    onPageChange(selectedItem.selected + 1);
  };

  return (
    <StyledPaginate>
      <Paginate
        forcePage={currentPage}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleChange}
        nextLabel="&rarr;"
        previousLabel="&larr;"
      />
    </StyledPaginate>
  );
}

HotelPaginate.propTypes = {
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func
};

HotelPaginate.defaultProps = {
  currentPage: 1,
  pageCount: 1,
  onPageChange: () => {}
};
export default HotelPaginate;

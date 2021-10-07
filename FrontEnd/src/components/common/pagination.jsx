import React from 'react';
import PropType from 'prop-types';
import _ from 'lodash';

const Pagination = props => {
    const {numberOfItems,pageSize, currentPage, onPageChange} = props;
    console.log(currentPage);
    const pageCount = Math.ceil(numberOfItems/pageSize);
    if(pageCount === 1) return null;
    const page = _.range(1, pageCount + 1);

    return (
<nav>
  <ul className="pagination">
    {page.map( page => <li key={page} className={page === currentPage 
      ? "page-item active" : "page-item"}>
      <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
        </li>
        )}
    
  </ul>
</nav>
      );
}
Pagination.propType = {
numberOfItems : PropType.number.isRequired,
pageSize : PropType.number.isRequired,
currentPage : PropType.number.isRequired,
onPageChange : PropType.func.isRequired
}
 
export default Pagination;
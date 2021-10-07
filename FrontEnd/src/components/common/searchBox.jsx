import React from 'react';
const SearchBox = ({value , onChange }) => {
    return ( 
        <input
            type="type"
            name="query"
            placeholder="Search Vehicle Number.."
            className="form-control my-3"
            value={value}
            onChange={e =>onChange(e.currentTarget.value)}  />
     );
}
 
export default SearchBox;
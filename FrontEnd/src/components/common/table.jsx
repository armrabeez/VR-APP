import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ coloums , sortColoum, onSort, data}) => {

    return (  

        <table className="table">
        <TableHeader 
        coloums={coloums} 
        sortColoum={sortColoum} 
        onSort={onSort}/>

        <TableBody data={data} coloums={coloums} />
        </table>
    );
}
 
export default Table;
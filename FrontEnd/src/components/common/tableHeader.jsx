import React, { Component } from 'react';
class TableHeader extends Component {

    raiseShort = path => {
        const sortColoum = { ...this.props.sortColoum };
        if (sortColoum.path === path)
            sortColoum.order = (sortColoum.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColoum.path = path;
            sortColoum.order = 'asc';
        };
        this.props.onSort(sortColoum);
    }

    sortColoumIcon = coloum => {
        const { sortColoum } = this.props;
        if (coloum.path !== sortColoum.path) return null;
        if (sortColoum.order === 'asc') return <i className="fa fa-sort-asc" />;
        return <i className="fa fa-sort-desc" />;

    };
    render() {
        return <thead>
            <tr>
                {this.props.coloums.map(coloums =>
                    <th className='clicked' key={coloums.path || coloums.key} onClick={() =>
                        this.raiseShort(coloums.path)}>
                        {coloums.lable} {this.sortColoumIcon(coloums)}
                    </th>)}
            </tr>
        </thead>;
    }
}

export default TableHeader;
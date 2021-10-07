import React, { Component } from 'react';
import _ from 'lodash';
class TableBody extends Component {
    renderCell=(item , coloum)=>{
        if(coloum.content) return coloum.content(item);
        return _.get(item, coloum.path);
    }
    createKey =(item, coloum)=>{
        return item._id +(coloum.path || coloum.key);
    };
    render() { 
            const {data , coloums } = this.props;
        return (
            <tbody>
                {data.map(item =>
                <tr key={item._id} >
                    {coloums.map(coloum => <td 
                    key={this.createKey(item, coloum)}>{this.renderCell(item, coloum)}
                    </td>)}
                   
                </tr>)}
                
            </tbody>

        
        );
    }
}
 
export default TableBody;
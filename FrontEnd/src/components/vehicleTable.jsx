import React, { Component } from 'react';
import Table from './common/table';
import { Link } from 'react-router-dom';

class VehicleTable extends Component {
    coloums = [
       { path : 'owner' ,lable : 'Owner Name', content : vehicle => 
       <Link to={`/vehicles/${vehicle._id}`} >{vehicle.owner}</Link>},
       { path : 'vehicleNumber' ,lable : 'Vehicle Number'},
       { path : 'makersClass' ,lable : 'Comapany'},
       { path : 'vehicleClass' ,lable : 'Vehicle Type'},
       { path : 'engineCC',lable : 'EngineCC'},
    
       { key : 'delete', content : vehicle => 
        <button 
        onClick={()=>this.props.onDelete(vehicle)} className="btn btn-danger">Delete
        </button>}
    ]
    render() { 
        const {vehicles ,onSort , sortColoum} = this.props;
        return (  
         <Table data={vehicles} coloums={this.coloums} onSort={onSort} sortColoum={sortColoum} />
        )
    }
}
 
 
export default VehicleTable;
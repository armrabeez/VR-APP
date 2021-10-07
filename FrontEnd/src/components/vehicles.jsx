import React, { Component } from 'react';
import { getVehicles , deleteVehicle} from '../services/vehicleService';
import Pagination from './common/pagination';
import {Paginate } from '../util/paginate';
import VehicleTable from './vehicleTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox';
import { toast } from 'react-toastify';

class Vehicles extends Component {
    state = { 
        vehicles : [],
        currentPage : 1,
        pageSize : 4,
        searchQuary:"",
        sortColoum : {path: "owner", order : "asc"}

     }
        
     async componentDidMount(){
            const { data : vehicles } = await getVehicles();
            this.setState({vehicles});
    }
    
     handleSearch= query => {
    this.setState({searchQuary: query, activeVehicle :null, currentPage:1})
     };

     
     handleDelete = async vehicle =>{
        const realVehicles = this.state.vehicles;
        const vehicles = realVehicles.filter(m => m._id !== vehicle._id);
        this.setState({vehicles : vehicles});

        try{
            await deleteVehicle(vehicle._id);
        }catch(ex){
            if(ex.response && ex.response.status === 404)
            toast.error('This vehicle has already been deleted');

            this.setState({vehicle : realVehicles});
        }
        
     };


     handelPageChange =page=>{
     this.setState({currentPage : page})  ;
     };

     handleSort=sortColoum=>{
     this.setState({sortColoum})
     };

    

     getPagedData = () =>{
        const {
            pageSize , 
            currentPage, 
            sortColoum, 
            searchQuary,
            vehicles : allVehicles } = this.state;

        let filtered = allVehicles;
        if(searchQuary){
            filtered= allVehicles.filter(m=> 
            m.vehicleNumber.toLowerCase().startsWith(searchQuary.toLowerCase()));
        }
        

        const sorted= _.orderBy(filtered, [sortColoum.path],[sortColoum.order]);

        const vehicles = Paginate(sorted,pageSize,currentPage);

        return {data : vehicles , totalCount :filtered.length };
     };

   
    render() { 
        const count = this.state.vehicles.length;

        const {pageSize , currentPage, sortColoum } = this.state;

        if(count === 0) return <p>there are no Vehicles in this database</p>;
       
        
        const {data : vehicles, totalCount} = this.getPagedData();
    
        return(
            
        <div>
    
        <div className='row'>
       
    
        <div className="col"> 
        <Link className="btn btn-primary" to="/vehicles/new">New Registration</Link>
            
            <p> <br/>Showing {totalCount} Registered Vehicle in the database</p>
            <SearchBox value={this.searchQuary} onChange={this.handleSearch}/>
            <VehicleTable
             vehicles={vehicles}
             sortColoum={sortColoum}
             onDelete={this.handleDelete}
             onSort={this.handleSort}
             />
            <Pagination 
            numberOfItems={totalCount} 
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange = {this.handelPageChange}
            />
       </div>
       </div>
            </div>
        );
        }

}
 
export default Vehicles;

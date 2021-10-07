import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getVehicle, saveVehicle } from '../services/vehicleService';



class VehicleForm extends Form {
    state ={
        data : {owner: "",
        vehicleNumber: "", 
        makersClass:"",
        vehicleClass:"",
        engineCC:""},
        errors:{},
        pattern:/^[0-9A-Z][0-9A-Z][0-9A-Z\s-ශ්‍රී][A-Z0-9\s-‍ශ්‍රී][0-9A-Z\s-][0-9\s-]+[0-9]$/
    };

    schema ={
            
        _id:Joi.string(),
        owner: Joi.string()
        .required()
        .label('Owner'),
        vehicleNumber: Joi.string().regex(this.state.pattern, 'VALID INPUT') 
        .required()
        .label("Vehicle Number"),
        makersClass:Joi.string()
        .required()
        .label("Company Name"),
        vehicleClass: Joi.string()
        .required()
        .label('Vehicle Type'),
        engineCC: Joi.number()
        .required()
        .min(100)
        .max(10000)
        .label('EngineCC')
    };

    //population vehicle 
    async componentDidMount(){

        const vehicleId = this.props.match.params.id;
        if(vehicleId ==="new") return;
       
        try{
             const {data:vehicle} = await getVehicle(vehicleId);
            this.setState({data:this.maptoViewModel(vehicle)})
        }catch(ex){
             if(ex.response && ex.response.status === 404)
             this.props.history.replace("/notFound");
        }
       
    };
    maptoViewModel(vehicle){
        return{
            _id:vehicle._id,
            owner:vehicle.owner,
            vehicleNumber:vehicle.vehicleNumber,
            makersClass:vehicle.makersClass,
            vehicleClass:vehicle.vehicleClass,
            engineCC:vehicle.engineCC
        };
    }
   
    doSubmit= async()=>{
        await saveVehicle(this.state.data);
        this.props.history.push("/vehicles");

    };
    render() { 
        
        return ( 
            <div>
                <h1>Registration</h1>
                <form  onSubmit={this.handleSubmit}>
                    {this.renderInput("owner", "Owner", "text")}
                    {this.renderInput("vehicleNumber", "Vehicle Number", 'text')}
                    {this.renderInput("makersClass", "Company Name", 'text')}
                    {this.renderInput("vehicleClass", "Vehicle Type", 'text')}
                    {this.renderInput("engineCC", "EngineCC", 'number')}
                    {this.renderButton("Save")}
                </form>
                
            </div>
         );
    }
}
 
export default VehicleForm;
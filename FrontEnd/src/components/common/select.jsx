import React from 'react';
const Select = ({name,label,value,options,error,onChange}) => {
    return ( 
        <div>
             <div className="form-group">
        <label htmlFor={name}>{label}</label>
            <select  value={value} 
                    onChange={onChange} 
                    id={name}
                    name={name} 
                    options={options}
                    className="form-control">

                        <option value=""/>
                         {options.map(option =>
                            (<option key={option._id} value={option._id}>
                                {option.name}
                            </option>))}  
                        

            </select>
        </div>
          {error && <div className="alert alert-danger">{error}</div>} 
        </div>
       
     );
}
 
export default Select;

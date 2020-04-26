import React, {Fragment, useState} from 'react'
import { calculateTotal } from '../helpers';

const Form = (props) => {

    const {hours, saveHours, hourly, saveHourly, antiquity, saveAntiquity, total, saveTotal, saveLoading} = props;

    //Def state
    const [error, saveError] = useState(false);


    //Fun submit
    const calculateSalary = e => {
        e.preventDefault();
        
    //Validate
        if (hours === 0 || hourly === 0 || antiquity === ''){
            saveError(true);
            return;
        }
            saveError(false);

        //Enable spinner
        saveLoading(true);

        setTimeout( () => {
            //Calculate
            const total = calculateTotal(hours, hourly, antiquity);
                
            //Save total
            saveTotal(total);

            //Disable spinner
            saveLoading(false);
        }, 3000);
  
    
    }


    return (
    <Fragment>
        <form onSubmit = {calculateSalary}>
            <div className="row">
                <div>
                    <label>Hours worked</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        min="0"
                        max="800"
                        step="0.01"
                        placeholder="Example: 190"
                        onChange = { e => saveHours(parseInt( e.target.value )) } 
                    />
                </div>
                <div>
                    <label>Hourly rate</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        min="0"
                        max="800"
                        step="0.01"
                        placeholder="Example: 15"
                        onChange = { e => saveHourly(parseInt( e.target.value )) }  
                    />
                </div>
                <div>
                    <label>Antiquity</label>
                    <select 
                        className="u-full-width"
                        onChange = { e => saveAntiquity (parseInt( e.target.value )) } 
                    >
                    <option value="">Select</option>
                    <option value="500">0-1 year</option>
                    <option value="750">1-5 years</option>
                    <option value="900">5-10 years</option>
                    <option value="1100">10 years and up</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calculate" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
        </form>

        {(error) ? <p className = "error">All fields are required</p> : null}

        
    </Fragment>
    );
}

export default Form;
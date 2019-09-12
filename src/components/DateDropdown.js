import React, {useState, useEffect} from "react";

export function DateDropdown (props) {
    const [Date, setDate] = useState(props.date);
    
    let year = new Date().getFullYear();
    let month= new Date().getMonth() + 1;
    let day = new Date().getDate();  
    
    return(
        <label> 
            Date: <input type="date" 
                name="today"
                value={this.props.date}
                min="2018-01-01"
                max= {`${year}-${month}-${day}`}
                /> 
        </label>
    )
};
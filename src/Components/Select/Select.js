import React from 'react';

 function Select(props){

    return(

        <>
            <h5>{props.label}</h5>
            <select>
                {props.options.map((option,index) =>{

                    return(<option key={index}>{option}</option>)
                    
                })}

            </select>
            <span>Por favor preencha este campo</span>
        </>  
    )
}

export default Select;
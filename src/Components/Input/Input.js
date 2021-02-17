import React from 'react';

 function Input(props){

    return(

        <>
            <h5>{props.label}</h5>
            <input
    
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
            
            /> 
            <span>Por favor preencha este campo</span>
        </>  
    )
}

{/* <Input
label={'idade:'}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.idade}
formkikTouched={formik.touched.idade}
formikErrors={formik.errors.idade}

/> */}


export default Input;
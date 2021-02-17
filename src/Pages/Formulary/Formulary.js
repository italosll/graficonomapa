import React, { useState } from 'react';
import {GlobalStyled} from '../../Themes/Global_Styles'
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes/Themes.js'
import { Container, Title , Container_global,Container_button} from './styles';
import Input from '../../Components/Input/Input'
import Select from '../../Components/Select/Select'
import { Link } from 'react-router-dom';

import {useFormik} from 'formik';
import * as Yup from 'yup';

import {useSelector} from 'react-redux';

import { string } from 'yup/lib/locale';

 function Formulary(props){

    const reduxDarkTheme = useSelector(state => state.DARK_THEME);

    const formik = useFormik({

        initialValues: {
            idade: null,
          },

        validationSchema: Yup.object({
            idade: Yup
                .number()
                .typeError("Este campo Deve conter um número!")
                .required("Este campo é obrigatório!"),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(

        <ThemeProvider theme={reduxDarkTheme ? darkTheme : lightTheme}>

            <Container_global>
                <GlobalStyled/>

                <Title>Algumas perguntinhas antes de continuar?</Title>

                <Container>

               

                        <h5>{'Idade: '}</h5>
                        <input
                            id="idade"
                            name="idade"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.idade}
                            autocomplete="off"
                            

                        />
                        {formik.touched.idade && formik.errors.idade
                        ? (<span>{formik.errors.idade}</span>)
                        : (<span></span>)
                        }
   

    
                        <h5>{'Sexo:'}</h5>
                        <select
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.sex}
                        
                        >

                        {['Selecionar','Masculino','Feminino'].map((option,index) =>{
                            return(<option key={index}>{option}</option>)

                        })}

                        </select>
                        <span>Por favor preencha este campo</span>
                        

                        <Select 
                            label={'Deficiência visual:'}
                            options={['Selecionar','Nenhum', 'Feminino','Astigmatismo','Miopia','Uso óculos, mas não sei informar']}

                        />

                        <Select 
                            label={'Grau de escolaridade:'}
                            options={['Fundamental','Médio', 'Ensino Superior', 'Pós-graduação']}

                        />
  
                </Container>

                <Container_button>
                    {formik.errors > 0
                    ?(
                       
                            <button>continuar</button>
                   
                    )
                    :(
                        <Link to='/tema'>
                            <button to='/tema'>continuar</button>
                        </Link>
                    )
                    }
                    
                </Container_button>

            </Container_global>

        </ThemeProvider>

    )

}

export default Formulary;
import React, { useState } from 'react';
import {GlobalStyled} from '../../Themes/Global_Styles'
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes/Themes.js'
import {  Title,Container_change , Mapa, Color_scheme, Row, Color,Container_text,Container_global, Container_button} from './styles';
import { Link } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';

 function ColorChoose(props){

    const reduxDarkTheme = useSelector(state => state.DARK_THEME);
    const [theme, setTheme] = useState(reduxDarkTheme ? darkTheme : lightTheme);
    const [scheme1, setScheme1] = useState(false)
    const [scheme2, setScheme2] = useState(false)
    const [scheme3, setScheme3] = useState(false)

    function chooseScheme(scheme){
        setScheme1(false)
        setScheme2(false)
        setScheme3(false)
        if(scheme === 1 )  setScheme1(true) ;
        if(scheme === 2 )  setScheme2(true) ;
        if(scheme === 3 )  setScheme3(true) ;
    }

    return(
        
        <ThemeProvider theme={theme}>

            <div className='App'>
                <GlobalStyled/>

                <Container_global >
                   
                <Title>Qual esquema de cores voce considera o melhor para ver no mapa?</Title>

                <Mapa/>

                {console.log(theme)}

                <Container_change>
                     <Color_scheme  
                        theme={theme} 
                        selected={scheme1} onClick={() => chooseScheme(1)}> 
                       
                        <Row>
                            <Color color={"#ADFF36"}/>
                            <Color color={"#4275FF"}/>                            
                            <Color color={"#FFEE28"}/>
                        </Row>

                        <Row>
                            <Color color={"#D20FFF"}/>
                            <Color color={"#FFBE1C"}/>                            
                            <Color color={"#FF881C"}/>  
                        </Row>
                    </Color_scheme>

                    <Color_scheme
                        theme={theme} 
                        selected={scheme2} onClick={() => chooseScheme(2)}> 
                        <Row>
                            <Color color={"#FFDE36"}/>
                            <Color color={"#9D42FF"}/>                            
                            <Color color={"#FFED29"}/>
                        </Row>

                        <Row>
                            <Color color={"#6259FF"}/>
                            <Color color={"#FFFE1C"}/>                            
                            <Color color={"#FFAAAC"}/>  
                        </Row>
                    </Color_scheme >

                    <Color_scheme
                        theme={theme} 
                        selected={scheme3} onClick={() => chooseScheme(3)}> 
                        <Row>
                            <Color color={"#91F6FF"}/>
                            <Color color={"#6FFF8F"}/>                            
                            <Color color={"#FFED29"}/>
                        </Row>

                        <Row>
                            <Color color={"#FFB480"}/>
                            <Color color={"#FF1C37"}/>                            
                            <Color color={"#CCCAAC"}/>  
                        </Row>
                    </Color_scheme>

                </Container_change>


                <Container_text>

                    <h4>1</h4>
                    <h4>2</h4>
                    <h4>3</h4>

                    
                </Container_text>

                <Container_button>

                    <Link to='/questao_1'>
                            <button>continuar</button>
                    </Link>

                </Container_button>
   


                </Container_global>


            </div>


        </ThemeProvider>
    )
}

export default ColorChoose;
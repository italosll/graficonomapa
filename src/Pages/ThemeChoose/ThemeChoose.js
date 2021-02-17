import React, { useState } from 'react';
import {GlobalStyled} from '../../Themes/Global_Styles'
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes/Themes.js'
import { Container ,Title, Button_light_theme, Button_dark_theme,Container_change , Mapa, Container_button, Container_global} from './styles';
import { Link } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';


 function ThemeChoose(props){

    const reduxDarkTheme = useSelector(state => state.DARK_THEME);
    const dispatch = useDispatch();

    return(
        
        <ThemeProvider theme={reduxDarkTheme ? darkTheme : lightTheme}>

                <Container_global>

                    <GlobalStyled/>

                    <Title>Para observar um mapa, você prefere o fundo de tela...</Title>

                    <Mapa/>

                    <Container_change >

                        <Button_light_theme 
                            selected={!reduxDarkTheme}
                            theme={lightTheme}
                            onClick={()=>{dispatch({
                                type: 'DARK_THEME',
                                payload: false,
                            
                            })}}
                            /> 

                        <Button_dark_theme 
                            selected={reduxDarkTheme}
                            theme={darkTheme}
                            onClick={()=>{dispatch({
                                type: 'DARK_THEME',
                                payload: true,
                            
                            })}}
                            />
                    </Container_change>

                    <Container_button>
                        <Link to='/color'>
                                <button>continuar</button>
                        </Link>
                    </Container_button>

                </Container_global>

        </ThemeProvider>
    )
}

export default ThemeChoose;
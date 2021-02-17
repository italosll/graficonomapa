import React, { useState } from 'react';
import {GlobalStyled} from '../../Themes/Global_Styles'
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes/Themes.js'
import {  Title , Mapa ,Question,Container_questions,Container_2_questions, Container_global, Container_button} from './styles';
import { Link } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';

 function AccuracyQuestions(props){

    const reduxDarkTheme = useSelector(state => state.DARK_THEME);
    const [theme, setTheme] = useState(reduxDarkTheme ? darkTheme : lightTheme);
    const [alternatives, setAlternatives] = useState([false,false,false,false,false])
 
    const dispatch = useDispatch();

    function select(alternative){
        switch (alternative) {
            case 0: setAlternatives([true,false,false,false]); break;
            case 1: setAlternatives([false,true,false,false]); break;
            case 2: setAlternatives([false,false,true,false]); break;
            case 3: setAlternatives([false,false,false,true]); break;
        
            default:break;
        }
    }



    return(
        
        <ThemeProvider theme={theme}>

            <Container_global>
                <GlobalStyled/>
           
                <Title>Observando o mapa é possível notar que ele...</Title>

                <Mapa/>

                <Container_questions theme={theme}>

                <Container_2_questions>
                    <Question onClick={()=>select(0)} selected={alternatives[0]} theme={theme}> 
                        a) Retrata fielmente uma região geográfica brasileira
                    </Question>

                    <Question onClick={()=>select(1)} selected={alternatives[1]} theme={theme}> 
                        b) Exibe dados quantitativos através de uma regiao geográfica
                    </Question>

                </Container_2_questions>


                <Container_2_questions>

                    <Question onClick={()=>select(2)} selected={alternatives[2]} theme={theme}>
                        c) Retrata a distinção entre duas regioes geográficas
                    </Question>

                    <Question onClick={()=>select(3)} selected={alternatives[3]} theme={theme}>
                        d) Não consigo responder a essa questão
                    </Question>

                </Container_2_questions>

                </Container_questions>

                <Container_button>

                    <Link to='/questao_2'>
                        <button>Continuar</button>
                    </Link>

                </Container_button>

            </Container_global>

        </ThemeProvider>
    )
}

export default AccuracyQuestions;
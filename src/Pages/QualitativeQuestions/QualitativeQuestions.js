import React, { useState } from 'react';
import {GlobalStyled} from '../../Themes/Global_Styles'
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes/Themes.js'
import { 
    Container_button,
    Container_global,
    Title, 
    Emoji_hated , 
    Mapa ,
    Question,
    Container_questions,
    Container_emojis,
    Emoji_ok,
    Emoji_didnt_enjoyed,
    Emoji_enjoyed,
    Emoji_really_enjoyed,

} from './styles';

import { Link } from 'react-router-dom';
import teste  from '../../Images/hated.png'
import { useSelector } from 'react-redux';

 function QualitativeQuestions(props){

    const reduxDarkTheme = useSelector(state => state.DARK_THEME);
    const [theme, setTheme] = useState(reduxDarkTheme ? darkTheme : lightTheme);
    const [answer1, setAnswer1] = useState([0,0,0,0,0]);
    const [answer2, setAnswer2] = useState([0,0,0,0,0]);
    const [answer3, setAnswer3] = useState([0,0,0,0,0]);


    function customSetState(emoji,setState){

        switch(emoji){
            case 'hated': 
                {setState([1,0,0,0,0]); break;}

            case 'didnt_enjoyed': 
                {setState([0,1,0,0,0]); break;}

            case 'ok': 
                {setState([0,0,1,0,0]); break;}

            case 'enjoyed': 
                {setState([0,0,0,1,0]); break;}

            case 'really_enjoyed': 
                {setState([0,0,0,0,1]); break;}
        }   
    }

    function vote(question, emoji){

        switch(question){

            case 'question_1':{ customSetState(emoji, setAnswer1); break; }
            case 'question_2':{ customSetState(emoji, setAnswer2); break; }
            case 'question_3':{ customSetState(emoji, setAnswer3); break; }
            
        }
    }

    return(
        
        <ThemeProvider theme={theme}>

            <div className='App'>
                <GlobalStyled/>

                <Container_global >
                   
                    <Title>Classifique o mapa abaixo:</Title>

                    <Mapa/>

                        <Container_questions theme={lightTheme}>


                                <Question > 
                                    questao_
                                </Question>

                                <Container_emojis>

                                    <Emoji_hated 
                                        selected={Boolean(answer1[0])} 
                                        onClick={() => vote('question_1','hated')}
                                    />

                                    <Emoji_didnt_enjoyed 
                                        selected={Boolean(answer1[1])} 
                                        onClick={() => vote('question_1','didnt_enjoyed')}
                                    />

                                    <Emoji_ok 
                                        selected={Boolean(answer1[2])} 
                                        onClick={() => vote('question_1','ok')}
                                    />

                                    <Emoji_enjoyed 
                                        selected={Boolean(answer1[3])} 
                                        onClick={() => vote('question_1','enjoyed')}
                                    />

                                    <Emoji_really_enjoyed
                                        selected={Boolean(answer1[4])} 
                                        onClick={() => vote('question_1','really_enjoyed')}
                                    />

                                </Container_emojis>

                                <Question > 
                                    Fácil ou difícil de entender ?
                                </Question>

                                <Container_emojis>

                                    <Emoji_hated 
                                        selected={Boolean(answer2[0])} 
                                        onClick={() => vote('question_2','hated')}
                                    />

                                    <Emoji_didnt_enjoyed 
                                        selected={Boolean(answer2[1])} 
                                        onClick={() => vote('question_2','didnt_enjoyed')}
                                    />

                                    <Emoji_ok 
                                        selected={Boolean(answer2[2])} 
                                        onClick={() => vote('question_2','ok')}
                                    />

                                    <Emoji_enjoyed 
                                        selected={Boolean(answer2[3])} 
                                        onClick={() => vote('question_2','enjoyed')}
                                    />

                                    <Emoji_really_enjoyed
                                        selected={Boolean(answer2[4])} 
                                        onClick={() => vote('question_2','really_enjoyed')}
                                    />

                                </Container_emojis>

                                <Question > 
                                    bonito ou feio?
                                </Question>

                                <Container_emojis>

                                    <Emoji_hated 
                                        selected={Boolean(answer3[0])} 
                                        onClick={() => vote('question_3','hated')}
                                    />

                                    <Emoji_didnt_enjoyed 
                                        selected={Boolean(answer3[1])} 
                                        onClick={() => vote('question_3','didnt_enjoyed')}
                                    />

                                    <Emoji_ok 
                                        selected={Boolean(answer3[2])} 
                                        onClick={() => vote('question_3','ok')}
                                    />

                                    <Emoji_enjoyed 
                                        selected={Boolean(answer3[3])} 
                                        onClick={() => vote('question_3','enjoyed')}
                                    />

                                    <Emoji_really_enjoyed
                                        selected={Boolean(answer3[4])} 
                                        onClick={() => vote('question_3','really_enjoyed')}
                                    />

                                </Container_emojis>

                        </Container_questions>
            
                        <Container_button>
                            <Link to={'/'}>
                                <button>Continuar</button>
                            </Link>
                        </Container_button>

                    </Container_global>

            </div>

        </ThemeProvider>
    )
}

export default QualitativeQuestions;
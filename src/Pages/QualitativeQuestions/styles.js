import { color } from 'd3';
import styled from 'styled-components';
import goias_fixo from '../../Maps/goias_fixo.png'

import hated from '../../Images/hated.png';
import didnt_enjoyed from '../../Images/didnt_enjoyed.png';
import ok from '../../Images/ok.png';
import enjoyed from '../../Images/enjoyed.png';
import really_enjoyed from '../../Images/really_enjoyed.png';

import hated_grey from '../../Images/hated_grey.png';
import didnt_enjoyed_grey from '../../Images/didnt_enjoyed_grey.png';
import ok_grey from '../../Images/ok_grey.png';
import enjoyed_grey from '../../Images/enjoyed_grey.png';
import really_enjoyed_grey from '../../Images/really_enjoyed_grey.png';


export const Title = styled.h1`
    margin-left:auto;
    margin-right:auto;
    font-weight:700;
    margin-top:40px;
    text-align:center;
`; 

export const Mapa= styled.div`
    width:100%;
    height:35vh;
    min-height:150px;
    margin-top:2rem;
    margin-bottom:2rem;
    background-image: url(${goias_fixo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; 
`;

export const Container_change= styled.div`
    width:100vw;
    height:15vh;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    margin-bottom:auto;
`;

export const Button_light_theme = styled.div`
    width:70px;
    height:70px;
    border-radius:100px;
    border: 5px solid lightgray;
    background:#FFF;
`;

export const Button_dark_theme = styled(Button_light_theme)`
    background:#363537;
    border-color:darkgray;

`;

export const Question = styled.text`
    width:80%;
 
    

    text-decoration:none;
    font-size:1.2rem;
    
    @media( min-width: 800px){
        margin-left:25%;
    }

`;

export const Container_questions = styled.div`
    width:100%;
    margin-bottom:4vh;
    display:flex;
    flex-direction:column;
    color: ${props => props.theme.text};
    align-items:center;

 

    @media( min-width: 800px){
        width:35%;
    }
`;

export const Container_emojis = styled.div`
    width:100%;
    height:auto;
    margin-top:5px;
    margin-bottom:5vh;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    padding-left:10%;
    padding-right:10%;

    @media( min-width: 800px){
        width:75%;
    }
`;

export const Emoji_hated = styled.div`
    background-image: url(${props => props.selected === true ? hated : hated_grey});
    background-repeat:no-repeat;
    background-size:25px;
    width:25px;
    height:25px;
`;

export const Emoji_didnt_enjoyed = styled(Emoji_hated)`
    background-image: url(${props => props.selected === true ? didnt_enjoyed : didnt_enjoyed_grey});
`;

export const Emoji_ok = styled(Emoji_hated)`
    background-image: url(${props => props.selected === true ? ok : ok_grey });
`;

export const Emoji_enjoyed = styled(Emoji_hated)`
    background-image: url(${props => props.selected === true ? enjoyed : enjoyed_grey });
`;

export const Emoji_really_enjoyed = styled(Emoji_hated)`
    background-image: url(${props => props.selected === true ? really_enjoyed : really_enjoyed_grey });
`;

export const Container = styled.div`
    width:100%;
    height:auto;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-direction:column;


    @media( min-width: 800px){
        width:60vw;
    }

    @media( min-width: 1024px){
        width:40vw;
    }
`;

export const Container_button = styled(Container)`
    width:100%;
    margin-top:auto;
    height:auto;


    @media( min-width: 800px){
        margin-bottom:5vh;
        width:25%;
    }
`;

export const Container_global = styled.div`
    width:100vw;
    height:100vh;
    margin:0;
    padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;

`;
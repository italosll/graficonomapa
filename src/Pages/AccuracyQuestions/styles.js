
import styled from 'styled-components';

import goias_fixo from '../../Maps/goias_fixo.png'

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


export const Question = styled.button`

    border:none;
    outline:none;
    background:#0000;
    font-family:'Roboto';
    font-weight:500;
    color:${props => props.selected ? props.theme.primary: props.theme.text};
    box-shadow: 0px 0px 0px #0000;

    width:80%;
    height:auto;
    margin-top:4vh;
    margin-left:10%;
    margin-right:10%;
    text-decoration:none;
    text-align:left;
    font-size:1.2rem;

    @media( min-width: 800px){
    flex-direction:row;
    }

    :active{
    box-shadow: 0px 0px 2px #0000;
    transform: translateY(4px)
}



`;

export const Container_questions = styled.div`
width:100%;
margin-bottom:4vh;
display:flex;
flex-direction:column;
color: ${props => props.theme.text};

@media( min-width: 800px){
    flex-direction:row;
    width:70%;

    }
`;

export const Container_2_questions = styled.div`
width:100%;
height:50%;
display:flex;
flex-direction:column;

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



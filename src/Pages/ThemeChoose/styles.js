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
    margin-top:2rem;
    margin-bottom:2rem;
    background-image: url(${goias_fixo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; 
`;

export const Container_change= styled.div`
    width:100%;
    height:15vh;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    margin-bottom:auto;

    @media( min-width: 800px){
        width:30%;

    }
`;

export const Button_light_theme = styled.div`
    width:70px;
    height:70px;
    border-radius:100px;
    border: 5px solid lightgray;
    border-color:${props => props.selected ? props.theme.primary : '#555'};
    background:#FFF;

`;

export const Button_dark_theme = styled(Button_light_theme)`

    background:#363537;
    border-color:${props => props.selected ? props.theme.primary : '#555'};

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




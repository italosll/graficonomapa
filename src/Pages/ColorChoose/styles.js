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
    width:100vw;
    height:35vh;
    margin-top:2rem;
    margin-bottom:2rem;
    background-image: url(${goias_fixo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; 
`;

export const Container_change= styled.div`
    width:90%;
    height:10vh;
    display:flex;
    margin-left:auto;
    margin-right:auto;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;

    @media( min-width: 800px){
        width:30%;
    }
`;

export const Container_text= styled(Container_change)`
    height:auto;
    margin-bottom:auto;
`;

export const Color_scheme = styled.div`
    width:calc(80%/5);
    height:60%;
    border-radius:3px;
    box-shadow: 0 0 0 5px ${props => props.selected ?  props.theme.primary  : '#00000000'};
`;

export const Row =styled.div`
    width:100%;
    height:50%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`;

export const Color =styled.div`
    width:calc(90%/3);
    height:90%;
    background:${props => props.color};
    border-radius:3px;
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





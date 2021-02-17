import styled from 'styled-components';

export const Title = styled.h1`
margin-left:auto;
margin-right:auto;
font-weight:700;
margin-top:5vh;
text-align:center;
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
        width:36%;
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


import {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`

html{
    box-sizing: border-box;
    font-size:100%;
    
}

*, *:before, *:after {
    
    margin:0;
    padding:0;
    box-sizing: inherit;
    text-decoration:none;
}

body{
    width:100%;
    height:auto;
    background: ${({ theme }) => theme.body};
    font-family:  Roboto, sans-serif;

    //transition: background-color 0.50s ease-out; 
}

h1{
    font-size:1.8rem;
    padding-right:1rem;
    padding-left:1rem;
    color: ${({ theme }) => theme.primary};


    @media( min-width: 800px){
        font-size:2.2rem;
        margin-bottom:5vh;
    }

    @media( min-width: 1024px){

        font-size:2.4rem;
    }

}

h4{
    color: ${({ theme }) => theme.text};
    font-size:1rem;
    font-weight:900;

    @media( min-width:800px){
        font-size:1.2rem;
    }
}

h5{
    color: ${({ theme }) => theme.text};
    font-size:.9rem;
    font-weight:400;
    margin-left:6%;
    margin-top:6%;

}

select{
    width:90%;
    height:40px;
    margin-right:5%;
    margin-left:5%;
    margin-top:.3rem;
    padding-left:10px;
    border-width: 2px;
    border-style:solid;
    border-radius:8px;

    color :${({ theme }) => theme.border};
    border-color: ${({ theme }) => theme.border};
    background:${({ theme }) => theme.body};
    
}

select:focus{
    outline: none;
    background-color: ${({ theme }) => theme.secondary_light};
    border-color: ${({ theme }) => theme.primary};
    border-width: 4px;
}

input{
    width:90%;
    height:40px;
    margin-right:5%;
    margin-left:5%;
    margin-top:1vh;
    border-width: 2px;
    border-style:solid;
    border-radius:8px;
    padding-left:10px;
    color :${({ theme }) => theme.border};
    border-color: ${({ theme }) => theme.border};
    background:${({ theme }) => theme.body};
}

input:focus{
    outline: none;
    background-color: ${({ theme }) => theme.secondary_light};
    border-color: ${({ theme }) => theme.primary};
    border-width: 4px;
}

span{
    margin-top: 1vh;
    font-size:12px;
    margin-left:6%;
    color:${({theme}) => theme.error}
}

button{
    width:100%;
    height:8vh;
    border:none;
    outline:none;
    background:${({ theme }) => theme.primary};
    font-family:'Roboto';
    font-weight:700;
    color:${({ theme }) => theme.button_text};
    box-shadow: 0px 0px 5px #888888;

    @media( min-width:800px){
        font-size:1rem;
        height:40px;       
        border-radius:5px;
    }

}

button:active{
    box-shadow: 0px 0px 2px #888888;
    transform: translateY(2px)
}

form{
    width:100%;
    height:100%;
}

`;




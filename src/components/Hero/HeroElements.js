import styled from 'styled-components';

export const HeroImage = styled.img`
display: block;
background-size: cover;
background-repeat: no-repeat;
overflow:hidden;
opacity: 70%;
max-height: 800px;
width: 100%;
background-color: rgba(0,0,0);
z-index: -10;

&:hover{
    transition: all 0.2s ease-in-out;
    opacity: 90%;
}

`

export const HeroContainer = styled.div`
    background-color: black;
    z-index: 10;
`
export const HeroText = styled.h1`
    text-transform: uppercase;
    color: white;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`
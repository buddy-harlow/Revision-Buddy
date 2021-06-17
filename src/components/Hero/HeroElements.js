import styled from 'styled-components';
import Banner from '../../images/Hero.jpg'
import { Link as LinkR } from 'react-router-dom';

export const HeroImage = styled.div`
position: relative;
height: 500px;
overflow: hidden;
background: url(${Banner}) no-repeat center;
background-size: cover;

`

export const HeroContainer = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   text-align: center;
   color: white;
   height: 100;
   width: 100;
   font-weight: 700;
   text-transform: uppercase;
    
`
export const HeroText = styled.h1`
    text-transform: uppercase;
    text-align: center;
    color: white;
    display: flex;
    width: 100%;
    margin: auto;
    align-items:center;
    justify-content:center;
    padding-bottom: 40px;
   
`

export const HeroButton = styled(LinkR)`
    border-radius: 50px;
    background #ADD8E6;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    `
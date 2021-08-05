import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import Banner from '../images/Hero.jpg'

// Text-styles
export const Header = styled.h1`
    color: #ADD8E6;
    display: flex;
    margin-top: 40px;
    justify-content: center;
    padding-bottom: 50px;
    padding-top: 50px;
`
export const ImgWrapper = styled.h1`    
    display: flex;
    margin-top: 20px;
    justify-content: center;
    padding-bottom: 50px;
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
export const HeroImage = styled.div`
position: relative;
height: 500px;
overflow: hidden;
background: url(${Banner}) no-repeat center;
background-size: cover;

`

export const Callout = styled.h2`
    padding-bottom: 26px;
    font-weight: 700;
    font-size: 30px;
    color: #ADD8E6;
`
export const IconWrap = styled.span`
    font-weight: 700;
    font-size: 30px;
    color: #ADD8E6;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Note = styled.li`
    font-weight: 700;
    font-size: 20px;
    list-style-position: inside;
    color: #ADD8E6;
`
// Reusable styled components
export const StyledInput = styled.input`
background: none;
background-color: #181A18;
display: inline;
color: #ADD8E6;
font-size: 18px;
padding: 10px 10px 10px 5px;
width: 100%;
border: none;
border-radius: 0;
z-index: 0;
border-bottom: 1px solid #ADD8E6;
margin: 25px 0;

&:focus {
  outline: none;
}

&:focus ~ .form-input-label {
    color: #ADD8E6;
  @include shrinkLabel();
}
`
export const ButtonContainer = styled.div`
display: flex;
align-items: center;
text-decoration: none;
justify-content: center;
`
export const StandardButton = styled(LinkR)`
border-radius: 50px;
background: #ADD8E6;
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
export const ButtonsSideBySide = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`

import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const StandardButton = styled(LinkR)`
display: flex;
align-items: center;
text-decoration: none;
justify-content: center;
@media screen and (max-width: 768px) {
    display: none;
}
`

export const BtnLink = styled(LinkR)`
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
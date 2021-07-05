import { styled } from 'styled-components';

export const SignUpBlock = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        
        width: 80%
    }
    
`

export const Title = styled.h2`
    margin: 10px 0;
    color: #ADD8E6;
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Button = styled.button`
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
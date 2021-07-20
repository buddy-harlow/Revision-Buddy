import styled from 'styled-components'

export const SignInBlock = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
    font-size: 20px;
    color: #ADD8E6;
    @media (max-width: 768px) {
        
        width: 80%
    }
        :p{
            display: none;
        }
    
`

export const Title = styled.h2`
    margin: 10px 0;
    color: #ADD8E6;
    text-align: center;
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

import styled from 'styled-components'

export const PageContainer = styled.div`
    width: 100%;
    background-color: #000000;
`

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    margin-left: 10%;
    margin-right: 10%;
    padding-bottom: 40px;
    
`

export const SignInBlock = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    margin: 10px 0;
    
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Button = styled.button`
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

import styled from 'styled-components';

export const RowContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: black;
color: white;
height: 400px;
align-items: center;
justify-content: space-around;
width: 100%
`
export const Callout = styled.div`
    padding-bottom: 26px;
    font-weight: 700;
    font-size: 30px;
    color: #ADD8E6;
`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
color: white;
width: 40%;
text-align: center;
font-size: 1.4rem;

&:p{
    font-size: 60px;
}
`

export const LeftContainer = styled.div`


`

export const RightContainer = styled.div`
font-size: 10rem;
color: #ADD8E6;


`

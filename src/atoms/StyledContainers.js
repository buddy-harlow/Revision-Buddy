import React from 'react';
import styled from 'styled-components';

export const SingleColumn = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
    height: 90vh;
    
`;
export const TwoColumn = styled.div`
display: flex;
flex-direction: column;
color: white;
width: 40%;
text-align: center;
font-size: 1.4rem;

&:p{
    font-size: 60px;
}
`;
export const ThreeColumn = styled.div`
display: flex;
flex-direction: column;
color: white;
width: 30%;
text-align: center;
font-size: 1.4rem;

&:p{
    font-size: 60px;
}
`;
export const RowContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: black;
padding: 50px 0;
color: white;
align-items: center;
justify-content: space-around;
width: 100%
`;
export const BlackBackground = styled.div`
background-color: black;
width: 100%;
padding-top: 30px;
padding-bottom: 30px;
`;
export const GridContainer = styled.div`
    display: grid;
    gap: 1rem;
    padding: 0 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
`;

export const GeneralContainer = styled.div`
    width: 100%;
    background-color: #000000;
    display: flex;
    flex-direction: column;
`;

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
 
`;

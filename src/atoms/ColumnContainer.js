import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
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

const ColumnContainer = props => {
    return (
        <Column>
            {props.children}
        </Column>
    )
}

export default ColumnContainer

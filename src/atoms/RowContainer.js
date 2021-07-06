import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
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

const RowContainer = props => {


    return (
        <Row>
            {props.children}
        </Row>
    )
}

export default RowContainer

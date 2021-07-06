import React from 'react';
import styled from 'styled-components';

const BlueTitle = styled.div`
    padding-bottom: 26px;
    font-weight: 700;
    font-size: 30px;
    color: #ADD8E6;
`

const Callout = props => {
    return (
        <BlueTitle>
            {props.children}
        </BlueTitle>
    )
}

export default Callout

import React from 'react'
import {ColumnContainer, 
    LeftContainer, 
    RightContainer,
    Callout,
RowContainer} from './AboutSectionElements'
import { MdLibraryMusic } from 'react-icons/md';

const AboutSection = () => {
    return (
        <>
        <RowContainer>
            <ColumnContainer>
                <LeftContainer>
                    <Callout>Less Emails: More Mixing</Callout>
                     <p>The most creative part of Audio Engineering shouldn't be
                         managing client relations. Mix Buddy is a tool designed keep
                         client relationships as organized as possible so you can spend
                         more time listening to critical material and less time tracking down
                         mix notes.
                     </p>
                </LeftContainer>
            </ColumnContainer>
            <ColumnContainer>
                <RightContainer>
                    <MdLibraryMusic />
                </RightContainer>
            </ColumnContainer>
        </RowContainer>
        </>
    )
}

export default AboutSection

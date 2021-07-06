import React from 'react'
import RowContainer from '../../atoms/RowContainer'
import ColumnContainer from '../../atoms/ColumnContainer'
import Callout from '../../atoms/Callout'
import { MdLibraryMusic } from 'react-icons/md';

const AboutSection = () => {
    return (
        <>
        <RowContainer>
            <ColumnContainer>
                <div>
                    <Callout>Less Emails: More Mixing</Callout>
                     <p>The most creative part of Audio Engineering shouldn't be
                         managing client relations. Mix Buddy is a tool designed keep
                         client relationships as organized as possible so you can spend
                         more time listening to critical material and less time tracking down
                         mix notes.
                     </p>
                </div>
            </ColumnContainer>
            <ColumnContainer>
                <div>
                    <MdLibraryMusic style={{fontSize: "10rem", color: "#ADD8E6"}}/>
                </div>
            </ColumnContainer>
        </RowContainer>
        </>
    )
}

export default AboutSection

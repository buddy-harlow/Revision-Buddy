import React from 'react'
import { MdLibraryMusic } from 'react-icons/md'
import { RowContainer, TwoColumn } from '../atoms/StyledContainers'
import { Callout } from '../atoms/StyledComponents'

const AboutSection = () => (
  <>
    <RowContainer>
      <TwoColumn>
        <div>
          <Callout>Less Emails: More Mixing</Callout>
          <p>
            The most creative part of Audio Engineering shouldn&lsquo;t be
            managing client relations. Mix Buddy is a tool designed keep
            client relationships as organized as possible so you can spend
            more time listening to critical material and less time tracking down
            mix notes.
          </p>
        </div>
      </TwoColumn>
      <TwoColumn>
        <div>
          <MdLibraryMusic style={{ fontSize: '10rem', color: '#ADD8E6' }} />
        </div>
      </TwoColumn>
    </RowContainer>
  </>
)

export default AboutSection

import React from 'react'

import SignIn from '../molecules/SignIn'
import { Header } from '../atoms/StyledComponents'
import { SingleColumn, GeneralContainer } from '../atoms/StyledContainers'

const SignInPage = () => (
  <>
    <GeneralContainer>
      <SingleColumn>
        <Header>Sign in</Header>

        <SignIn />
      </SingleColumn>
    </GeneralContainer>
  </>
)

export default SignInPage

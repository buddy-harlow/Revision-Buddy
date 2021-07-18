import React from 'react';
import SignUp from '../molecules/SignUp';
import { Header } from '../atoms/StyledComponents';
import { SingleColumn, GeneralContainer } from '../atoms/StyledContainers';

const SignInPage = () => {
  return (
        <>
        <GeneralContainer>
            <SingleColumn >
            <Header>Sign Up</Header>
            <SignUp />
            </SingleColumn>
        </GeneralContainer>
        </>
  );
};

export default SignInPage;

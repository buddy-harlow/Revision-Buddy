import React from 'react'
import FullNav from '../organisms/FullNav'
import SignIn from '../molecules/SignIn'
import Header from '../atoms/Header'
import GeneralContainer from '../atoms/GeneralContainer'
import SingleColumn from '../atoms/SingleColumnPage'


const SignInPage = () => {
    return (
        <>
        <FullNav />
        <GeneralContainer>  
            <SingleColumn >
            <Header>Sign in</Header>
            <SignIn />
            </SingleColumn>
        </GeneralContainer>
        </>
    )
}

export default SignInPage

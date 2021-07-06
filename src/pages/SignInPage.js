import React from 'react'
import FullNav from '../organisms/FullNav'
import SignIn from '../molecules/SignIn'
import Header from '../atoms/Header'
import GeneralContainer from '../atoms/GeneralContainer'
import Row from '../atoms/Row'


const SignInPage = () => {
    return (
        <>
        <FullNav />
        <GeneralContainer>
                <Header>Sign in</Header>
            <Row>
            <SignIn />

            </Row>
        </GeneralContainer>
        </>
    )
}

export default SignInPage

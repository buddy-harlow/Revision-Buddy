import React from 'react'
import FullNav from '../../components/FullNav'
import SignIn from '../../components/SignIn'
import { PageContainer, Header, Container} from './SignInPageElements'

const SignInPage = () => {
    return (
        <>
        <FullNav />
        <PageContainer>
                <Header>Sign in or Sign up</Header>
            <Container>
            <SignIn />

            </Container>
        </PageContainer>
        </>
    )
}

export default SignInPage

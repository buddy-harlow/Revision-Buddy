import React from 'react'
import FormInput from '../../atoms/Form-Input'

import { ButtonContainer, StandardButton, ButtonsSideBySide } from '../../atoms/StyledComponents'
import { SignInBlock, Title, Button } from './SignInElements'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',

    }
  }

  handleChange(event) {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { email, password } = this.state

    return (
      <>
        <SignInBlock>
          <Title>I already have an account</Title>
          <p>Sign in with your email and password</p>

          <form onSubmit={this.handleSubmit}>
            <FormInput name="email" type="email" placeholder="Email" value={email} label="email" handleChange={this.handleChange} required />
            <FormInput name="password" type="password" placeholder="Password" value={password} label="password" handleChange={this.handleChange} required />
            <ButtonsSideBySide>
              <ButtonContainer>
                <StandardButton to="/" type="submit">Sign in</StandardButton>
              </ButtonContainer>
              <ButtonContainer>
                <Button onClick={signInWithGoogle} type="button" isGoogleSignIn>Sign in with Google</Button>
              </ButtonContainer>

            </ButtonsSideBySide>
          </form>
        </SignInBlock>
      </>
    )
  }
}

export default SignIn

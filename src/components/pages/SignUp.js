import React from 'react';
import * as Components from '../Components';

function SignUp () {
    const [signIn, toggle] = React.useState(true);
  return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign In</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot Password</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverLayContainer signinIn={signIn}>
                <Components.OverLay signIn = {signIn}>
                    <Components.LeftOverLayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back !</Components.Title>
                        <Components.Paragraph>
                         To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverLayPanel>

                    <Components.RightOverLayPanel signinIn={signIn}>
                        <Components.Title>Hello</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>       
                    </Components.RightOverLayPanel>
                </Components.OverLay>
            </Components.OverLayContainer>
        </Components.Container>
  )
}

export default SignUp;

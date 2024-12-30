import AuthContainer from '@/components/auth/auth-container'
import LoginForm from '@/components/auth/forms/form-login'
import React from 'react'

const Login = () => {
  return (
    <AuthContainer  authTitle="Welcome back, Traveler!" authSubTitle="Pick up where you left off!" backBtnHref='/auth/register' backBtnLabel='New to our travels? Sign up!'>
      <LoginForm />
    </AuthContainer>
  )
}

export default Login
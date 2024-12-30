import AuthContainer from '@/components/auth/auth-container';
import RegisterForm from '@/components/auth/forms/form-register';
import React from 'react';

const Register = () => {
  return (
    <AuthContainer 
      authTitle="Join the Adventure!" 
      authSubTitle="Sign up and explore the world with us!" 
      backBtnHref='/auth/login' 
      backBtnLabel='Already a member? Log in here!'
    >
      <RegisterForm />
    </AuthContainer>
  );
};

export default Register;

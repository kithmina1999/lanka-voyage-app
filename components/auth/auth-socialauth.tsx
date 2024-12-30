import React from 'react'
import { Button } from '../ui/button'
import { FaGoogle } from "react-icons/fa";

function SocialAuthBtn() {
  return (
    <Button className='w-full' variant='google'>
        <FaGoogle />
        Sign in with Google
        </Button>
  )
}

export default SocialAuthBtn
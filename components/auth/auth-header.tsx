import { Poppins } from 'next/font/google'
import React from 'react'

interface AuthHeaderProps{
    authTitle:string
    authSubTitle:string
}

const fonts = Poppins({
    subsets:['latin'],
    weight:['400'],
    
})

function AuthHeader({authTitle,authSubTitle}:AuthHeaderProps) {
  return (
    <div className={`${fonts.className} text-center`}>
        <h1 className='text-3xl font-bold text-victoria-950'>{authTitle}</h1>
        <p className='text-sm text-muted-foreground'>{authSubTitle}</p>
    </div>
  )
}

export default AuthHeader
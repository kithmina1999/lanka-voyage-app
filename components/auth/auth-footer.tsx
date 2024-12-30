import React from 'react'
import BackBtn from './auth-backbtn'
import SocialAuthBtn from './auth-socialauth'

interface AuthFooterProps{
    backBtnHref:string
    backBtnLabel:string
}

function AuthFooter({backBtnHref,backBtnLabel}:AuthFooterProps) {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <SocialAuthBtn />
        <BackBtn backBtnLabel={backBtnLabel} backBtnHref={backBtnHref}/>
        
    </div>
  )
}

export default AuthFooter
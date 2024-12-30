import React, { ReactNode } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import AuthHeader from './auth-header'
import AuthFooter from './auth-footer'

interface AuthContainerProps{
    authTitle:string
    authSubTitle:string
    backBtnLabel:string
    backBtnHref:string
    children:ReactNode
}

function AuthContainer({children,authSubTitle,authTitle,backBtnHref,backBtnLabel}:AuthContainerProps) {
  return (
    <Card className=' w-[500px] mx-auto'>
        <CardHeader>
            <AuthHeader authTitle={authTitle} authSubTitle={authSubTitle}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter>
            <AuthFooter backBtnLabel={backBtnLabel} backBtnHref={backBtnHref}/>
        </CardFooter>
    </Card>
  )
}

export default AuthContainer
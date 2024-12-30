import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='min-h-[100vh] flex items-center justify-center'>
        {children}
    </main>
  )
}

export default layout
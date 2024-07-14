import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Layout = ({ children } : { children : React.ReactNode }) => {
  return (
    <main className='root' >
        <Sidebar />
        <MobileNav /> 

        <div className='root-container dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ' >
            <div className='wrapper' >
                {children}
            </div>
        </div>

        <Toaster />
    </main>
  )
}

export default Layout
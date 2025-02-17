
import Link from 'next/link'
import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navbar() {
  return (
   <nav className='sticky top-0 w-full border-b z-50  backdrop-blur '>
  <div className='max-w-7xl mx-auto p-4'>
    <div className='flex items-center justify-between h-5'>
        <div className='flex items-center'>
            <Link href='/' className='text-xl font-bold font-mono tracking-wider'>
            Dogtopia
            </Link>
        </div>
        <DesktopNavbar/>
        <MobileNavbar/>
    </div>
  </div>
   </nav>
  )
}

import { HomeIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <nav className='flex space-x-4'>
    <ul className='flex justify-end '>
        <Link href='/'>
        <HomeIcon/>
        </Link>
        <Link href='/profile'>
        <UserIcon/>
        <span>Profile</span>
        </Link>

        
       
    </ul>
   </nav>
  )
}

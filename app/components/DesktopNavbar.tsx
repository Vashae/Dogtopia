import React from 'react'
import ModeToggle from './ModeToggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DesktopNavbar() {
  
  return (
  <div className='hidden md:flex items-center space-x-4'>
   <ModeToggle/>
    <Button variant='ghost' className='flex items-center gap-2 w-full' asChild>
      <Link href='/' className='w-6 h-6'>
      <span className='hidden lg:inline'>Home</span>
      </Link>
    </Button>
    <Button variant='ghost' className='flex items-center gap-2 w-full' asChild>
      <Link href='/SignUp' className='w-6 h-6'>
      <span>Sign Up</span></Link>
    </Button>
    </div>
  )
}

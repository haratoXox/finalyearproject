import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import Mobilenav from './Mobilenav'

const Header = () => {
  return (
<header className='w-full border-b' style={{background:'#bdc6ad'}}>
  <div className='wrapper flex items-center justify-between'>
    <Link href="/" className='w-36'> 
      <Image src="/assets/images/KRMU Logo.svg" width={128} height={38} />
    </Link>

    <SignedIn>
      <nav className='md:flex-between hidden w-full max-w-xs'>
        <NavItems/>
      </nav>
    </SignedIn>

    <div className='flex w-32 justify-end gap-3'>
      <SignedIn>
        <UserButton afterSignOutUrl='/'/>
        <Mobilenav/>
      </SignedIn>
      <SignedOut>
        <Button asChild className='rounded-full' size="lg" style={{ backgroundColor: '#d5e2e5' , color: '#0f7173' ,  transition: 'background-color 0.3s, color 0.3s' }}>
          <Link href="/sign-in">
            login
          </Link>
        </Button>
      </SignedOut>
    </div>
  </div>
</header>

  )
}

export default Header
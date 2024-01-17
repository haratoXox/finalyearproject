import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'
import NavItems from './NavItems'

const Mobilenav = () => {
  return (
  <nav className='md:hidden'>
<Sheet>
  <SheetTrigger className='align-middle'>
    <Image
    src="/assets/icons/menu.svg"
    alt="menu"
    width={24}
    height={24}
    className='cursor-pointer'
    />

  </SheetTrigger>
  <SheetContent className='flex flex-col gap-6 md:hidden' style={{backgroundColor:"#ade8f4"}}>
    <Image
    src="/assets/images/KRMU Logo.svg"
    alt="logo"
    width={128}
    height={38}
    />

    {/* idk why this is not working have to correct it latter on */}
    
    {/* <Separator className="border border-gray-50"/> */}
    <NavItems/>
  </SheetContent>
  
</Sheet>
  </nav>
  )
}

export default Mobilenav
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='boarder-t' >
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image
            src="/assets/images/KRMU Logo.svg"
            alt="logo"
            width={200}
            height={50}/>
        </Link>

        <p>2024 Krmu-eventmanager. All Rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
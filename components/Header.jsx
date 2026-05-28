import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-3 sm:py-4 xl:py-8 text-white'>
      <div className="container mx-auto flex justify-between items-center gap-3">
        <Link href={'/'} className="shrink-0">
           <h1 className='text-2xl sm:text-3xl xl:text-4xl font-semibold leading-none'>
              Abdelaziz E<span className='text-accent'>.</span>
           </h1>
        </Link>

        {/*Desktop nav*/}
        <div className='hidden xl:flex items-center gap-8'>
            <Nav/>
            <Link href='/contact'>
              <Button>Hire Me</Button>
            </Link>
        </div>

        {/*mobile nav*/}
        <div className='xl:hidden '>
            <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header

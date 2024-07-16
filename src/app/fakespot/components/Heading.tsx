'use client'
 
import {usePathname} from 'next/navigation'
import React from 'react'
import Link from 'next/link'


const Heading = () => {
  const pathname = usePathname()
  const path=(pathname.split('/'))[2]

  return (
    <div className='p-2 border-b-[1px] border-b-black flx-row gap-10 container-small '>
        <Link href="/fakespot" className={`tracking-widest ${!path && 'text-ascent font-bold'} `}>EMAIL SPAM</Link>
        <Link href="/fakespot/fake-address" className={`tracking-widest ${path==='fake-address' && 'text-ascent font-bold'}`}>FAKE ADDRESS</Link>
        <Link href="/fakespot/fake-url" className={`tracking-widest ${path==='fake-url' && 'text-ascent font-bold'} `}>FAKE URL</Link>
    </div>
  )
}

export default Heading
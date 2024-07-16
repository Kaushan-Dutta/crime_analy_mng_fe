'use client'
 
import {usePathname} from 'next/navigation'
import React from 'react'
import Link from 'next/link'


const Heading = () => {
  const pathname = usePathname()
  const path=(pathname.split('/'))[2]

  return (
    <div className='p-2 border-b-[1px] border-b-black flx-row gap-10 container-small '>
        <Link href="/account" className={`tracking-widest ${!path && 'text-ascent font-bold'} `}>PROFILE</Link>
        <Link href="/account/digital-card" className={`tracking-widest ${path==='digital-card' && 'text-ascent font-bold'}`}>DIGITAL CARD</Link>
        <Link href="/account/settings" className={`tracking-widest ${path==='settings' && 'text-ascent font-bold'} `}>SETTINGS</Link>
    </div>
  )
}

export default Heading
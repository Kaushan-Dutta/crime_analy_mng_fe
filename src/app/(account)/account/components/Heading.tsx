import React from 'react'
import Link from 'next/link'

const Heading = () => {
  return (
    <div className='p-2 border-b-[1px] border-b-black flx-row gap-10 container-small '>
        <Link href="/account" className='tracking-widest  text-ascent font-bold'>PROFILE</Link>
        <Link href="/account/digital-card" className='tracking-widest  '>DIGITAL CARD</Link>
        <Link href="/account/settings" className='tracking-widest  '>SETTINGS</Link>
    </div>
  )
}

export default Heading
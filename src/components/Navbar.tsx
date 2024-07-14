"use client"

import React from 'react'
import Link from 'next/link'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton } from '@mui/material';

const style={
  textcolor:`hover:border-b-2 hover:border-ascent`
}

const Navbar:React.FC = () => {
  return (
    <nav className=' md:h-20 h-14 py-2 px-7 flx-row justify-between bg-background1 text-background '>
        <div className='font-aton md:text-3xl text-xl tracking-wider '>
          <Link href="/">CrimeWatch</Link>
        </div>
        <div className='flx-row justify-between gap-5'>
          <Link href="/analytics" className={style.textcolor}>Analytics</Link>
          <Link href="/login" className={style.textcolor}>Login</Link>
          <Link href="/register" className={`${style.textcolor} md:inline hidden `}>SignUp</Link>
        </div>
    </nav>
  )
}

export default Navbar
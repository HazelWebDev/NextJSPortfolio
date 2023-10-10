import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href="/" className="text-5xl text-pink-400 font-semibold"> Link 1</Link>
            <div className='menu'></div>
        </div>
    </nav>
  )
}

export default Navbar
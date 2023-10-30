"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon, XmarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLinks = [
    // {
    //     title: "About",
    //     path: "#about",
    // },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Resume",
        path: "/resume",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-pink-200 bg-opacity-90 border-b-4 border-green-400'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
        <Image className="" src="/FlowerLogo2.svg" width={75} height={75}/>

            <Link href="/" className="text-zinc-600 font-bold "><h3 className='font-bold text-2xl items-center'>Kristen's Portfolio</h3></Link>
           <div className=' mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-green-200 text text-pink-400'><Bars3Icon className='h-5 w-5'/></button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-green-200 text text-pink-400'><XMarkIcon className='h-5 w-5'/></button>
                )
            }
           </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12 mt-16'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-pink-400 mb-4 text-2xl sm:text-4xl lg:text-4xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-400'>
                        Hello, I'm {""}</span>
                        <TypeAnimation
                        sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Kristen',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a web developer',
                        1000,
                        'a fiber artist',
                        1000,
                        'and a daydreamer',
                        1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-pink-200 mb-6 sm:text-lg'>A coder, crochet artist, and computer enthusiast!</p>
                <div className='mb-6'>
                    <button className='mb-6 px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-green-300 to-pink-300 text-zinc-800 font-semibold'>
                        Contact Me</button>
                    <button className='px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-green-300 to-pink-300 text-pink-400 font-semibold'>
                        <span className='block bg-black hover:bg-zinc-700 rounded-full px-5 py-2'>
                            <Link href="/resume">Check out my resume!</Link>
                        </span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='bg-green-200 border-4 border-pink-200 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image 
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                src="/FlowerLogo2.svg" 
                alt="portrait image"
                width={400}
                height={400}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
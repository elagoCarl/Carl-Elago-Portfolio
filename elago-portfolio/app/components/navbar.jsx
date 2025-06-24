import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const navbar = () => {
    return (
        <>
            <nav>
                <a href='/'>
                    <button className='w-28 cursor-pointer mr-14 '>
                        Carl Elago
                    </button>
                </a>
                <ul className='flex items-center gap-8 text-lg font-semibold'>
                    <li>
                        <a href='#about'>About me</a>
                    </li>
                    <li>
                        <a href='#projects'>Skills</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#projects'>Experience</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact me</a>
                    </li>
                </ul>

                <div>
                    <a href="#contact">
                        Contact <Image alt='arrow' src={assets.arrow_icon} className='w-3' />
                    </a>
                </div>

            </nav>
        </>
    )
}

export default navbar
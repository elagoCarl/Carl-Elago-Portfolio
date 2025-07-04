import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const navbar = () => {

    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className='w-full fixed px-5 lg:px-8 xl:px[8%] py-4 flex items-center justify-between bg-white/50 backdrop-blur-md z-50'>
                <a href='#top'>
                    <button className='text-2xl cursor-pointer mr-14 '>
                        Carl Elago
                    </button>
                </a>
                <ul className='hidden md:flex items-center justify-center gap-6 lg:gap-8 rounded-full px-12 py-3  bg-white shadow-sm bg-opacity-50'>
                    <li>
                        <a className='font-ovo' href='#top'>Home</a>
                    </li>
                    <li>
                        <a className='font-ovo' href='#about'>About me</a>
                    </li>
                    <li>
                        <a className='font-ovo' href='#projects'>Skills</a>
                    </li>
                    <li>
                        <a className='font-ovo' href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a className='font-ovo' href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a className='font-ovo' href='#contact'>Contact me</a>
                    </li>
                </ul>

                <div className='flex items-center gap-4'>

                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6 mx-2' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full hover:text-amber-50 hover:bg-gray-800 transition-all duration-300 ml-4'>
                        Contact <Image alt='arrow' src={assets.arrow_icon} className='w-3' />
                    </a>

                    <button onClick={openMenu} className='block md:hidden ml-3'>
                        <Image src={assets.menu_black} alt='' className='w-6 cursor-pointer' />
                    </button>
                </div>

                {/* mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div onClick={closeMenu} className='absolute top-5 right-5'>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li>
                        <a className='font-ovo' onClick={closeMenu} href='#top'>Home</a>
                    </li>
                    <li>
                        <a className='font-ovo' onClick={closeMenu} href='#about'>About me</a>
                    </li>
                    <li>
                        <a className='font-ovo' onClick={closeMenu} href='#projects'>Skills</a>
                    </li>
                    <li>
                        <a className='font-ovo' onClick={closeMenu} href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a className='font-ovo' onClick={closeMenu} href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a className='font-ovo' onClick={closeMenu} href='#contact'>Contact me</a>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default navbar
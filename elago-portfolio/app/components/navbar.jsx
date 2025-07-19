'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDarkMode } from '../contexts/DarkModeContext'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme, isLoaded } = useDarkMode();

    const openMenu = () => {
        setIsMobileMenuOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
    }

    useEffect(() => {
        const handleScroll = () => setIsScroll(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isLoaded) return null;

    const navItems = [
        { href: '#top', label: 'Home' },
        { href: '#about', label: 'About me' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact me' }
    ];

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${isScroll
                        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-gray-700/30"
                        : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
                    }`}
            >
                {/* Logo */}
                <motion.a
                    href='#top'
                    whileHover={{ scale: 1.05 }}
                    className='text-2xl font-ovo text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-colors'
                >
                    Carl Elago
                </motion.a>

                {/* Desktop Navigation */}
                <motion.ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 lg:px-12 py-3 transition-all duration-500 ${isScroll
                            ? "bg-white/60 dark:bg-gray-800/60 shadow-lg border border-gray-200/40 dark:border-gray-700/40 backdrop-blur-lg"
                            : "bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
                        }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        >
                            <motion.a
                                className='relative font-ovo text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-2 px-1 group'
                                href={item.href}
                                whileHover={{ y: -2 }}
                            >
                                {item.label}
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full'></span>
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>

                <div className='flex items-center gap-4'>
                    {/* Contact Button - Desktop */}
                    <motion.a
                        href="#contact"
                        className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-400 dark:border-gray-500 rounded-full text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 group relative overflow-hidden'
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className='relative z-10'>Contact</span>
                        <Image alt='arrow' src={assets.arrow_icon} className='w-3 dark:invert relative z-10 transition-transform group-hover:translate-x-1' />
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={openMenu}
                        className='block md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image src={assets.menu_black} alt='Menu' className='w-6 dark:invert' />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={closeMenu}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3 }}
                            className='fixed right-0 top-0 bottom-0 w-80 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/30 dark:border-gray-700/30 shadow-2xl md:hidden'
                        >
                            {/* Close Button */}
                            <motion.button
                                onClick={closeMenu}
                                className='absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Image src={assets.close_black} alt='Close' className='w-5 dark:invert' />
                            </motion.button>

                            {/* Navigation */}
                            <div className='pt-20 px-8'>
                                <ul className='flex flex-col gap-6'>
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className='group'
                                        >
                                            <motion.a
                                                className='relative block font-ovo text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                                onClick={closeMenu}
                                                href={item.href}
                                                whileHover={{ x: 8 }}
                                            >
                                                {item.label}
                                                <div className='absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300 group-hover:h-8 transform -translate-y-1/2 rounded-full'></div>
                                            </motion.a>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Mobile Contact Button */}
                                <motion.a
                                    href="#contact"
                                    onClick={closeMenu}
                                    className='flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group mt-12'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <span>Get in Touch</span>
                                    <Image alt='arrow' src={assets.arrow_icon} className='w-4 invert dark:invert-0 transition-transform group-hover:translate-x-1' />
                                </motion.a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
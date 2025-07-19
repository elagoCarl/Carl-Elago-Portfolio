// app/components/navbar.jsx
'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDarkMode } from '../contexts/DarkModeContext'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme, isLoaded } = useDarkMode();

    const openMenu = () => {
        setIsMobileMenuOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent body scroll
    }

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset'; // Restore body scroll
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent flash of unstyled content
    if (!isLoaded) {
        return null;
    }

    // Navigation items
    const navItems = [
        { href: '#top', label: 'Home' },
        { href: '#about', label: 'About me' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact me' }
    ];

    // Animation variants
    const navVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: i * 0.1,
                ease: "easeOut"
            }
        })
    };

    const sidebarVariants = {
        hidden: {
            x: '100%',
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.2 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    return (
        <>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ease-out ${isScroll
                        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-gray-700/30"
                        : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
                    }`}
            >
                {/* Logo */}
                <motion.a
                    href='#top'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <button className='text-2xl cursor-pointer mr-14 font-ovo text-gray-900 dark:text-white transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-200'>
                        Carl Elago
                    </button>
                </motion.a>

                {/* Desktop Navigation */}
                <motion.ul
                    className={`hidden md:flex items-center justify-center gap-6 lg:gap-8 rounded-full px-8 lg:px-12 py-3 transition-all duration-500 ease-out ${isScroll
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
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                            <motion.a
                                className='relative font-ovo text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-2 px-1 group'
                                href={item.href}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item.label}
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full'></span>
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>

                <div className='flex items-center gap-4'>
                    {/* Dark Mode Toggle Button - Temporarily Commented */}
                    {/* <motion.button
                        onClick={toggleTheme}
                        className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
                        aria-label="Toggle dark mode"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isDark ? (
                            <svg className="w-6 h-6 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </motion.button> */}

                    {/* Contact Button - Desktop */}
                    <motion.a
                        href="#contact"
                        className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-400 dark:border-gray-500 rounded-full text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 ml-4 group overflow-hidden relative'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className='relative z-10'>Contact</span>
                        <motion.div
                            className='relative z-10'
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image alt='arrow' src={assets.arrow_icon} className='w-3 dark:invert transition-transform duration-200 group-hover:translate-x-1' />
                        </motion.div>
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={openMenu}
                        className='block md:hidden ml-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image src={assets.menu_black} alt='Menu' className='w-6 cursor-pointer dark:invert' />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay and Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={closeMenu}
                        />

                        {/* Mobile Sidebar */}
                        <motion.div
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className='fixed right-0 top-0 bottom-0 w-80 z-50 h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/30 dark:border-gray-700/30 shadow-2xl md:hidden'
                        >
                            {/* Close Button */}
                            <motion.div
                                className='absolute top-6 right-6'
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <motion.button
                                    onClick={closeMenu}
                                    className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image src={assets.close_black} alt='Close' className='w-5 cursor-pointer dark:invert' />
                                </motion.button>
                            </motion.div>

                            {/* Mobile Navigation */}
                            <div className='pt-20 px-8'>
                                <motion.ul
                                    className='flex flex-col gap-6'
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            custom={index}
                                            variants={menuItemVariants}
                                            className='group'
                                        >
                                            <motion.a
                                                className='relative block font-ovo text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                                onClick={closeMenu}
                                                href={item.href}
                                                whileHover={{ x: 8 }}
                                                whileTap={{ scale: 0.98 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item.label}
                                                <div className='absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300 group-hover:h-8 transform -translate-y-1/2 rounded-full'></div>
                                            </motion.a>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Mobile Contact Button */}
                                <motion.div
                                    className='mt-12 px-4'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                >
                                    <motion.a
                                        href="#contact"
                                        onClick={closeMenu}
                                        className='flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group'
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>Get in Touch</span>
                                        <motion.div
                                            whileHover={{ x: 3 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Image alt='arrow' src={assets.arrow_icon} className='w-4 invert dark:invert-0 transition-transform duration-200 group-hover:translate-x-1' />
                                        </motion.div>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
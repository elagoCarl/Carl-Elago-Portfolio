// app/components/about.jsx
'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.h4
                    variants={itemVariants}
                    className='text-center mb-2 text-lg font-ovo text-gray-600 dark:text-gray-400'
                >
                    Introduction
                </motion.h4>
                <motion.h2
                    variants={itemVariants}
                    className='text-center text-5xl font-ovo text-gray-900 dark:text-white'
                >
                    About Me
                </motion.h2>

                <div className='flex w-full flex-col lg:flex-row items-center justify-center mt-10 gap-8 lg:gap-12 max-w-6xl mx-auto'>
                    <motion.div
                        variants={imageVariants}
                        className='w-64 sm:w-72 lg:w-80 xl:w-96 rounded-3xl flex-shrink-0 mb-5'
                    >
                        <Image
                            src={assets.user_image}
                            alt='User Image'
                            className='w-full rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:shadow-gray-800/50 dark:hover:shadow-gray-800/70'
                        />
                    </motion.div>

                    <div className='flex-1 min-w-0'>
                        <motion.p
                            variants={itemVariants}
                            className='mb-10 max-w-2xl mx-auto font-ovo text-gray-700 dark:text-gray-300 leading-relaxed'
                        >
                            A Computer Science graduate with a passion for building robust, scalable backend systems that power exceptional web experiences. With solid expertise in server-side technologies including Node.js, JavaScript, and Java, I develop efficient APIs and database solutions that ensure seamless performance across applications. As a recent graduate, I'm committed to deepening my full-stack capabilities while specializing in backend development. My experience spans both server-side and client-side technologies, including ReactJS and responsive design principles. I bring innovative thinking, analytical problem-solving abilities, and a genuine enthusiasm for tackling complex technical challenges to every development project.
                        </motion.p>

                        <motion.ul
                            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto'
                            variants={containerVariants}
                        >
                            {infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li
                                    key={title}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className='group relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-2xl p-8 bg-white dark:bg-gray-800 hover:bg-gradient-to-br hover:from-white hover:to-gray-50/50 dark:hover:from-gray-800 dark:hover:to-gray-700/50 transform transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:to-purple-50/0 hover:before:from-blue-50/30 hover:before:to-purple-50/30 dark:hover:before:from-blue-900/20 dark:hover:before:to-purple-900/20 before:transition-all before:duration-700'
                                >
                                    {/* Icon container with enhanced styling */}
                                    <motion.div
                                        className='relative z-10 inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/50 dark:group-hover:to-purple-900/50 transition-all duration-500 ease-out shadow-sm group-hover:shadow-md'
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5,
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                    >
                                        <Image
                                            src={icon}
                                            alt={title}
                                            className='w-8 h-8 transition-all duration-500 group-hover:brightness-110 dark:invert'
                                        />
                                    </motion.div>

                                    {/* Content section */}
                                    <div className='relative z-10 space-y-3'>
                                        <motion.h3
                                            className='text-lg font-bold text-gray-800 dark:text-gray-200 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500'
                                            whileHover={{
                                                x: 4,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {title}
                                        </motion.h3>
                                        <motion.p
                                            className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-500'
                                            whileHover={{
                                                x: 4,
                                                transition: { duration: 0.2, delay: 0.05 }
                                            }}
                                        >
                                            {description}
                                        </motion.p>
                                    </div>

                                    {/* Subtle accent border that appears on hover */}
                                    <div className='absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-200 to-purple-300 dark:from-blue-600 dark:to-purple-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-2xl'></div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
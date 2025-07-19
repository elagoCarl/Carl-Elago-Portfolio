// app/components/skills.jsx
'use client'
import { toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Skills = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const headerVariants = {
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

    const skillVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const floatingAnimation = {
        y: [0, -8, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    return (
        <div id='skills' className='w-full px-[12%] py-60 scroll-mt-20'>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.h4
                    variants={headerVariants}
                    className='text-center mb-2 text-lg font-ovo text-gray-600 dark:text-gray-400'
                >
                    My Expertise
                </motion.h4>
                <motion.h2
                    variants={headerVariants}
                    className='text-center text-4xl font-ovo mb-5 text-gray-900 dark:text-white'
                >
                    Skills & Tools
                </motion.h2>

                <div className='max-w-4xl mx-auto'>
                    <motion.ul
                        className='flex items-center justify-center flex-wrap gap-4 sm:gap-6 max-w-2xl mx-auto'
                        variants={containerVariants}
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li
                                key={index}
                                variants={skillVariants}
                                whileHover={{
                                    scale: 1.15,
                                    y: -8,
                                    rotate: [0, -2, 2, -1, 0],
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                        rotate: {
                                            duration: 0.6,
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                                whileTap={{
                                    scale: 0.95,
                                    transition: { duration: 0.1 }
                                }}
                                animate={index % 4 === 0 ? floatingAnimation : {}}
                                className='group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-all duration-500 ease-out hover:border-blue-200/50 dark:hover:border-blue-600/50 cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/0 before:to-purple-50/0 hover:before:from-blue-50/20 hover:before:to-purple-50/20 dark:hover:before:from-blue-900/10 dark:hover:before:to-purple-900/10 before:transition-all before:duration-500'
                            >
                                <motion.div
                                    className="relative z-10"
                                    whileHover={{
                                        rotateY: 360,
                                        transition: { duration: 0.6, ease: "easeInOut" }
                                    }}
                                >
                                    <Image
                                        src={tool}
                                        alt='Tool'
                                        className='w-6 sm:w-8 transition-all duration-500 group-hover:brightness-110 filter group-hover:drop-shadow-sm dark:brightness-90 dark:group-hover:brightness-110'
                                    />
                                </motion.div>

                                {/* Animated border accent */}
                                <motion.div
                                    className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-200/30 group-hover:to-purple-200/30 dark:group-hover:from-blue-600/30 dark:group-hover:to-purple-600/30 transition-all duration-500'
                                    whileHover={{
                                        rotate: 180,
                                        transition: { duration: 0.8, ease: "easeInOut" }
                                    }}
                                ></motion.div>

                                {/* Subtle glow effect */}
                                <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-600/10 dark:to-purple-600/10 transition-opacity duration-500'></div>

                                {/* Ripple effect on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl bg-blue-200/20 dark:bg-blue-600/20 opacity-0"
                                    whileHover={{
                                        scale: [1, 1.2, 1.4],
                                        opacity: [0, 0.3, 0],
                                        transition: { duration: 0.6, ease: "easeOut" }
                                    }}
                                />
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>
        </div>
    )
}

export default Skills
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { contactInfo, socialLinks } from '../data/myData' // Import the data

const Contact = () => {

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

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.div
                className='max-w-6xl mx-auto'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Header */}
                <motion.div
                    className='text-center mb-16'
                    variants={headerVariants}
                >
                    <motion.h4
                        className='text-lg font-ovo text-gray-600 dark:text-gray-400 mb-2'
                        variants={headerVariants}
                    >
                        Get In Touch
                    </motion.h4>
                    <motion.h2
                        className='text-4xl md:text-5xl font-ovo text-gray-900 dark:text-white mb-4'
                        variants={headerVariants}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.p
                        className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-ovo'
                        variants={headerVariants}
                    >
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                    </motion.p>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    className='max-w-5xl mx-auto text-center space-y-12'
                    variants={itemVariants}
                >
                    <div>
                        <h3 className='text-2xl font-ovo text-gray-900 dark:text-white mb-8'>Let's Connect</h3>

                        {/* Contact Info Cards - Grid Layout */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className='group relative flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-blue-200 dark:hover:border-blue-600 overflow-hidden'
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -8,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    animate={index === 1 ? {
                                        y: [0, -4, 0],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }
                                    } : {}}
                                >
                                    {/* Background gradient overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10 transition-all duration-500'></div>

                                    {/* Animated border */}
                                    <motion.div
                                        className='absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                                        whileHover={{
                                            rotate: 180,
                                            transition: { duration: 1, ease: "easeInOut" }
                                        }}
                                    />

                                    <motion.div
                                        className='relative z-10 p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl mb-4 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40 transition-all duration-500 shadow-lg group-hover:shadow-xl'
                                        whileHover={{
                                            rotate: [0, -10, 10, -5, 0],
                                            scale: 1.1,
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <info.icon className='w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300' />
                                    </motion.div>

                                    <div className='relative z-10'>
                                        <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>{info.title}</h4>
                                        <p className='text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 font-medium'>{info.value}</p>
                                    </div>

                                    {/* Ripple effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl bg-blue-200/20 dark:bg-blue-600/20 opacity-0"
                                        whileHover={{
                                            scale: [1, 1.1, 1.3],
                                            opacity: [0, 0.2, 0],
                                            transition: { duration: 0.6, ease: "easeOut" }
                                        }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className='text-center'
                    >
                        <h4 className='text-xl font-ovo text-gray-900 dark:text-white mb-6'>Follow Me</h4>
                        <div className='flex gap-6 justify-center'>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`group relative p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 text-gray-600 dark:text-gray-400 ${social.color} overflow-hidden`}
                                    whileHover={{
                                        scale: 1.15,
                                        y: -8,
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.4, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        y: [0, -3, 0],
                                        transition: {
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.3
                                        }
                                    }}
                                >
                                    {/* Background gradient overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/40 group-hover:to-purple-50/40 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-500'></div>

                                    <motion.div
                                        className='relative z-10'
                                        whileHover={{
                                            rotate: 360,
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <social.icon className='w-6 h-6 transition-all duration-300' />
                                    </motion.div>

                                    {/* Ripple effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-blue-200/20 dark:bg-blue-600/20 opacity-0"
                                        whileHover={{
                                            scale: [1, 1.2, 1.4],
                                            opacity: [0, 0.3, 0],
                                            transition: { duration: 0.6, ease: "easeOut" }
                                        }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact
'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { experiences, stats } from '../data/myData'

const exp = () => {
    const [expandedCard, setExpandedCard] = useState(null)

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

    const getTypeColor = (type) => {
        switch (type) {
            case 'work':
                return 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30'
            case 'education':
                return 'from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30'
            case 'internship':
                return 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30'
            default:
                return 'from-gray-100 to-gray-100 dark:from-gray-900/30 dark:to-gray-900/30'
        }
    }

    const getTypeIconColor = (type) => {
        switch (type) {
            case 'work':
                return 'text-blue-600 dark:text-blue-400'
            case 'education':
                return 'text-green-600 dark:text-green-400'
            case 'internship':
                return 'text-purple-600 dark:text-purple-400'
            default:
                return 'text-gray-600 dark:text-gray-400'
        }
    }

    return (
        <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.div
                className='max-w-7xl mx-auto'
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
                        My Journey
                    </motion.h4>
                    <motion.h2
                        className='text-4xl md:text-5xl font-ovo text-gray-900 dark:text-white mb-4'
                        variants={headerVariants}
                    >
                        Experience & Education
                    </motion.h2>
                    <motion.p
                        className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-ovo'
                        variants={headerVariants}
                    >
                        A timeline of my professional growth, educational background, and key achievements in the tech industry.
                    </motion.p>
                </motion.div>

                {/* Experiences Timeline */}
                <motion.div
                    className='space-y-8'
                    variants={itemVariants}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className='group relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden'
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -4,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            animate={index % 2 === 0 ? {
                                x: [0, 2, 0],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }
                            } : {
                                x: [0, -2, 0],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }
                            }}
                        >
                            {/* Background gradient overlay */}
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10 transition-all duration-500'></div>

                            <div className='relative z-10 p-8'>
                                <div className='flex flex-col md:flex-row md:items-start gap-6'>
                                    {/* Icon Section */}
                                    <motion.div
                                        className={`flex-shrink-0 p-4 bg-gradient-to-br ${getTypeColor(exp.type)} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500`}
                                        whileHover={{
                                            rotate: [0, -5, 5, 0],
                                            scale: 1.1,
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <exp.icon className={`w-8 h-8 ${getTypeIconColor(exp.type)} transition-colors duration-300`} />
                                    </motion.div>

                                    {/* Content Section */}
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
                                            <div>
                                                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                                                    {exp.position}
                                                </h4>
                                                <p className='text-lg font-semibold text-blue-600 dark:text-blue-400'>
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        <div className='flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400'>
                                            <div className='flex items-center gap-1'>
                                                <Calendar className='w-4 h-4' />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <MapPin className='w-4 h-4' />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            {exp.technologies.map((tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    className='px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700'
                                                    whileHover={{
                                                        scale: 1.05,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Expandable Achievements */}
                                        <motion.button
                                            onClick={() => setExpandedCard(expandedCard === exp.id ? null : exp.id)}
                                            className='flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 font-medium cursor-pointer'
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>{expandedCard === exp.id ? 'Hide' : 'View'} Achievements</span>
                                            <motion.div
                                                animate={{ rotate: expandedCard === exp.id ? 90 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronRight className='w-4 h-4' />
                                            </motion.div>
                                        </motion.button>

                                        {/* Achievements List */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: expandedCard === exp.id ? 'auto' : 0,
                                                opacity: expandedCard === exp.id ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className='overflow-hidden'
                                        >
                                            <div className='pt-4 space-y-2'>
                                                {exp.achievements.map((achievement, achIndex) => (
                                                    <motion.div
                                                        key={achIndex}
                                                        className='flex items-start gap-3 text-gray-600 dark:text-gray-400'
                                                        initial={{ x: -10, opacity: 0 }}
                                                        animate={expandedCard === exp.id ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                                                        transition={{ delay: achIndex * 0.1, duration: 0.3 }}
                                                    >
                                                        <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                                                        <span>{achievement}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
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
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default exp
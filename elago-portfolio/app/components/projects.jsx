'use client'
import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Projects = () => {
    const handleProjectClick = (project) => {
        if (project.liveLink) window.open(project.liveLink, '_blank');
    };

    const handleGithubClick = (e, githubLink) => {
        e.stopPropagation();
        if (githubLink) window.open(githubLink, '_blank');
    };

    return (
        <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, staggerChildren: 0.2 }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <h4 className='text-lg font-ovo text-gray-600 dark:text-gray-400 mb-2'>Portfolio</h4>
                    <h2 className='text-5xl font-ovo text-gray-900 dark:text-white mb-6'>My Latest Work</h2>
                    <p className='max-w-2xl mx-auto font-ovo text-gray-700 dark:text-gray-300'>
                        Here are my recent projects that showcase my skills in web development and user-centric design.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-6xl mx-auto'>
                    {workData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className='group cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500'
                            onClick={() => handleProjectClick(project)}
                        >
                            {/* Project Image */}
                            <div className='relative aspect-[5/3] overflow-hidden bg-gray-100 dark:bg-gray-700'>
                                <Image
                                    src={project.bgImage}
                                    alt={project.title}
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                <div className='absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500' />

                                {/* Action Buttons */}
                                <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                    <motion.div
                                        className='bg-white/95 dark:bg-gray-800/95 rounded-xl p-3 shadow-lg'
                                        whileHover={{ scale: 1.1 }}
                                        title="View Live Demo"
                                    >
                                        <Image src={assets.send_icon} alt="view" className="w-4 h-4 dark:invert" />
                                    </motion.div>

                                    {project.githubLink && (
                                        <motion.div
                                            className='bg-gray-900/95 dark:bg-gray-100/95 rounded-xl p-3 shadow-lg'
                                            whileHover={{ scale: 1.1 }}
                                            onClick={(e) => handleGithubClick(e, project.githubLink)}
                                            title="View Source"
                                        >
                                            <svg className="w-4 h-4 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                            </svg>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Tech Tags */}
                                {project.technologies && (
                                    <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                        <div className='flex gap-2'>
                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                <span key={i} className='bg-white/95 dark:bg-gray-800/95 text-xs px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300'>
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className='bg-white/95 dark:bg-gray-800/95 text-xs px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300'>
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Project Info */}
                            <div className='p-8'>
                                <div className='flex justify-between gap-4'>
                                    <div className='flex-1'>
                                        <h3 className='text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors'>
                                            {project.title}
                                        </h3>
                                        <p className='text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3'>
                                            {project.description}
                                        </p>

                                        <div className='flex gap-6'>
                                            <button
                                                className='text-sm text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleProjectClick(project);
                                                }}
                                            >
                                                View Demo
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </button>
                                            {project.githubLink && (
                                                <button
                                                    className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center gap-2'
                                                    onClick={(e) => handleGithubClick(e, project.githubLink)}
                                                >
                                                    Source
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <motion.div
                                        className='w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 transition-all duration-500'
                                        whileHover={{ scale: 1.1, rotate: 12 }}
                                    >
                                        <Image src={assets.right_arrow_white} alt="arrow" className="w-4 h-4 invert dark:invert-0" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='text-center mt-16'
                >
                    <motion.a
                        href="#contact"
                        className='inline-flex items-center gap-3 px-10 py-3 border border-gray-500 dark:border-gray-400 rounded-full text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 font-ovo'
                        whileHover={{ scale: 1.05 }}
                    >
                        Get In Touch
                        <Image src={assets.arrow_icon} alt="arrow" className="w-3 dark:invert" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects
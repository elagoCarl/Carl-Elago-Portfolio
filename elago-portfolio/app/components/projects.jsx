'use client'
import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GitBranch, ExternalLink } from 'lucide-react'

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
                                        <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                    </motion.div>

                                    {project.githubLink && (
                                        <motion.div
                                            className='bg-gray-900/95 dark:bg-gray-100/95 rounded-xl p-3 shadow-lg'
                                            whileHover={{ scale: 1.1 }}
                                            onClick={(e) => handleGithubClick(e, project.githubLink)}
                                            title="View Source"
                                        >
                                            <GitBranch className="w-4 h-4 text-white dark:text-gray-900" />
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
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                            {project.githubLink && (
                                                <button
                                                    className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center gap-2'
                                                    onClick={(e) => handleGithubClick(e, project.githubLink)}
                                                >
                                                    Source
                                                    <ExternalLink className="w-4 h-4" />
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
            </motion.div>
        </div>
    )
}

export default Projects
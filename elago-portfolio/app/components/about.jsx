import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { info } from 'autoprefixer'


const about = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>
                Introduction
            </h4>
            <h2 className='text-center text-5xl font-ovo'>
                About Me
            </h2>

            <div className='flex w-full flex-col lg:flex-row items-center mt-10 gap-10'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='User Image' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1 '>
                    <p className='mb-10 max-w-2xl mx-auto font-ovo'>
                        A Computer Science graduate with a passion for building robust, scalable backend systems that power exceptional web experiences. With solid expertise in server-side technologies including Node.js, JavaScript, and Java, I develop efficient APIs and database solutions that ensure seamless performance across applications. As a recent graduate, I'm committed to deepening my full-stack capabilities while specializing in backend development. My experience spans both server-side and client-side technologies, including ReactJS and responsive design principles. I bring innovative thinking, analytical problem-solving abilities, and a genuine enthusiasm for tackling complex technical challenges to every development project.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto'>
                        {infoList.map(({ icon, iconDark, title, description }) => (
                            <li
                                key={title}
                                className='group relative overflow-hidden border border-gray-200 rounded-2xl p-8 cursor-pointer bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50/50 transform transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/50 hover:border-gray-300 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:to-purple-50/0 hover:before:from-blue-50/30 hover:before:to-purple-50/30 before:transition-all before:duration-700'>
                                {/* Icon container with enhanced styling */}
                                <div className='relative z-10 inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-purple-50 group-hover:scale-110 transition-all duration-500 ease-out shadow-sm group-hover:shadow-md'>
                                    <Image
                                        src={icon}
                                        alt={title}
                                        className='w-8 h-8 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110' />
                                </div>

                                {/* Content section */}
                                <div className='relative z-10 space-y-3'>
                                    <h3 className='text-lg font-bold text-gray-800 leading-tight group-hover:text-gray-900 group-hover:translate-x-1 transform transition-transform duration-500'>
                                        {title}
                                    </h3>
                                    <p className='text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors group-hover:translate-x-1 transform duration-500 delay-75'>
                                        {description}
                                    </p>
                                </div>

                                {/* Subtle accent border that appears on hover */}
                                <div className='absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-200 to-purple-300 group-hover:w-full transition-all duration-700 ease-out rounded-b-2xl'></div>

                                {/* Optional: Arrow icon that appears on hover */}
                                {/* <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-out delay-200'>
                                    <svg className='w-5 h-5 text-gray-400 group-hover:text-gray-600'
                                        fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                            d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                    </svg>
                                </div> */}
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-ovo max-w-2xl mx-auto'>
                        Tools I use
                    </h4>

                    <ul className='flex items-center gap-3 sm:gap-5 max-w-2xl mx-auto'>
                        {toolsData.map((tool, index) => (
                            <li key={index} className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default about
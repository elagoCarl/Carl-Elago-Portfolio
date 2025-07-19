import { toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Skills = () => {
    return (
        <div id='skills' className='w-full px-[12%] py-60 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>
                My Expertise
            </h4>
            <h2 className='text-center text-4xl font-ovo mb-5'>
                Skills & Tools
            </h2>

            <div className='max-w-4xl mx-auto'>
                <ul className='flex items-center justify-center flex-wrap gap-4 sm:gap-6 max-w-2xl mx-auto'>
                    {toolsData.map((tool, index) => (
                        <li key={index} className='group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-110 hover:border-blue-200/50 cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/0 before:to-purple-50/0 hover:before:from-blue-50/20 hover:before:to-purple-50/20 before:transition-all before:duration-500'>
                            <Image src={tool} alt='Tool' className='w-6 sm:w-8 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 filter group-hover:drop-shadow-sm' />

                            {/* Animated border accent */}
                            <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-200/30 group-hover:to-purple-200/30 transition-all duration-500'></div>

                            {/* Subtle glow effect */}
                            <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-400/10 to-purple-400/10 transition-opacity duration-500'></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills
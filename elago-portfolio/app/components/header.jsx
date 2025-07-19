'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  // Individual item animations
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

  // Enhanced profile image animation
  const profileVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Image */}
      <motion.div
        variants={profileVariants}
        whileHover={{
          scale: 1.05,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
        className="relative"
      >
        <Image
          src={assets.profile_img}
          alt="Carl Elago Profile"
          className='rounded-full w-40 h-40 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300'
        />

        {/* Animated ring around profile */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-300 dark:border-blue-500 opacity-0"
          whileHover={{
            opacity: [0, 1, 0],
            scale: [1, 1.1, 1.2],
            transition: { duration: 1, ease: "easeOut" }
          }}
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        className='flex items-end gap-2 text-xl md:text-2xl lg:text-3xl mb-3 font-ovo text-gray-800 dark:text-gray-200'
        variants={itemVariants}
      >
        Hi! I'm Carl Elago
        <motion.div
          animate={{
            rotate: [0, 14, -8, 14, -4, 10, 0],
            scale: [1, 1.1, 1, 1.1, 1, 1.1, 1]
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3
          }}
          whileHover={{
            rotate: [0, 20, -15, 20, -10, 15, 0],
            transition: { duration: 0.6 }
          }}
        >
          <Image src={assets.hand_icon} alt="Wave" className='w-6' />
        </motion.div>
      </motion.h3>

      {/* Main Title with gradient text effect */}
      <motion.h1
        className='text-2xl sm:text-4xl lg:text-[60px] font-ovo bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent'
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Aspiring
        </motion.span>
        <motion.span
          className="inline-block ml-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Software Engineer
        </motion.span>
      </motion.h1>

      {/* Description with typing effect */}
      <motion.p
        className='max-w-2xl mx-auto font-ovo text-gray-700 dark:text-gray-300 leading-relaxed'
        variants={itemVariants}
      >
        Backend-focused Computer Science graduate specializing in building scalable server-side solutions with Node.js, JavaScript, and Java.
      </motion.p>

      {/* Enhanced Buttons */}
      <motion.div
        className='flex flex-col sm:flex-row items-center gap-4 mt-4'
        variants={itemVariants}
      >
        <motion.a
          href="#contact"
          className='px-8 py-3 border rounded-full border-gray-900 dark:border-white bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center gap-3 font-medium shadow-lg hover:shadow-xl transition-shadow duration-300'
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            whileHover={{
              scale: 1.1,
              rotate: 15
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </motion.svg>
          contact me
        </motion.a>

        <motion.a
          href="/sample_resume.pdf"
          download
          className='px-8 py-3 border rounded-full border-gray-500 dark:border-gray-400 text-gray-700 dark:text-gray-300 flex items-center gap-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg'
          whileHover={{
            scale: 1.05,
            borderColor: "#3B82F6"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            whileHover={{
              scale: 1.1,
              y: -2
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
          my resume
        </motion.a>
      </motion.div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Header
import { Mail, Phone, MapPin, Code, Briefcase, GraduationCap, Award, Calendar, HeartHandshake } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "elagocarl@gmail.com",
        href: "mailto:elagocarl@gmail.com"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+63 931 107 6876",
        href: "tel:+639311076876"
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Merville, Brgy. 201, 1300 Pasay City, PH",
        href: "https://maps.app.goo.gl/cr24TQ6pmTxHQKeQ8"
    }
]

export const socialLinks = [
    {
        icon: FaGithub,
        name: "GitHub",
        href: "https://github.com/elagoCarl",
        color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
        icon: FaLinkedin,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/elagocarl",
        color: "hover:text-blue-600"
    },
    {
        icon: Mail,
        name: "Gmail",
        href: "mailto:elagocarl@gmail.com",
        color: "hover:text-red-500"
    }
]

export const experiences = [
    {
        id: 1,
        type: "internship",
        icon: HeartHandshake,
        company: "Philippine GameDev Expo 2025 CBZN Corporations",
        position: "Volunteer Staff",
        location: "Pasay SMX MOA, PH",
        duration: "July 25 - 27, 2025",
        description: "Assisted in organizing the Philippine GameDev Expo, providing support to exhibitors and attendees. Gained experience in event management and networking within the game development community.",
        technologies: [],
        achievements: []
    },
    {
        id: 2,
        type: "education",
        icon: GraduationCap,
        company: "Centro Escolar University Makati",
        position: "Bachelor of Science in Computer Science",
        location: "Makati, PH",
        duration: "2021 - 2025",
        description: "Focused on software engineering with a strong emphasis on backend web development, data structures, and algorithms. Developed solid programming skills in JavaScript and related technologies. Applied theoretical knowledge through various full-stack projects and internships, with particular experience building and maintaining backend systems.",
        technologies: ["Java", "JavaScript", "HTML", "Tailwind CSS", "Node.js", "Express.js", "React.js", "MongoDB", "MySQL", "Git", "GitHub", "SDLC", "OTP Verification", "REST APIs", "Express.js", "JWT Authentication", "Email Authentication",],
        achievements: [
            "Magna Cum Laude graduate 2025",
            "Consistent Dean’s List and President’s List recognition / Academic scholarship (2021 - 2025)",
        ]
    },
    {
        id: 3,
        type: "internship",
        icon: Code,
        company: "CBZN Corporations",
        position: "Full Stack Web Developer Intern",
        location: "Pasig, PH",
        duration: "Feb - May 2025",
        description: "Contributed to a prototype web development project and learned agile development methodologies. Worked closely with senior developers.",
        technologies: ["Java", "JavaScript", "HTML", "Tailwind CSS", "Node.js", "Express.js", "React.js", "MySQL", "Git", "GitHub", "SDLC", "OTP Verification", "REST APIs", "Express.js", "JWT Authentication", "Email Authentication", "Trello"],
        achievements: [
            "Completed 1 Full Stack prototype project for the company",
            "Led the intern team in the development of a web application",
        ]
    },
]

export const stats = [
    {
        icon: Code,
        number: "50+",
        label: "Projects Completed",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Briefcase,
        number: "4+",
        label: "Years Experience",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Award,
        number: "15+",
        label: "Technologies Mastered",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: GraduationCap,
        number: "100+",
        label: "Skills Learned",
        color: "from-orange-500 to-red-500"
    }
]
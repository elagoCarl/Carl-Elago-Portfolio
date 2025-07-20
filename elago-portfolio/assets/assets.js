import user_image from './userIMG.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './myUserImg.png'; // Fixed: changed from '../assets/profileIMG.png' to './profileIMG.png'
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import cbznDtrSampleImg from './cbznDtrSampleImg.png';
import easeSchedulerSampleImg from './easeSchedulerSampleImg.png';
import nodejsLogo from './nodejsLogo.png';
import mySqlLogo from './mySqlLogo.png';
import vercelLogo from './vercelLogo.png';
import htmlLogo from './htmlLogo.png';
import tailwindCssLogo from './tailwindCssLogo.png';
import jsLogo from './jsLogo.png';
import cssLogo from './cssLogo.png';
import reactLogo from './reactLogo.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    cbznDtrSampleImg,
    easeSchedulerSampleImg,
    nodejsLogo,
    mySqlLogo,
    vercelLogo,
    htmlLogo,
    tailwindCssLogo,
    jsLogo,
    cssLogo,
    reactLogo
};

export const workData = [
    {
        title: 'EaseScheduler: A Web-Based Automated Timetabling Platform for CEU Makati',
        description: 'A full-stack web application that automates the scheduling process at CEU Makati using the Backtracking Algorithm, enhancing efficiency and user experience.',
        bgImage: assets.easeSchedulerSampleImg,
        liveLink: 'https://ease-scheduler.vercel.app', // Replace with actual link
        githubLink: 'https://github.com/elagoCarl/EaseScheduler', // Replace with actual GitHub link
        technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Backtracking Algorithm', 'JWT Authentication', 'RESTful API', 'Axios', 'Tailwind CSS', 'Framer Motion']
    },
    {
        title: 'Employee Daily Time Record System',
        description: 'A Web-Based Daily Time Record System for CBZN Corporations',
        bgImage: assets.cbznDtrSampleImg,
        liveLink: 'https://github.com/elagoCarl/CBZN_EMS', // Replace with actual link
        githubLink: 'https://github.com/elagoCarl/CBZN_EMS', // Replace with actual GitHub link
        technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT Authentication', 'RESTful API', 'Axios', 'Tailwind CSS']
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages & Frameworks', description: 'HTML, Tailwind CSS, Express Js, JavaScript React Js, Node Js MySQL MongoDB Git', },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Science in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 2 Full Stack Pre-Professional Projects' }
];

export const toolsData = [
    assets.htmlLogo, assets.cssLogo, assets.tailwindCssLogo, assets.jsLogo, assets.vscode, assets.reactLogo, assets.nodejsLogo, assets.mongodb, assets.figma, assets.git, assets.mySqlLogo, assets.vercelLogo,
];
import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import nextJsImg from './assets/nextjs.png'
import typeScriptImg from './assets/typescript.png'
import FoodyProject from './assets/FoodyProject.png'
import ReduxProject from './assets/ReduxProject.png'
import MixMasterProject from './assets/MixMasterProject.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-[#0a0c0d]" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-[#0a0c0d]" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-[#0a0c0d]" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: (
      <img src={nextJsImg} alt="nextImg" className="h-16 w-16 text-[#0a0c0d]" />
    ),
    text: 'Proficient in Next.js, skilled in building server-side rendered applications, optimizing performance with static site generation, and utilizing its powerful routing and API features for seamless, scalable web development.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: (
      <img
        src={typeScriptImg}
        alt="nextImg"
        className="h-16 w-16 text-[#0a0c0d]"
      />
    ),
    text: 'Basic knowledge of TypeScript, familiar with its type system and fundamental concepts, which helps in enhancing code quality and maintainability in JavaScript projects.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: `${FoodyProject}`,
    url: 'https://foody-deliveriy-app.vercel.app/',
    github: 'https://github.com/Faigism/Foody-Deliveriy-App',
    title: 'Foody-Delivery',
    text: 'This project is a web application developed for food ordering and delivery. The project was developed with React.js and Next.js and published on Vercel. Users can search for restaurants, choose from menus and manage their orders online.',
  },
  {
    id: nanoid(),
    img: `${ReduxProject}`,
    url: 'https://reduxstorefaig.netlify.app/',
    github: 'https://github.com/Faigism/CartApp',
    title: 'Redux',
    text: 'This project is an e-commerce application integrated with Redux to manage the shopping cart. The project used React.js and the Redux Toolkit, thus simplifying global state management. This is a perfect example for learning state management in complex applications like a shopping cart.',
  },
  {
    id: nanoid(),
    img: `${MixMasterProject}`,
    url: 'https://mixmasterfaig.netlify.app/',
    github: 'https://github.com/Faigism/MixMaster_App',
    title: 'Mix Master',
    text: 'Introducing “MixMaster”, the ultimate party helper app that takes cocktails from the fun Cocktails DB API. ',
  },
]

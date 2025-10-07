
import React from 'react'
import { FaHtml5,FaCss3, FaGitAlt , FaGithub } from 'react-icons/fa6';
import { BiLogoTailwindCss,BiLogoTypescript,BiLogoJavascript } from 'react-icons/bi';
import { FaReact} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import ScrollRevealWrapper from './ScrollRevel';

export default function Skills() {


const skill=[
    {id:1,title:'HTML',icon:<FaHtml5/>},
    {id:2,title:'CSS',icon:<FaCss3/>},
    {id:3,title:'JavaScript',icon:<BiLogoJavascript/>},
    {id:4,title:'TypeScript',icon:<BiLogoTypescript/>},
    {id:5,title:'Tailwind',icon:<BiLogoTailwindCss/>},
    {id:6,title:'Git',icon:<FaGitAlt/>},
    {id:7,title:'Git Hub',icon:<FaGithub/>},
    {id:8,title:'React',icon:<FaReact/>},
    {id:9,title:'Next.js',icon:<RiNextjsFill/>},
]

  return (
    <section id='Skills'  className='py-20 bg-gradient-to-b from-gray-300 via-[#00bcd1]/30 to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-[#00bcd1]/20 dark:to-gray-950 '>
            <ScrollRevealWrapper delay={100} origin="left">

       <div className="container mx-auto">

        <div className='mb-20'>
<h2 className='title  text-4xl font-bold text-center text-main'><span  className="text-black dark:text-white">MY</span> SKIILS</h2>
        </div>

<div className='flex flex-col md:flex-row flex-wrap'>
    
    {skill.map((skl)=>(
        <div key={skl.id} className='md:w-1/3 w-full px-3'>
            <div className='flex md:flex-col flex-row rounded-lg shadow-lg border-2 border-main hover:shadow-main mt-5 py-3 px-3 gap-3 items-center cursor-pointer hover:scale-110 transition-all duration-500 '>
<i className='text-3xl'>{skl.icon}</i>
<h3 className='text-xl font-bold'>{skl.title}</h3>
            </div>
        </div>
    ))}

</div>










        </div>


</ScrollRevealWrapper>

    </section>
  )
}

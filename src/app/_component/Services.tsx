'use client'
import React from 'react'
import ScrollRevealWrapper from './ScrollRevel';

export default function Services() {


const serv =[
  { id:1,body:'Creating modern, mobile-friendly websites that look perfect on any device.'
    ,title:'Front-End Development',
    icon:'fa-solid fa-code'},

    {id:2,body:'Building fast, SEO-ready single-page applications with smooth user experiences.',
      title:'UI/UX Design',
      icon:'fa-solid fa-pencil-ruler'},

    { id:3,body:'Turning Figma or Adobe XD designs into clean, interactive, and accessible interfaces.',
      title:'Performance Optimization',
      icon:'fa-solid fa-gauge-high'},
]

  return (
    <section id='Services' className='py-20 bg-gradient-to-b from-gray-300 via-[#00bcd1]/30 to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-[#00bcd1]/20 dark:to-gray-950 '>
              <ScrollRevealWrapper delay={100} origin="right">
        
        <div className="container mx-auto">

        <div className='mb-20'>
<h2 className='title  text-4xl font-bold text-center'><span className='text-main'>MY</span> SERVICES</h2>
        </div>
      <div className='w-full flex md:flex-row flex-col gap-4 mt-10'>
        {serv.map((servitem )=>(
           <div className='px-2  h-52 flex flex-col justify-center ' key={servitem.id}>
          <div className='group justify-center text-center h-100 rounded-lg shadow-lg py-3 hover:shadow-[#00bec140] flex flex-col gap-7 bg-gradient-to-br from-white via-[#00bcd1]/10 to-gray-100  hover:dark:shadow-[#00bec140] px-2 items-center hover:scale-110 transition-all duration-500  dark:bg-gradient-to-br dark:from-black dark:via-[#00bcd1]/20 dark:to-gray-900'>
            <div>
            <i className={`${servitem.icon} group-hover:text-main transition-all duration-500 mt-3 text-2xl`}></i>

<h3 className='font-bold group-hover:text-main transition-all duration-500'> {servitem.title}</h3>
            </div>
            <span >{servitem.body}</span>
          <div className='w-full '>
            <a className='hover:text-main transition-all duration-500 underline underline-offset-2' href='#Contact' 
             onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById('Contact')?.scrollIntoView({behavior:'smooth'})

}}> 
Let’s get started <i className='fa-solid fa-arrow-right'/></a>
          </div>
          </div>
        </div>
        ))}

      </div>
        </div>
        </ScrollRevealWrapper>
    </section>
  )
}

import React from 'react'
import {client} from '../lib/sanity'
import {allProjectsQuery} from '../lib/queries'
import Image from 'next/image'
import {Root} from '../interface/project.schema'
import {  FaGithub } from 'react-icons/fa6';
import { BsArrowUpRight } from 'react-icons/bs';
import Link from 'next/link'
import ScrollRevealWrapper from './ScrollRevel'



export default async function Projects() {


  const allProjects = await client.fetch(allProjectsQuery, {}, {next: {revalidate: 0}})

  return (
    <section
      id="Projects"
      className="py-20 bg-gradient-to-b from-gray-300 via-[#00bcd1]/30 to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-[#00bcd1]/20 dark:to-gray-950 "
    >
      <ScrollRevealWrapper delay={100} origin="left">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="title  text-4xl font-bold text-center text-main">
            <span className="text-black dark:text-white">MY</span> Projects
          </h2>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap ">
        
          {allProjects &&
            allProjects.slice(0,7).map((project: Root) => (
              <div key={project._id} className="md:w-1/3 w-full px-3">
                <div className="flex flex-col relative rounded-lg shadow-lg border-2 border-main hover:shadow-main mt-5 py-3 px-3 gap-3 items-center cursor-pointer  transition-all duration-500 ">
                  <Image
                    src={project.image}
                    alt={`${project.title}`}
                    width={100}
                    height={100}
                    className="w-full h-[180px] rounded-lg"
                  />
                  <h3 className="w-full font-bold text-xl">{project.title}</h3>
                  <p className="w-full line-clamp-2">{project.desc}</p>
                  <div className="top-0 left-0 absolute justify-end w-full flex gap-2 py-3 items-center pr-3">
                    <a href={project.repoLink} target='_blank'>
                      <button className=' p-2   cursor-pointer bg-main hover:bg-[#029598] transition-all duration-300 rounded-full'><FaGithub/></button>
                    </a>
                    <a href={project.liveLink} target='_blank'>
                      <button className=' p-2  cursor-pointer bg-main hover:bg-[#029598] transition-all duration-300 rounded-full font-bold'><BsArrowUpRight/></button>
                    </a>

                  </div>
                </div>
              </div>
            ))}
            
        </div>
        <div className='w-full flex justify-center items-center mt-5'>

                              <button type="button" className="text-black  font-medium border border-gray-500 hover:bg-[#00bdc1] hover:text-white transition-all duration-500 cursor-pointer rounded-lg text-sm px-4 py-2   dark:text-white dark:hover:bg-[#00bdc1] dark:hover:text-white "> <Link href="/projects" >View All Projects</Link> </button>
        </div>
      </div>
      </ScrollRevealWrapper>
    </section>
  )
}

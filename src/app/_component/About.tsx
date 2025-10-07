import Image from 'next/image'
import React from 'react'
export const dynamic = "force-static";

import { FaCloudDownloadAlt } from 'react-icons/fa';
import ScrollRevealWrapper from './ScrollRevel';
export default function About() {
  
  return (
    <section
      id="About"
      className="py-20  bg-gradient-to-b from-gray-300 via-[#00bcd1]/50 to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-[#00bcd1]/20 dark:to-gray-950"
    >
            <ScrollRevealWrapper delay={100} origin="right">

      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="title  text-4xl font-bold text-center text-main 500">
            {' '}
            ABOUT <span className="text-black dark:text-white">ME</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center items-center w-full ">
            <div className="size-96 overflow-hidden rounded-full border-4 border-main group">
              <Image
                src={'/abdo (1).png'}
                alt="Abdo photo"
                width={100}
                height={100}
                loading='lazy'
                className="  w-full h-full   drop-shadow-lg group-hover:drop-shadow-gray-400  transition-all duration-500  "
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-start  p-2 flex-col gap-3">
            <div>
                <h3 className='text-2xl font-bold text-main text-center md:text-start'> {`I'm Abdelrahman Tarik`} </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl  ">
                 passionate Frontend Developer specialized in building
                modern, responsive websites using React, Next.js, and Tailwind CSS. I enjoy turning
                creative ideas into functional digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl ">
                My focus is on creating fast, user-friendly, and visually appealing web apps that
                help businesses grow online.
              </p>
            </div>
                  <button type="button" className="text-black  font-medium border border-gray-500 hover:bg-[#00bdc1] hover:text-white transition-all duration-500 cursor-pointer rounded-lg text-sm px-4 py-2   dark:text-white dark:hover:bg-[#00bdc1] dark:hover:text-white "> <a href="/AbdelrahmanTarikSaid.pdf" className='flex gap-2 items-center ' download>Download CV <FaCloudDownloadAlt/></a> </button>

          </div>
        </div>
      </div>
      </ScrollRevealWrapper>
    </section>
  )
}

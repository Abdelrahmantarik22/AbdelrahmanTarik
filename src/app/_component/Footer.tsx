'use client'
import React from 'react'

export default function Footer() {

 const links = [
    {to: 'Home', link: 'Home', id: 1},
    {to: 'About', link: 'About', id: 2},
    {to: 'Skills', link: 'Skills', id: 3},
    {to: 'Services', link: 'Services', id: 4},
    {to: 'Projects', link: 'Projects', id: 5},
    {to: 'Contact', link: 'Contact', id: 6},
  ]

  return (
    

<footer className=" liink m-0 dark:bg-black bg-gray-200">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#Home" className="hover:underline">Abdelrahman Tarik</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-4">
        {links.map((lin) => (
              <li key={lin.id}>
                <a
                onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById(lin.to)?.scrollIntoView({behavior:'smooth'})
                }}
                  href={`#${lin.to}`}
                  className="block py-2 px-3 dark:text-white text-black rounded-sm md:bg-transparent  md:p-0 "
                  aria-current="page"
                  
                >
                  {lin.link}
                </a>
              </li>
            ))}
    </ul>
  </div>
</footer>


  )
}

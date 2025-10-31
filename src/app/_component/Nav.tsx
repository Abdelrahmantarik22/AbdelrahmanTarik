'use client'
import React, {useEffect, useState} from 'react'
import {usePathname, useRouter} from 'next/navigation'
import Image from 'next/image'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const links = [
    {to: 'Home', link: 'Home', id: 1},
    {to: 'About', link: 'About', id: 2},
    {to: 'Skills', link: 'Skills', id: 3},
    {to: 'Services', link: 'Services', id: 4},
    {to: 'Projects', link: 'Projects', id: 5},
    {to: 'Contact', link: 'Contact', id: 6},
  ]

  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    if (pathname == '/' && typeof window !== 'undefined') {
      const sections = document.querySelectorAll('section')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        {threshold: 0.6},
      )

      sections.forEach((section) => observer.observe(section))
      return () => observer.disconnect()
    }
  }, [pathname])

  useEffect(() => {
    if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDark(false)
    }}
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
    if (dark) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }}
  }, [dark])

  function openNav() {
    setOpen(!open)
  }

  const handleNavClick = (to: string) => {
    setOpen(false)

    // لو مش في الصفحة الرئيسية
    if (pathname !== '/') {
      router.push(`/#${to}`)

      return
    }

    // لو في نفس الصفحة اعمل scroll بس
    const section = document.getElementById(to)
    if (section) section.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <nav className=" fixed  w-full  z-20 shadow-white/20 top-0 start-0  shadow-lg backdrop-blur-md border    dark:shadow-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={() => {
            handleNavClick('Home')
          }}
          className="flex items-center space-x-3 rtl:space-x-reverse  cursor-pointer"
        >
          <Image
            src="/mylogo.png"
            className="size-10 rounded-full shadow shadow-main"
            alt="My Logo"
            width={100}
            height={100}
          />
          <span className="hidden md:block font-semibold font-title text-[19px] shine-text  bg-gradient-to-r from-black via-[#00ffe1] to-black  dark:bg-gradient-to-r dark:from-white dark:via-[#00ffe1] dark:to-white">
            {' '}
            {`<Abdelrahman />`}{' '}
          </span>
        </button>
        <div className="flex md:order-2 space-x-3  rtl:space-x-reverse items-center">
          <i
            className={`fa-solid ${dark ? 'fa-sun text-white' : 'fa-moon text-black'} cursor-pointer md:order-4`}
            onClick={() => setDark(!dark)}
          />

          <button
            onClick={() =>{
              if (typeof window !== 'undefined') {
              window.open(
                'https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahmantarik9@gmail.com',
                '_blank',
              )}
            }}
            type="button"
            className="text-black  font-medium border border-gray-500 hover:bg-main hover:text-white transition-all duration-500 cursor-pointer rounded-lg text-sm px-4 py-2  dark:text-white dark:hover:bg-main dark:hover:text-black "
          >
            Hire Me
          </button>
          <button
            onClick={openNav}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${!open && 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent  ">
            {links.map((lin) => (
              <li key={lin.id}>
                <button
                  onClick={() => {
                    handleNavClick(lin.to)
                    setOpen(false)
                  }}
                  className={`capitalize transition-all duration-300  cursor-pointer ${
                    activeSection === lin.to
                      ? 'text-main font-semibold border-b-2 border-main'
                      : 'text-black dark:text-white hover:text-main'
                  }`}
                  aria-current="page"
                >
                  {lin.link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

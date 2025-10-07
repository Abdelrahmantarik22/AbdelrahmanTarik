import React from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import Form from './Form'
import ScrollRevealWrapper from './ScrollRevel'
export default function Contact() {


  return (
      
    <section
    id="Contact"
    className="py-20 bg-gradient-to-b from-gray-300 via-[#00bcd1]/30 to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-[#00bcd1]/20 dark:to-gray-950 "
    >
            <ScrollRevealWrapper delay={100} origin="right">

      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="title  text-4xl font-bold text-center text-main 500">
            {' '}
            CONTACT <span className="text-black dark:text-white">ME</span>
          </h2>
        </div>
        <div className="flex  flex-col md:flex-row">
          <div className="md:w-1/2 w-full  justify-between font-main h-5/6 order-3 md:order-1">
            <div className="px-2">
              <div className="flex flex-col items-center">
                <table className="border-spacing-y-8 border-separate">
                  <tbody>
                    <tr>
                      <td className="mr-0">
                        <a
                          href="https://maps.app.goo.gl/Y1W2aQL3ruU9cZDi8"
                          target="_blank"
                          className="flex items-center gap-8"
                        >
                          <i className="text-2xl text-black dark:text-white ">
                            <FaLocationDot />
                          </i>
                          <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold text-main"> Location</span>
                            <span className="md:text-2xl text-lg text-black dark:text-white">
                              Maadi , Cairo
                            </span>
                          </div>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="mr-4">
                        <a href="tel:+201110163561" className="flex items-center gap-8">
                          <i className="text-2xl text-black dark:text-white">
                            <BsFillTelephoneFill />
                          </i>

                          <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold text-main"> Mobile</span>
                            <span className="md:text-2xl text-lg text-black dark:text-white">
                              +201110163561
                            </span>
                          </div>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="mr-4">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahmantarik9@gmail.com"
                          target="_blank"
                          className="flex items-center gap-8"
                        >
                          <i className="text-2xl text-black dark:text-white">
                            <HiOutlineMail />
                          </i>
                          <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold text-main"> E-mail</span>
                            <span className="md:text-2xl text-lg text-black dark:text-white">
                              abdelrahmantarik9@gmail.com
                            </span>
                          </div>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="follow">
                  <div className="my-2">
                    <h3 className="title  text-2xl font-bold text-center text-black dark:text-white">
                      {' '}
                      FOLLOW <span className="text-main">ME</span>
                    </h3>
                  </div>
                  <ul className="flex gap-4 mt-5">
                    <li className="hover:-translate-y-1.5 transition-all duration-500">
                      {' '}
                      <a href="https://www.linkedin.com/in/abdelrahman-tarik/" target="_blank">
                        {' '}
                        <span className="size-7 p-4 bg-transparent dark:bg-transparent hover:bg-main hover:dark:bg-main   rounded-lg liink cursor-pointer hover:text-white">
                          {' '}
                          <i className="fa-brands fa-linkedin text-lg"></i>{' '}
                        </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="hover:-translate-y-1.5 transition-all duration-500">
                      {' '}
                      <a href="https://github.com/Abdelrahmantarik22" target="_blank">
                        {' '}
                        <span className="size-7 p-4 bg-transparent dark:bg-transparent hover:bg-main hover:dark:bg-main   rounded-lg liink cursor-pointer hover:text-white">
                          {' '}
                          <i className="fa-brands fa-github text-lg"></i>{' '}
                        </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="hover:-translate-y-1.5 transition-all duration-500">
                      {' '}
                      <a href="https://www.facebook.com/share/1BS8Ycpqgi/" target="_blank">
                        {' '}
                        <span className="size-7 p-4 bg-transparent dark:bg-transparent hover:bg-main hover:dark:bg-main   rounded-lg liink cursor-pointer hover:text-white">
                          {' '}
                          <i className="fa-brands fa-facebook text-lg"></i>{' '}
                        </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="hover:-translate-y-1.5 transition-all duration-500">
                      {' '}
                      <a
                        href="https://www.tiktok.com/@holakocode3?is_from_webapp=1&sender_device=pc"
                        target="_blank"
                      >
                        {' '}
                        <span className="size-7 p-4 bg-transparent dark:bg-transparent hover:bg-main hover:dark:bg-main   rounded-lg liink cursor-pointer hover:text-white">
                          {' '}
                          <i className="fa-brands fa-tiktok text-lg"></i>{' '}
                        </span>{' '}
                      </a>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-2 order-2">
            <div className="w-full">
              <Form/>
            </div>
          </div>
        </div>
      </div>
      </ScrollRevealWrapper>
    </section>
  )
}

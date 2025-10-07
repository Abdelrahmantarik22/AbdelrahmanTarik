'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {


  return (
    <section id='Home' className='h-auto  w-full  dark:bg-gradient-to-b dark:from-black dark:via-[#00bcd1]/20 dark:to-gray-950  py-12   bg-gradient-to-b from-gray-300 via-[#00bcd1]/50 to-gray-300'>
      <div className="container mx-auto">
    <div className=' flex sm:flex-row flex-col  '>

<div className='md:w-1/2 w-full pl-10 md:pl-0  flex md:justify-cente items-center mt-7 md:mt-0 order-2'>
<div className='flex flex-col gap-3 '>
<span className=' text-lg md:text-3xl md:mb-1 block '>{`Hey I'am `}</span>
<h1 className='font-[900] md:text-5xl text-2xl scale-y-150 tracking-wide'>Abdelrahman Tarik</h1>
<div className='flex justify-between md:mt-6 items-center'>

  <TypeAnimation
      sequence={[
       
        'Front End Developer',
        2000, 
        '',
        2000,
        'Front End Developer',
        2000,
        '',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
      className='font-semibold md:text-[2em] text-[18px] text-main '
    />


</div >

<div>
<ul className='flex gap-4 mt-5'>
  <li className='hover:-translate-y-1.5 transition-all duration-500'> <a href="https://www.linkedin.com/in/abdelrahman-tarik/" target='_blank'>   <span className='size-7 p-4 bg-transparent dark:bg-transparent hover:bg-main hover:dark:bg-main   rounded-lg liink cursor-pointer hover:text-white' > <i className='fa-brands fa-linkedin text-lg'></i>      </span> </a>  </li>
  <li className='hover:-translate-y-1.5 transition-all duration-500'> <a href="https://github.com/Abdelrahmantarik22" target='_blank'>   <span className='size-7 p-4 bg-transparent dark:bg-transparent hover:bg-main hover:dark:bg-main   rounded-lg liink cursor-pointer hover:text-white' >  <i className='fa-brands fa-github text-lg'></i>     </span> </a>  </li>
  <li className='hover:-translate-y-1.5 transition-all duration-500'> <a href="https://www.facebook.com/share/1BS8Ycpqgi/" target='_blank'>   <span className='size-7 p-4 bg-transparent dark:bg-transparent hover:bg-main hover:dark:bg-main   rounded-lg liink cursor-pointer hover:text-white' > <i className='fa-brands fa-facebook text-lg'></i>       </span> </a>  </li>
  <li className='hover:-translate-y-1.5 transition-all duration-500'>  <a href="https://www.tiktok.com/@holakocode3?is_from_webapp=1&sender_device=pc" target='_blank'>  <span className='size-7 p-4 bg-transparent dark:bg-transparent hover:bg-main hover:dark:bg-main   rounded-lg liink cursor-pointer hover:text-white' >  <i className='fa-brands fa-tiktok text-lg'></i>    </span> </a>  </li>
</ul>

</div>

<div className='mt-6 '>

      <button 
       onClick={()=>{
                  document.getElementById('Contact')?.scrollIntoView({behavior:'smooth'})
                }}
      type="button"
       className="text-black w-full md:w-1/2 font-medium border border-gray-500 hover:bg-main hover:text-white transition-all duration-500 cursor-pointer rounded-lg text-sm px-4 py-2   dark:text-white dark:hover:bg-main dark:hover:text-white ">Contact</button>
</div>

</div>
</div>
<div className='md:w-1/2 w-full pt-10 md:pt-0 order-1 sm:order-3 flex items-center justify-center '>
<Image src={'/abdo (1).png'} alt='Abdo photo' width={100} height={100} className='  md:w-10/12 w-full  h-9/12  drop-shadow-lg  [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)] [mask-repeat:no-repeat] [mask-size:cover] ' />

</div>


      </div>

    </div>
    </section>
  )
}

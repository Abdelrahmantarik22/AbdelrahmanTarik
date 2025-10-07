'use client'
import { useForm } from "react-hook-form";
import React from 'react'
import {BsFillSendFill} from 'react-icons/bs'
import z from "zod";
import { SendSchema } from "../Schema/send.schema";
import { zodResolver } from '@hookform/resolvers/zod';
  import {  toast } from 'react-toastify';

import Alert from "./Alert";

export default function Form() {
        const notify = () => toast.success("🎉  message sent successfully!",{style:{
    background:"#00bc7d",
    color:'white'
  }});
   const notifyError = () => toast.error(" ❌ Failed to send message " ,{
    style:{
      background:'#ff6467',
      color:'white'
  }
 });

const form =useForm<z.infer<typeof SendSchema>>({

    resolver:zodResolver(SendSchema),

        defaultValues:{
            name:'',
            email:'',
            subject:'',
            message:'',
        }
    }
)





async function onSubmit(values: z.infer<typeof SendSchema>) {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });


      if (!res.ok) {
notifyError()
        return;
      }

notify()
      form.reset(); 
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
  <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto px-7 w-full py-5 rounded-lg   shadow-main/50   shadow-lg backdrop-blur-md    dark:shadow-main/50">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                  {...form.register('name')}
                    type="text"
                    name="name"
                    id="form-name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main/75 focus:outline-none focus:ring-0 focus:border-main peer"
                    placeholder=" "
                    
                  />
                  <label
                    htmlFor="form-name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main/dark:focus:border-main/75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full name
                  </label>
              {form.formState.errors.name&& <Alert alert={form.formState.errors.name?.message}/>}

                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                {...form.register('email')}

                    type="email"
                    name="email"
                    id="form-email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main/75 focus:outline-none focus:ring-0 focus:border-main peer"
                    placeholder=" "
                    
                  />
                  <label
                    htmlFor="form-email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main/dark:focus:border-main/75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                   {form.formState.errors.email&& <Alert alert={form.formState.errors.email?.message}/>}

                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                 {...form.register('subject')}

                    type="text"
                    name="subject"
                    id="form-subject"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main/75 focus:outline-none focus:ring-0 focus:border-main peer"
                    placeholder=" "
                    
                  />
                  <label
                    htmlFor="form-subject"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main/dark:focus:border-main/75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject
                  </label>
                  {form.formState.errors.subject&& <Alert alert={form.formState.errors.subject?.message}/>}

                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <textarea
                 {...form.register('message')}

                    name="message"
                    id="form-message"
                    className="block py-2.5 min-h-[80px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main/75 focus:outline-none focus:ring-0 focus:border-main peer"
                    placeholder=" "
                    
                  />
                  <label
                    htmlFor="form-message"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main/dark:focus:border-main/75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                 {form.formState.errors.message&& <Alert alert={form.formState.errors.message?.message}/>}
                </div>

                <button
                  type="submit"
                  className="text-white bg-main hover:hover:bg-[#009c9f] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-main dark:hover:bg-[#009c9f] dark:focus:ring-main flex items-center justify-center gap-2"
                >
                  Send <BsFillSendFill />
                </button>
              </form>
  )
}

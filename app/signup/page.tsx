"use client"

import React, { useContext } from 'react'
import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import { linkShearing } from '../page';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Logininputs } from '../style';
import Link from 'next/link';


function page() {

    const context = useContext(linkShearing);

  const { register, handleSubmit, formState:{errors}  } = useForm<Logininputs>();

  const Submit: SubmitHandler<Logininputs> = (data:any) => {
    console.log(errors)
  };

  return (
    <>
    <main className="p-[32px] pb-[126px] w-[100%] min-h-[100vh] flex flex-col items-center ">
        <img
          className="mb-[64px] w-[182px] h-[40px] "
          src="/images/Group 252.png"
        />
        <div>
          <div className="flex flex-col gap-[8px] mb-[40px] ">
            <h1 className="text-[24px] font-bold text-[#333] ">Login</h1>
            <p className="text-[16px] text-[#737373] ">
              Add your details below to get back into the app
            </p>
          </div>
          <form onSubmit={handleSubmit(Submit)} className="flex flex-col gap-[24px] " >
            <div className=" flex flex-col gap-[4px] ">
              <h2 className="text-[12px] text-[#333333] ">Email address</h2>
              <div
                className={` flex items-center gap-[13.5px] w-[100%] px-[16px] py-[12px] rounded-[8px] border border-solid border-[#d9d9d9] `}
              >
                <AiTwotoneMail />
                <input
                  id="Email"
                  {...register("Email",{required:true})}
                  type="email"
                  placeholder="e.g. alex@email.com"
                  className="text-[16px] text-[#333333] w-[100%] outline-none "
                />
              </div>
            </div>
            <div className=" flex flex-col gap-[4px] ">
              <h2 className="text-[12px] text-[#333333] ">Password</h2>
              <div
                className={` flex items-center gap-[13.5px] w-[100%] px-[16px] py-[12px] rounded-[8px] border border-solid border-[#d9d9d9] `}
              >
                <BiSolidLock />
                <input
                  id="password"
                  {...register("password",{required:true})}
                  type="password"
                  placeholder="At least .8 characters"
                  className="text-[16px] text-[#333333] w-[100%] outline-none "
                />
              </div>
            </div>
            <div className=" flex flex-col gap-[4px] ">
              <h2 className="text-[12px] text-[#333333] ">Password</h2>
              <div
                className={` flex items-center gap-[13.5px] w-[100%] px-[16px] py-[12px] rounded-[8px] border border-solid border-[#d9d9d9] `}
              >
                <BiSolidLock />
                <input
                  id="repPassword"
                  type="password"
                  placeholder="At least .8 characters"
                  className="text-[16px] text-[#333333] w-[100%] outline-none "
                />
              </div>
            </div>
            <p className='text-[12px] text-[#737373] ' >Password must contain at least 8 characters</p>
            <button type="submit" className="w-[100%] h-[46px] flex items-center justify-center bg-[#633cff] rounded-[8px] text-[16px] text-[#FFF]" > 
                Create new account
            </button>
            <p className="text-[16px] text-[#737373] text-center " >Already have an account? <br/><Link href={"/"} className="text-[#633cff]" >Login</Link></p>
          </form>
        </div>
      </main>
    </>
  )
}

export default page
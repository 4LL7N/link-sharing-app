"use client";

import { createContext, useContext, useState } from "react";
import { loginStyle, ContextStyle, Logininputs } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "postcss";
import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";


export const linkShearing = createContext<ContextStyle | undefined>(undefined);

export function Home() {
  const [Login, setLogin] = useState<loginStyle>({
    Email: "",
    password: "",
  });

  return (
    <linkShearing.Provider
      value={{
        Login,
        setLogin,
      }}
    >
      <LoginContext />
    </linkShearing.Provider>
  );
}

export default function LoginContext() {
  const context = useContext(linkShearing);

  const { register, handleSubmit, formState:{errors}  } = useForm<Logininputs>();

  const Submit: SubmitHandler<Logininputs> = (data:any) => {
    console.log(errors)
  };

  return (
    <>
      <main className="p-[32px] w-[100%] min-h-[100vh] ">
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
                  id="Email"
                  {...register("Email",{required:true})}
                  type="email"
                  placeholder="Enter your password"
                  className="text-[16px] text-[#333333] w-[100%] outline-none "
                />
              </div>
            </div>
            <button type="submit" className="w-[100%] h-[46px] flex items-center justify-center bg-[#633cff] rounded-[8px] text-[16px] text-[#FFF]" > 
                Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

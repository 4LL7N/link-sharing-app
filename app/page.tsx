"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AccStyle, ContextStyle, Logininputs } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "postcss";
import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import Link from "next/link";
import { error, log } from "console";
import { useRouter } from "next/navigation";

export default function LoginContext() {
  const router = useRouter();

  const [acc, setAcc] = useState<AccStyle[] | null>([
    {
      id: 1,
      Email: "email@k.kk",
      password: "11",
      firstName: "nika",
      lastName: "chxaidze",
      links: [
        {
          name: "Github",
          image: "/images/LinkIcons/teenyicons_github-solid.svg",
          url: "https://github.com/4LL7N",
          bg: "#1a1a1a",
        },
      ],
      picture: "",
    },
  ]);

  const [noneExAcc, setNoneExAcc] = useState<boolean>(false);
  let accData:any = null;

  
  useEffect(() => {
    localStorage.setItem("acc", JSON.stringify(acc));
  }, []);
  console.log(accData , "sadsa");
  
  if (typeof localStorage !== 'undefined') {
    accData = localStorage.getItem("acc");
  
  }
  
    useEffect(() => {
      let accArr: any = localStorage.getItem("acc")?localStorage.getItem("acc"):null;
      accArr ? (accArr = JSON.parse(accArr)) : null;
      accArr ? setAcc(accArr) : null;
    }, [accData]);
  
  //if(localStorage.getItem("acc")){
  // useEffect(() => {
  //   let newData:string|null = localStorage.getItem("acc")
  //   if(newData)setAcc(JSON.parse(newData))
  // },[localStorage.getItem("acc")])
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Logininputs>();

  const Submit: SubmitHandler<Logininputs> = (data: Logininputs) => {
    console.log(true);

    acc?.some((item) => {
      if (item.Email == data.Email && item.password == data.password) {
        setNoneExAcc(true);
        router.push(`/${item.id}`);
      }
    });
  };

  return (
    <>
      <main className="p-[32px] w-[100%] min-h-[100vh] flex flex-col items-center md:justify-center md:gap-[58px] md:bg-[#fafafa] ">
        <img
          className="mb-[64px] w-[182px] h-[40px] "
          src="/images/Group 252.png"
        />
        <div className=" lg:w-[476px] mf:h-auto md:bg-[#ffffff] md:p-[40px] md:rounded-[10px] ">
          <div className="flex flex-col gap-[8px] mb-[40px] ">
            <h1 className="text-[24px] md:text-[32px] font-bold text-[#333] ">
              Login
            </h1>
            <p className="text-[16px] text-[#737373] ">
              Add your details below to get back into the app
            </p>
          </div>
          <form
            onSubmit={handleSubmit(Submit)}
            className="flex flex-col gap-[24px] "
          >
            <div className=" flex flex-col gap-[4px] ">
              <h2
                className={` text-[12px] ${
                  errors.Email || noneExAcc
                    ? "text-[#ff3939]"
                    : "text-[#333333]"
                } `}
              >
                Email address
              </h2>
              <div
                className={` flex items-center justify-between gap-[13.5px] w-[100%] px-[16px] py-[12px] rounded-[8px] border border-solid ${
                  errors.Email || noneExAcc
                    ? "border-[#ff3939]"
                    : "border-[#d9d9d9]"
                } `}
              >
                <div className={`flex items-center gap-[13.5px]`}>
                  <AiTwotoneMail />
                  <input
                    id="Email"
                    {...register("Email", {
                      required: true,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "wrong format",
                      },
                    })}
                    type="text"
                    autoComplete="off"
                    placeholder="e.g. alex@email.com"
                    className={`text-[16px] text-[#333333] ${
                      errors.password ? "w-[150px]" : "w-[100%]"
                    } outline-none `}
                  />
                </div>
                <p className="text-[12px] text-[#ff3939] ">
                  {errors.Email
                    ? errors.Email.type == "required"
                      ? "can't be empty"
                      : errors.Email?.message
                    : ""}
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[4px] ">
              <h2
                className={`text-[12px] ${
                  errors.password || noneExAcc
                    ? "text-[#ff3939]"
                    : "text-[#333333]"
                } `}
              >
                Password
              </h2>
              <div
                className={` flex items-center justify-between  w-[100%] px-[16px] py-[12px] rounded-[8px] border border-solid ${
                  errors.password || noneExAcc
                    ? "border-[#ff3939]"
                    : "border-[#d9d9d9]"
                } `}
              >
                <div className={`flex items-center gap-[13.5px]`}>
                  <BiSolidLock />
                  <input
                    id="password"
                    {...register("password", {
                      required: true,
                    })}
                    type="password"
                    placeholder="Enter your password"
                    className={`text-[16px] text-[#333333] ${
                      errors.password ? "w-[150px]" : "w-[100%]"
                    } outline-none `}
                  />
                </div>
                <p className="text-[12px] text-[#ff3939] ">
                  {errors.password ? "can't be empty" : ""}
                </p>
              </div>
            </div>
            <p></p>
            <button
              type="submit"
              className="w-[100%] h-[46px] flex items-center justify-center bg-[#633cff] rounded-[8px] text-[16px] text-[#FFF]"
            >
              Login
            </button>
            <p className="text-[16px] text-[#737373] text-center ">
              Don’t have an account?
              {typeof window !== "undefined" && window.screen.availWidth >= 767 ? null :<br />}
              <Link
                href={{
                  pathname: "/signup",
                }}
                className="text-[#633cff] md:ml-[4px]"
              >
                Create account
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}

"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
// import { linkShearing } from '../page';
import { SubmitHandler, useForm } from "react-hook-form";
import { AccStyle, Logininputs } from "../style";
import Link from "next/link";
// import { context } from '../page';
import { log } from "console";
import { useRouter } from "next/navigation";

function Signup(props: any) {
  const [existError,setExistError] = useState<boolean>(false)
  const [accdata, setAccData] = useState<any>();
  const repPassword = useRef<any>();
  const [repPassError, setRepPassError] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Logininputs>();

  useEffect(() => {
    let accArr: any = localStorage.getItem("acc");
    accArr ? (accArr = JSON.parse(accArr)) : null;
    setAccData(accArr);
  }, []);

  const Submit: SubmitHandler<Logininputs> = (data: Logininputs) => {
    console.log(data.password);
    console.log(repPassword?.current?.value);
    if (repPassword.current && data.password == repPassword?.current?.value) {
      let existErr = false
      setRepPassError(false);
      accdata?.some((item:AccStyle) => {
        if(data.Email == item.Email ){
          setExistError(true)
          existErr = true
        }
      })
      if(!existErr){
        let accNum = accdata.length + 1
        let addAcc = [...accdata,
          {
          id: accNum ,
          Email: data.Email,
          password: data.password,
          firstName: "",
          lastName: "",
          links: [],
          picture:""
        },]
        localStorage.setItem("acc",JSON.stringify(addAcc))
      }
    } else {
      setRepPassError(true);
    }
  };


  return (
    <>
      <main className="p-[32px] pb-[126px] w-[100%] min-h-[100vh] flex flex-col items-center md:justify-center  md:gap-[58px] md:bg-[#fafafa] ">
        <img
          className="mb-[64px] w-[182px] h-[40px] "
          src="/images/Group 252.png"
        />
        <div className="md:bg-[#ffffff] md:p-[40px] md:rounded-[10px] md:w-[476px] " >
          <div className="flex flex-col gap-[8px] mb-[40px] ">
            <h1 className="text-[24px] md:text-[32px] font-bold text-[#333] ">Create account</h1>
            <p className="text-[16px] text-[#737373] ">
            Let’s get you started sharing your links!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(Submit)}
            className="flex flex-col gap-[24px] "
          >
            <div className=" flex flex-col gap-[4px] ">
              <h2
                className={`text-[12px] ${
                  errors.Email || existError ? "text-[#ff3939] " : "text-[#333333]"
                } `}
              >
                Email address
              </h2>
              <div
                className={` flex items-center gap-[13.5px] w-[100%] px-[16px] py-[12px] rounded-[8px] border border-solid ${
                  errors.Email || existError ? "border-[#ff3939]" : "border-[#d9d9d9]"
                } `}
              >
                <AiTwotoneMail />
                <input
                  id="Email"
                  {...register("Email", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "wrong format",
                    },
                  })}
                  type="email"
                  placeholder="e.g. alex@email.com"
                  className={`text-[16px] text-[#333333] ${
                    errors.Email || existError ? "w-[150px]" : "w-[100%]"
                  } outline-none `}
                />
                <p className="text-[12px] text-[#ff3939] ">
                  {errors.Email? errors.Email.type == "required"? "can't be empty": errors.Email?.message: existError? "already exists" : ""}
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[4px] ">
              <h2
                className={`text-[12px] ${
                  errors.password ? "text-[#ff3939] " : "text-[#333333]"
                } `}
              >
                Password
              </h2>
              <div
                className={` flex items-center gap-[13.5px] w-[100%] px-[16px] py-[12px] rounded-[8px] border border-solid ${
                  errors.password ? "border-[#ff3939]" : "border-[#d9d9d9]"
                } `}
              >
                <BiSolidLock />
                <input
                  id="password"
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="At least .8 characters"
                  className={`text-[16px] text-[#333333] ${
                    errors.password ? "w-[150px]" : "w-[100%]"
                  } outline-none `}
                />
                <p className="text-[12px] text-[#ff3939] ">
                  {errors.password ? "can't be empty" : ""}
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[4px] ">
              <h2
                className={`text-[12px] ${
                  repPassError ? "text-[#ff3939] " : "text-[#333333]"
                } `}
              >
                Password
              </h2>
              <div
                className={` flex items-center gap-[13.5px] w-[100%] px-[16px] py-[12px] rounded-[8px] border border-solid ${
                  repPassError || errors.password
                    ? "border-[#ff3939]"
                    : "border-[#d9d9d9]"
                } `}
              >
                <BiSolidLock />
                <input
                  id="repPassword"
                  type="password"
                  ref={repPassword}
                  placeholder="At least .8 characters"
                  className={`text-[16px] text-[#333333] ${
                    repPassError
                      ? "w-[120px]"
                      : errors.password
                      ? "w-[150px]"
                      : "w-[100%]"
                  } outline-none `}
                />
                <p className="text-[12px] text-[#ff3939] ">
                  {repPassError
                    ? "repeat password"
                    : errors.password
                    ? "can't be empty"
                    : ""}
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#737373] ">
              Password must contain at least 8 characters
            </p>
            <button
              type="submit"
              className="w-[100%] h-[46px] flex items-center justify-center bg-[#633cff] rounded-[8px] text-[16px] text-[#FFF]"
            >
              Create new account
            </button>
            <p className="text-[16px] text-[#737373] text-center ">
              Already have an account?
              {typeof window !== "undefined" && window.screen.availWidth >= 767 ? null :<br />}
              <Link href={{ pathname: "/" }} className="text-[#633cff]  md:ml-[4px]">
                Login
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}

export default Signup;

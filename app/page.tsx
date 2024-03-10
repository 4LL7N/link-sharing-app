"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AccStyle, ContextStyle, Logininputs } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "postcss";
import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import Link from "next/link";
import { error, log } from "console";

// export const linkShearing = createContext<ContextStyle | undefined>(undefined);

// export function context():any{
  // const [acc, setAcc] = useState<AccStyle[]>([
  //   {
  //     id:1,
  //     Email: "",
  //     password: "",
  //     firstName: "",
  //     lastName: "",
  //     links: [],
  //   },
  // ]);

//   const [noneExAcc, setNoneExAcc] = useState<boolean>(false);

//   return{
//     props:{
//       acc:acc
//       // setAcc,
//       // noneExAcc,
//       // setNoneExAcc
//     }
//   }
// }

// function Home() {

//   const linkShearing = createContext<any>(null)

//   // useEffect(() => {
//   //   setAcc([
//   //     ...acc,
//   //     {
//   //       Email: "",
//   //       password: "",
//   //       firstName: "",
//   //       lastName: "",
//   //       links: [],
//   //     },
//   //   ]);
//   //   console.log(acc + "  bla");

//   // }, []);

//   //console.log(acc + "  bla");
//   return (
//     <linkShearing.Provider
//       // value={{
//       //   acc,
//       //   setAcc,
//       //   noneExAcc,
//       //   setNoneExAcc,
//       // }}
//     >
//       <LoginContext />
//      </linkShearing.Provider>
//   );
 //}

export default function LoginContext() {
  // const context = useContext(linkShearing);
  // console.log(context().acc)

  const [acc, setAcc] = useState<AccStyle[]>([
    {
      id: 1,
      Email: "",
      password: "",
      firstName: "",
      lastName: "",
      links: [],
    },
  ]);

  const [noneExAcc, setNoneExAcc] = useState<boolean>(false);

  // const [acc, setAcc] = useState<AccStyle[]>([
  //   {
  //     Email: "",
  //     password: "",
  //     firstName: "",
  //     lastName: "",
  //     links: [],
  //   },
  // ]);

  // useEffect(() => {
  //   context?.setAcc([
  //     ...context?.acc,
  //     {
  //       Email: "",
  //       password: "",
  //       firstName: "",
  //       lastName: "",
  //       links: [],
  //     },
  //   ]);
  // console.log(context?.acc[0].Email + "  bla");

  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Logininputs>();

  const Submit: SubmitHandler<Logininputs> = (data: Logininputs) => {
    // console.log(errors)
    // console.log(data);
    // let findAcc = "jn";
    // console.log(context?.acc);
    acc.some((item) => {
      if (item.Email == data.Email && item.password == data.password) {
        return true;
        console.log(true);
      }
      console.log(acc);
      setNoneExAcc(true);
      // console.log(item.Email);
      // console.log(context?.noneExAcc);
    });
    // console.log("jkn");
  };

  // console.log(errors);
  // console.log(watch);

  return (
    <>
      <main className="p-[32px] w-[100%] min-h-[100vh] flex flex-col items-center ">
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
              <br />
              <Link
                href={{
                  pathname: "/123",
                }}
                className="text-[#633cff]"
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

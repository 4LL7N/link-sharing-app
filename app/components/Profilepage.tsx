"use client";
import React, { useEffect, useState } from "react";
import { AccStyle, Links, links } from "../style";
import { FaArrowRight } from "react-icons/fa6";
import { it } from "node:test";
import Link from "next/link";
import { link } from "fs";

function Profilepage() {
  const [UserAcc, setUserAcc] = useState<AccStyle>();


  useEffect(() => {
    let accArr: any = localStorage.getItem("acc");
    accArr ? (accArr = JSON.parse(accArr)) : null;
    let id = Number(localStorage.getItem("accId"));
    const User: AccStyle = accArr?.find((item: AccStyle) => item.id == id);
    setUserAcc(User);
    console.log(User);
  }, []);

  return (
    <>
      <main className="mb-[207px] min-h-[100vh]" >
        <div className="md:bg-[#633cff] md:h-[357px] md:w-[100%] md:px-[24px] md:pt-[24px] md:rounded-b-[32px] " >
        <div className=" flex justify-between px-[24px] py-[16px] md:bg-[#ffffff] md:rounded-[12px] ">
          <Link href={{pathname:`/${UserAcc?.id}/links`}} className=" flex items-center justify-center py-[11px] w-[159.5px] border border-solid border-[#633cff] rounded-[8px] ">
            <p className="text-[16px] text-[#633cff] font-semibold ">
              Back to Editor
            </p>
          </Link>
          <button className=" flex items-center justify-center py-[11px] w-[159.5px] rounded-[8px] bg-[#633cff] ">
            <p className="text-[16px] text-[white] font-semibold ">
              Share Link
            </p>
          </button>
        </div>
        </div>
        <section className={`flex flex-col w-[100%]  md:w-[349px] items-center mt-[76px] md:shadow-[0_0px_32px_0px_rgba(0,0,0,0.1)] md:px-[56px] md:py-[48px] md:rounded-[24px] md:absolute md:top-[228px] md:left-1/2 md:ml-[-174.5px] md:bg-[#ffffff] `}>
          <div className="flex flex-col items-center ">
            <img
              className="w-[108px] h-[108px] rounded-[50%] border-[4px] border-solid border-[#633cff] "
              src={UserAcc?.picture}
              alt=""
            />
            <h1 className="text-[32px] text-[#333333] font-bold mt-[21px] ">
              {UserAcc?.firstName} {UserAcc?.lastName}
            </h1>
            <h2 className="text-[16px] text-[#737373] mt-[8px] ">
              {UserAcc?.Email}
            </h2>
          </div>
          <div className="flex flex-col mt-[56px] gap-[20px] w-[100%] items-center ">
            {UserAcc?.links.map((item: links, index: number) => {
              
              return (
                <button
                  key={index}
                  className={` flex w-[237px] py-[16px] px-[16px] rounded-[8px] justify-between items-center ${item.name == "Frontend Mentor"? "border border-solid border-[#d9d9d9] ":null} `}
                  style={{background:item.bg}}
                  onClick={() => window.location.href = item.url}
                >
                  <div className="flex gap-[10px] ">
                    <img src={item.image} alt="" />
                    <p className={`text-[16px]  ${item.name == "Frontend Mentor" ? "text-[#333333] ":"text-[#ffffff]"} `}>{item.name}</p>
                  </div>
                  <FaArrowRight color={item.name == "Frontend Mentor" ?"#333333":"#ffffff"} />
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Profilepage;

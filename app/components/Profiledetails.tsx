"use client";
import React, { useEffect, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { AccStyle, Links } from "../style";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";


function Profiledetails() {
  const [UserAcc, setUserAcc] = useState<AccStyle>();
  const [accdata, setAccData] = useState<AccStyle[]>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [fiveArr,setFiveArr] = useState<Links[]>()

  useEffect(() => {
    let accArr: any = localStorage.getItem("acc");
    accArr ? (accArr = JSON.parse(accArr)) : null;
    let id = Number(localStorage.getItem("accId"));
    setAccData(accArr);
    const User: AccStyle = accArr?.find((item: AccStyle) => item.id == id);
    setUserAcc(User);
    User.firstName ? setFirstName(User.firstName) : null;
    User.lastName ? setLastName(User.lastName) : null;
    User.Email ? setEmail(User.Email) : null;
    let newarr = []
    for(let i=0 ; i<5 ; i++){
      if(User.links[i])newarr.push(User.links[i])
    }

    setFiveArr([...newarr])
  }, []);

  const Save = () => {
    let id = Number(localStorage.getItem("accId"));
    let accArr:any = accdata?.filter((item:AccStyle) => item.id != id )
    let newUserData:AccStyle = {id:UserAcc?.id,Email:Email,password:UserAcc?.password,firstName:firstName,lastName:lastName,links:[...UserAcc?.links],picture:UserAcc?.picture}
    localStorage.setItem("acc",JSON.stringify([...accArr,newUserData]))
  }

  return (
    <>
    <main className="flex justify-center w-[100%] lg:flex-1 lg:gap-[24px] " >
    <div className="hidden lg:flex bg-[#ffffff] w-[560px] h-auto pt-[101.5px] rounded-[12px] justify-center relative ">
          <div className="w-[307px] h-[631px] overflow-hidden relative " >
          <Image
            src="/images/preview-section.svg"
            alt=""
            fill
          />
          </div>

          {fiveArr?.map((item, index) => {
            let color: string = item?.bg;

            let position = 378 + Number(index) * 64;
            return (
              <>
                <div
                  key={index*Math.random()}
                  className={` w-[237px] h-[44px] px-[16px] py-[11px] absolute  rounded-[8px] flex justify-between `}
                  style={{ background: color, top: `${position}px` }}
                >
                  <div className="flex gap-[10px]">
                    <Image src={item?.image} alt="" width={20} height={20} />
                    <p
                      className={`text-[16px]  ${
                        item?.name == "Frontend Mentor"
                          ? "text-[#333333] "
                          : "text-[#ffffff]"
                      } `}
                    >
                      {item?.name}
                    </p>
                  </div>
                  <FaArrowRight
                    color={
                      item?.name == "Frontend Mentor" ? "#333333" : "#ffffff"
                    }
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className=" bg-transparent  flex flex-col md:w-[808px] w-[343px] " >
           
      <div className="flex flex-1 flex-col w-[100%]  rounded-t-[12px] p-[24px] md:p-[40px] bg-[#ffffff] ">
        <h1 className="text-[24px] md:text-[32px] font-bold text-[#333333] mb-[8px]">
          Profile Details
        </h1>
        <h2 className="text-[16px] text-[#737373] mb-[40px] ">
          Add your details to create a personal touch to your profile.
        </h2>
        <div className="bg-[#fafafa] p-[20px] rounded-[12px] flex flex-col md:flex-row mb-[24px] md:justify-between md:items-center ">
          <h2 className="text-[#737373] text-[16px] mb-[16px] ">
            Profile picture
          </h2>
          <div className="md:flex md:items-center md:gap-[24px]" >
          <div className="w-[193px] h-[193px] bg-[#efebff] rounded-[12px] flex flex-col  items-center justify-center gap-[8px] mb-[24px] md:mb-0 ">
            <IoImageOutline color="#633cff" className="w-[45px] h-[40px]" />

            <p className="text-[#633cff] text-[16px] font-semibold ">
              + Upload Image
            </p>
          </div>

          <p className="text-[12px] text-[#737373] md:max-w-[127px] lg:max-w-[215px] ">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
          </div>
        </div>
        <div className="bg-[#fafafa] p-[20px] rounded-[12px] flex flex-col gap-[12px] ">
          <div className="flex flex-col md:flex-row gap-[4px] md:justify-between  md:items-center ">
            <p className="text-[#333333] md:text-[#737373] md:text-[16px] text-[12px] outline-none">
              FirstName*
            </p>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Ben"
              className="focus:outline-none px-[16px] py-[12px] rounded-[8px] border border-solid border-[#d9d9d9] text-[16px] text-[#333333] "
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[4px] md:justify-between md:items-center ">
            <p className="text-[#333333] md:text-[#737373] md:text-[16px] text-[12px] outline-none">
              Last name*
            </p>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Wright"
              className="focus:outline-none px-[16px] py-[12px] rounded-[8px] border border-solid border-[#d9d9d9] text-[16px] text-[#333333] "
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[4px] md:justify-between md:items-center ">
            <p className="text-[#333333] md:text-[#737373] md:text-[16px] text-[12px]  ">Email*</p>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              placeholder="ben@example.com"
              autoComplete="off"
              className="focus:outline-none px-[16px] py-[12px] rounded-[8px] border border-solid border-[#d9d9d9] text-[16px] text-[#333333] "
            />
          </div>
        </div>
      </div>
      <div className=" p-[16px] border-t border-t-solid border-t-[#d9d9d9] bg-[#ffffff] rounded-b-[12px] md:px-[40px] md:py-[24px] md:flex md:justify-end">
        <button className="rounded-[12px] bg-[#633cff] hover:opacity-50 w-[100%] md:w-auto flex justify-center py-[11px] md:px-[27px] " onClick={Save} >
          <p className="text-[16px] text-[#ffffff] font-semibold ">Save</p>
        </button>
      </div>
      </div>
      </main>
    </>
  );
}

export default Profiledetails;

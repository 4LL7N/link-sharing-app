"use client";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageHeader(){

  const router = useRouter()
  const params = useParams();
  
  
  
  

  const [newParams,setNewParams] = useState<string>("links")

  useEffect(() => {
    if(typeof params.profile == "string")localStorage.setItem("accId",params.profile)
  },[])

  return (
    <>
      <main className="bg-[#fafafa]  pb-[16px] md:pt-[24px] ">
        <header className="flex items-center justify-between py-[16px] pl-[24px] pr-[16px] bg-[#ffffff] rounded-b-[12px] md:rounded-[12px] md:mx-[24px] ">
          <img className="w-[32px] h-[32px] md:w-[146px] " src={typeof window !== "undefined" && window.screen.availWidth < 768?`/images/logo.svg`:"/images/Group 252.png"} onClick={() => router.push(`/`) } />
          <div className="flex">
            <Link
              href={{ pathname: `/${params.profile}/links` }}
              className={` w-[74px] md:w-auto h-[42px] flex  items-center justify-center ${
                newParams != "links" ? "" : "bg-[#efebff]"
              } rounded-[8px] md:py-[11px] md:px-[27px] md:gap-[8px] `}
              onClick={()=> setNewParams("links")}
            >
              <img
                className="w-[25px] h-[25px] "
                src={newParams != "links" ? "/images/links-off.png" : `/images/links.png`}
                alt=""
              />
              <p className={` hidden md:block md:text-[16px] ${ newParams != "links"?"md:text-[#737373]": "md:text-[#633cff]"} md:font-semibold  `} >Links</p>
            </Link>
            <Link
                href={{ pathname: `/${params.profile}/profiledetile` }}
              className={` w-[74px] md:w-auto  h-[42px] flex  items-center justify-center ${
                newParams != "profiledetile" ? "" : "bg-[#efebff]"
              } rounded-[8px] md:py-[11px] md:px-[27px] md:gap-[8px] `}
              onClick={() => {
                setNewParams("profiledetile");
              }}
            >
              <img
                className="w-[25px] h-[25px] "
                src={newParams != "profiledetile" ? "/images/profile-off.png" : "/images/Profile.png"}
                alt=""
              />
              <p className={` hidden md:block md:text-[16px] ${ newParams != "profiledetile"?"md:text-[#737373]": "md:text-[#633cff]"} md:font-semibold  `} >Profile Details</p>
            </Link>
          </div>
          <IconContext.Provider value={{ color: "#633cff" }}>
            <Link href={{ pathname: `/profilepage` }} className=" flex items-center justify-center w-[52px] md:w-auto h-[42px] rounded-[8px] border border-solid border-[#633cff] md:py-[11px] md:px-[27px]  " >
              {typeof window !== "undefined" && window.screen.availWidth >= 768?<p className="text-[16px] text-[#633cff] font-semibold " >Preview</p> : <MdOutlineRemoveRedEye className="w-[20px] h-[20px] " />}
            </Link>
          </IconContext.Provider>
        </header>
        
      </main>
    </>
  );
}

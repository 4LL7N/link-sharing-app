"use client"

import Link from "next/link"

export default function LinkButton({linkProfile,setLinkProfile}:{linkProfile:boolean,setLinkProfile:(linkProfile:boolean)=>void}){
    return(
        <>
            <Link href={{pathname:`$/links`}} className={` w-[74px] h-[42px] flex  items-center justify-center ${linkProfile?"":"bg-[#efebff]"} rounded-[8px] `} onClick={() => {setLinkProfile(false)}} ><img className="w-[25px] h-[25px] " src={linkProfile?"/images/links-off.png":`/images/links.png`} alt="" /></Link>
        </>
    )
}
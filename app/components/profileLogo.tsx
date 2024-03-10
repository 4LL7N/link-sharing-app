"use client"


import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IconContext } from "react-icons";

export default function CheckProfile(){
    return(
    <>
    <IconContext.Provider value={{color:"#633cff"}} >
        <div className=" flex items-center justify-center w-[52px] h-[42px] rounded-[8px] border border-solid border-[#633cff] " ><MdOutlineRemoveRedEye className="w-[20px] h-[20px] " /></div>
    </IconContext.Provider>
    </>
    )
}
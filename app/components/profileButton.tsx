"use client"

export default function ProfileButton({linkProfile,setLinkProfile}:{linkProfile:boolean,setLinkProfile:(linkProfile:boolean)=>void}){
    return(
        <>
        <button className={` w-[74px] h-[42px] flex  items-center justify-center ${!linkProfile?"":"bg-[#efebff]"} rounded-[8px] `} onClick={() => {setLinkProfile(true)}}  ><img className="w-[25px] h-[25px] " src={!linkProfile?"/images/profile-off.png":"/images/Profile.png"} alt="" /></button>
        </>
    )
}
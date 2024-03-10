"use client"


import CheckProfile from "../components/profileLogo"
import LinkButton from "../components/linkButton"
import ProfileButton from "../components/profileButton"
import { useState } from "react"




export default function ProfileLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode,
}){
  
  

  // console.log(bears)
  

    return ( 
    <>
    <main className="bg-[#fafafa] min-h-[100vh] pb-[16px] " >
      <header className="flex items-center justify-between py-[16px] pl-[24px] pr-[16px] bg-[#ffffff] rounded-b-[12px] " >
      <img
          className="w-[32px] h-[32px] "
          src="/images/logo.svg"
        />
        <div className="flex" >
          {/* <LinkButton linkProfile={linkProfile} setLinkProfile={setLinkProfile} />
          <ProfileButton linkProfile={linkProfile} setLinkProfile={setLinkProfile} /> */}
        </div>
        <CheckProfile/>
      </header>
      <section className=" m-[16px]" >
      {children}
      </section>
      </main>
    </>
    )
  }
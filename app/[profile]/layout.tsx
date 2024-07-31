"use client"


// import CheckProfile from "../components/profileLogo"

import ProfileButton from "../components/pageHeader"
import { useState } from "react"
import PageHeader from "../components/pageHeader"
import { useParams } from "next/navigation";




export default function ProfileLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode,
}){
  
  const params = useParams();
  
  // console.log(params)

  // console.log(bears)
  

    return ( 
    <>
    <main className="h-[100vh] flex flex-col  " >
      <PageHeader />
      <section className=" bg-[#fafafa] md:px-[24px] md:py-[24px] flex flex-1 ">{children}</section>
    </main>
    </>
    )
  }
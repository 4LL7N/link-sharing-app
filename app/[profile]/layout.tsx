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
    <PageHeader />
    <section className=" min-h-screen  bg-[#fafafa] px-[24px] md:pt-[24px] ">{children}</section>
    </>
    )
  }
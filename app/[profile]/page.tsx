"use client"

import { useRouter } from 'next/navigation'
import { useEffect } from "react"


export default function ToLink({ params }: { params: { profile: string } }){
    const router = useRouter()

    useEffect(() =>{
    
 
     
        router.push(`${params.profile}/links`, { scroll: false })
      },[])

    return(<>
    </>)
}
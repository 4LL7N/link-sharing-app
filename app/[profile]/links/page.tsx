import NoLink from "@/app/components/noLinks";


export default function profile(){
    

    return(<>
        <div className="flex flex-col w-[100%] min-h-[100%] rounded-t-[12px] p-[24px] bg-[#ffffff] ">
            <h1 className="text-[24px]  font-bold text-[#333333] mb-[8px]" >Customize your links</h1>
            <h2 className="text-[16px] text-[#737373] mb-[40px] " >Add/edit/remove links below and then share all your profiles with the world!</h2>
            <div className="mb-[24px]" >
                <button className="w-[100%] flex justify-center py-[11px] border border-solid border-[#633cff] rounded-[12px] "  >
                    <p className="text-[16px] font-semibold text-[#633cff]  " >+ Add new link</p>
                </button>
            </div>
            <NoLink/>
            
        </div>
        <div className=" p-[16px] border-t border-t-solid border-t-[#d9d9d9] bg-[#ffffff] rounded-b-[12px] " >
                <button className="rounded-[12px] bg-[#633cff] hover:opacity-50 w-[100%] flex justify-center py-[11px] " >
                    <p className="text-[16px] text-[#ffffff] font-semibold " >Save</p>
                </button>
            </div>
    </>)
}
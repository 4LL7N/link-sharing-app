"use client";
import { useEffect, useState } from "react";
import NoLink from "./noLinks";
import { AccStyle, Links, links } from "../style";
import { IoReorderTwoOutline } from "react-icons/io5";
import Select from "react-select";
import Urlinput, { Placeholder } from "./Urlinput";
import { FaArrowRight } from "react-icons/fa6";

function AddLinks() {
  const Links: Links[] = [
    {
      name: "Github",
      image: "/images/LinkIcons/teenyicons_github-solid.svg",
      bg: "#1a1a1a",
    },
    {
      name: "Frontend Mentor",
      image: "/images/LinkIcons/Group 272.svg",
      bg: "#ffffff",
    },
    {
      name: "Twitter",
      image: "/images/LinkIcons/mdi_twitch.svg",
      bg: "#43b7e9",
    },
    {
      name: "LinkedIn",
      image: "/images/LinkIcons/mdi_linkedin.svg",
      bg: "#2d68ff",
    },
    {
      name: "YouTube",
      image: "/images/LinkIcons/ri_youtube-fill.svg",
      bg: "#ee3939",
    },
    {
      name: "Facebook",
      image: "/images/LinkIcons/bi_facebook.svg",
      bg: "#2442ac",
    },
    {
      name: "Twitch",
      image: "/images/LinkIcons/mdi_twitch.svg",
      bg: "#ee3fc8",
    },
    {
      name: "Dev.to",
      image: "/images/LinkIcons/skill-icons_devto-dark.svg",
      bg: "#333333",
    },
    {
      name: "Codewars",
      image: "/images/LinkIcons/cib_codewars.svg",
      bg: "#8a1a50",
    },
    {
      name: "Codepen",
      image: "/images/LinkIcons/ri_codepen-line.svg",
      bg: "#633cff",
    },
    {
      name: "freeCodeCamp",
      image: "/images/LinkIcons/simple-icons_freecodecamp.svg",
      bg: "#302267",
    },
    {
      name: "GitLab",
      image: "/images/LinkIcons/ri_gitlab-fill.svg",
      bg: "#eb4925",
    },
    {
      name: "Hashnode",
      image: "/images/LinkIcons/fa6-brands_hashnode.svg",
      bg: "#0330d1",
    },
    {
      name: "Stack Overflow",
      image: "/images/LinkIcons/cib_stackoverflow.svg",
      bg: "#ec7100 q",
    },
  ];

  
  const [LinksHave, setLinksHave] = useState<links[]>([]);

  const [accdata,setAccData] = useState<AccStyle[]>()
  const [UserAcc,setUserAcc] = useState<AccStyle>()
  
  const [fiveArr,setFiveArr] = useState<Links[]>()

  useEffect(() => {
    let accArr: any = localStorage.getItem("acc");
    accArr ? accArr = JSON.parse(accArr) : null;
    let id = Number(localStorage.getItem("accId"));
    setAccData(accArr)
    const User = accArr?.find((item: AccStyle) => item.id == id);
    setUserAcc(User)
    setLinksHave(User.links);
    let newarr = []
    for(let i=0 ; i<5 ; i++){
      if(User.links[i])newarr.push(User.links[i])
    }

    setFiveArr([...newarr])

  }, []);

  const saveData = () => {
    let id = Number(localStorage.getItem("accId"));
    let accArr:any = accdata?.filter((item:AccStyle) => item.id != id )
    let newUserData:AccStyle = {id:UserAcc?.id,Email:UserAcc?.Email,password:UserAcc?.password,firstName:UserAcc?.firstName,lastName:UserAcc?.lastName,links:[...LinksHave],picture:UserAcc?.picture}
    localStorage.setItem("acc",JSON.stringify([...accArr,newUserData]))
    let newarr = []
    for(let i=0 ; i<5 ; i++){
      if(LinksHave[i])newarr.push(LinksHave[i])
    }

    setFiveArr([...newarr])
  }

  function Remove(index:number) {
    let arr = [...LinksHave]
    let newArr  = []
    for(let i =0 ; i< arr.length ; i++){
      if(i != index){
        newArr.push(arr[i])
      }
    }
    setLinksHave(newArr)
  }


  return (
    <>
    <main className="flex md:gap-[24px] " >
     <div className="hidden lg:flex bg-[#ffffff] w-[560px] h-[100vh] rounded-[12px] justify-center items-center relative " >
          <img src="/images/preview-section.svg" alt="" />
          {
            fiveArr?.map((item,index)=>{
              
              let color:string=item?.bg
              
              let position = 455.5  + (Number(index)*63)
              return(
                <>
                  <div key={index} className={` w-[237px] h-[43px] px-[16px] py-[11px] absolute top-[${position}px] rounded-[8px] flex justify-between `} 
                    style={{background:color,
                    top:`${position}px`}}
                  >
                    <div className="flex gap-[10px]" >
                    <img src={item?.image} alt="" />
                    <p className={`text-[16px]  ${item?.name == "Frontend Mentor" ? "text-[#333333] ":"text-[#ffffff]"} `}>{item?.name}</p>
                    </div>
                    <FaArrowRight color={item?.name == "Frontend Mentor" ?"#333333":"#ffffff"} />
                  </div>
                </>
              )
            })
          }
        </div>
        <div className=" bg-transparent w-[100%]  overflow-hidden " >
      <div className="flex flex-col  w-[100%]  min-h-[100%] md:min-h-screen rounded-t-[12px] p-[24px] md:p-[40px] bg-[#ffffff] ">
        <h1 className="text-[24px] md:text-[32px] font-bold text-[#333333] mb-[8px]">
          Customize your links
        </h1>
        <h2 className="text-[16px] text-[#737373] mb-[40px] ">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </h2>
        <div className="mb-[24px]">
          <button
            className="w-[100%] flex justify-center py-[11px] border border-solid border-[#633cff] rounded-[12px] "
            onClick={() =>
              setLinksHave([...LinksHave,{ name: "", image: "", url: "", bg: "" }])
            }
          >
            <p className="text-[16px] font-semibold text-[#633cff]  ">
              + Add new link
            </p>
          </button>
        </div>
        {!LinksHave ? (
          <NoLink />
        ) : (
          <div className="flex flex-col gap-[24px] mb-[24px] md:mb-[24px] " >
          {LinksHave.map((item, index) => {
            

            const selectHandle = (value:any)=>{
               value?.value? item.name = value?.value : null
               let  findlink = Links.find((item)=> item.name == value.value)
               findlink?.image? item.image = findlink?.image:null
               findlink?.bg ? item.bg = findlink?.bg:null

              
              }

            return (
              <>
                <div key={index} className="p-[20px] bg-[#fafafa] rounded-[12px] flex flex-col gap-[12px] ">
                  <div className="flex justify-between ">
                    <h1 className=" text-[16px] text-[#737373] font-bold flex items-center gap-[8px] ">
                      <IoReorderTwoOutline color="#737373" />
                      Link #{index + 1}
                    </h1>
                    <p className="text-[16px] text-[#737373] " onClick={() => Remove(index)} >Remove</p>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="platform"
                      className="text-[12px] text-[#333333] "
                    >
                      Platform
                    </label>

                    <Select
                    
                      onChange={selectHandle}
                      options={Links.map((items) => {
                        let have = false;
                        for (let i = 0; i < LinksHave.length; i++) {
                          if (LinksHave[i] && LinksHave[i].name && LinksHave[i].name == items.name) {
                            have = true;
                          }
                        }

                        return {
                          value: items.name,
                          label: (
                            <div
                              className={`flex ${
                                have ? "text-[#633cff]" : "text-[#333333]"
                              } gap-[14px] `}
                            >
                              <img
                                src={items.image}
                                alt={items.name}
                                width="20"
                                height="20"
                              />
                              {items.name} {have ? "(selected)" : ""}
                            </div>
                          ),
                        };
                      })}
                      placeholder={<Placeholder item={item} />}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Link"
                      className="text-[12px] text-[#333333] "
                    >
                      Link
                    </label>
                    <div className="flex px-[16px] py-[12px] items-center  border border-solid border-[#d9d9d9] rounded-[8px] overflow-hidden bg-[#ffffff] ">
                      <img
                        src="/images/links-off.png"
                        className="w-[24px] h-[24px] mr-[10px] "
                      />
                      <Urlinput item={item} />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          </div>
        )}
      </div>
      <div className="w-[100%] p-[16px] border-t border-t-solid border-t-[#d9d9d9] bg-[#ffffff] rounded-b-[12px] md:px-[40px] md:py-[24px] md:flex md:justify-end ">
        <button className="rounded-[12px] bg-[#633cff] hover:opacity-50 w-[100%] md:w-auto flex justify-center py-[11px] md:px-[27px] " onClick={saveData} >
          <p className="text-[16px] text-[#ffffff] font-semibold ">Save</p>
        </button>
      </div>
      </div>
      </main>
    </>
  );
}

export default AddLinks;

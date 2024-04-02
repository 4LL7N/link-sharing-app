"use client";
import { InputHTMLAttributes, JSXElementConstructor, useEffect, useRef, useState } from "react";
import NoLink from "./noLinks";
import { AccStyle, Links, links } from "../style";
import { IoReorderTwoOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import Select from "react-select";
import Urlinput, { Placeholder } from "./Urlinput";
import Item from "antd/es/list/Item";

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
  

  useEffect(() => {
    let accArr: any = localStorage.getItem("acc");
    accArr ? accArr = JSON.parse(accArr) : null;
    let id = Number(localStorage.getItem("accId"));
    setAccData(accArr)
    const User = accArr?.find((item: AccStyle) => item.id == id);
    setUserAcc(User)
    setLinksHave(User.links);
    
  }, []);

  const saveData = () => {
    let id = Number(localStorage.getItem("accId"));
    let accArr:any = accdata?.filter((item:AccStyle) => item.id != id )
    let newUserData:AccStyle = {id:UserAcc?.id,Email:UserAcc?.Email,password:UserAcc?.password,firstName:UserAcc?.firstName,lastName:UserAcc?.lastName,links:[...LinksHave],picture:UserAcc?.picture}
    localStorage.setItem("acc",JSON.stringify([...accArr,newUserData]))
    
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
      <div className="flex flex-col lg:flex-row w-[100%] min-h-[100%] md:min-h-screen rounded-t-[12px] p-[24px] md:p-[40px] bg-[#ffffff] ">
        <div className="hidden lg:block bg-[#ffffff] w-[560px] h-[100%] " >
          <img src="/images/preview-section.svg" alt="" />
        </div>
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
          <div className="flex flex-col gap-[24px] " >
          {LinksHave.map((item, index) => {
            

            const selectHandle = (value:any)=>{
               value?.value? item.name = value?.value : null
               let  findlink = Links.find((item)=> item.name == value.value)
               findlink?.image? item.image = findlink?.image:null
               findlink?.bg ? item.bg = findlink?.bg:null

              //  setLinksHave([...LinksHave,{}])
              console.log(LinksHave)
              }

            return (
              <>
                <div className="p-[20px] bg-[#fafafa] rounded-[12px] flex flex-col gap-[12px] ">
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
      <div className=" p-[16px] border-t border-t-solid border-t-[#d9d9d9] bg-[#ffffff] rounded-b-[12px] md:px-[40px] md:py-[24px] md:flex md:justify-end ">
        <button className="rounded-[12px] bg-[#633cff] hover:opacity-50 w-[100%] md:w-auto flex justify-center py-[11px] md:px-[27px] " onClick={saveData} >
          <p className="text-[16px] text-[#ffffff] font-semibold ">Save</p>
        </button>
      </div>
    </>
  );
}

export default AddLinks;

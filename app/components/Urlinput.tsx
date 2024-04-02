import React, { useState } from "react";

function Urlinput({ item }: any) {
  const [url, setUrl] = useState<string>(item.url);

  return (
    <input
      value={url}
      onChange={(e) => {setUrl(e.target.value);item.url = e.target.value}}
      type="text"
      name="Link"
      className=" max-w-[100%] focus:outline-none text-[16px] leading-[24px] "
    />
  );
}

export default Urlinput;



export function Placeholder({item}:any) {
    
    
  return (
    <div className="flex gap-[13.5px]" >
    <img src={item.image} /><p>{item.name}</p>
    </div>
  )
}

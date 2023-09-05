import { CCarouselItem } from "@coreui/react";
import Head from "next/head";
import { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";

function PlateCardGen({ data }) {
  const [plateaddress, setplateaddress] = useState(data.PlateAddress);
  return (
    <CCarouselItem className="text-white  ">
      <div className="relative text-5xl text-white w-screen h-screen flex items-center justify-center">
        <div className="bg-gray-200 border-[10px] border-blue-600 border-solid w-[95%] h-2/3 rounded-xl shadow-xl flex items-center">
          <div className="flex items-center justify-center rounded-full w-36 h-36 border-[9px] border-blue-600 border-solid ml-12 shadow-xl">
            <p className="text-blue-600 text-[6rem] font-bold">
              {data.PlateCode}
            </p>
          </div>
          <div className="h-full w-32  flex items-center flex-col justify-center gap-12 text-[9rem] text-blue-600 font-bold">
            <p>{plateaddress[0]}</p>
            <p>{plateaddress[1]}</p>
          </div>
          <div className="flex justify-between items-center w-[70%]">
            <div className="flex items-center justify-center w-full">
              <p className="text-blue-600 font-bold text-[15rem] ">
                {data.PlateNumber}
              </p>
            </div>
            <div className="h-full w-32  flex items-center flex-col justify-center gap-12 text-[9rem] text-blue-600 font-bold">
              <p className="">{plateaddress[2]}</p>
              <p>{plateaddress[3]}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-8 flex text-3xl font-bold ">
          <p>
            Full Name <b className="underline">{data.OwnerName}</b>
          </p>
        </div>
      </div>
    </CCarouselItem>
  );
}

export default PlateCardGen;

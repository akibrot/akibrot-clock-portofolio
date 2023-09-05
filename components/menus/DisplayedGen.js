import Link from "next/link";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function DisplayedGen({ data, deleteDisplayedhandler }) {
    const [deletemodel, setdeletemodel] = useState(false)
    return (
        <div className="bg-[#E4EEF2] w-full relative  h-12 rounded flex items-center  my-2 justify-between">
            <div className="flex items-center  pl-4 gap-3 w-full">
                <div className="w-[27%]"><p>{data.OwnerName}</p></div>
                <div><p>code <b className="underline">{data.PlateCode}</b></p></div>

                <div className="w-[12%]"><p>PL.No <b className="underline ">{data.PlateNumber}</b></p></div>
                <div className="w-[17%]"><p>PL.Address <b className="underline ml-2">{data.PlateAddress}</b></p></div>
                <div><p>Vehicle <b className="underline ml-2">{data.VehicleType}</b></p></div>

            </div>
            <div className="flex items-center gap-2 ">
                <Link href={`/updatedisplayedplate/${data._id}`}><FaEdit className="cursor-pointer" /></Link>
                <FaTrash className="text-red-600 mr-2 cursor-pointer" onClick={() => setdeletemodel(!deletemodel)} />
            </div>
            <div className={deletemodel ? "fixed top-0 left-0 w-screen h-screen z-10 flex items-center gap-3 justify-center bg-black/40 " : "hidden"}>
                <div className=" h-10 bg-red-600 cursor-pointer text-white rounded w-fit content-center items-center flex px-2 " onClick={() => deleteDisplayedhandler(data._id)}><p>Delete</p></div>
                <div className="w-fit px-2 flex items-center text-white rounded h-10 bg-green-500 cursor-pointer" onClick={() => setdeletemodel(false)}>Close</div>
            </div>
        </div>
    );
}

export default DisplayedGen;

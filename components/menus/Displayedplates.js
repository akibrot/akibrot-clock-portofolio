import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import File from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../lib/Redux/refSlice";
import urlbackend from "../../lib/utils/BackendUrl";
import DisplayedGen from "./DisplayedGen";
const DisplayedPlates = ({ selected }) => {
  //data
  const [datas, setdata] = useState([]);
  const { refreshHandler } = useSelector((state) => state.refresh);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(urlbackend + "/getallplates")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {});
  }, [refreshHandler]);
  const deleteDisplayedhandler = (e) => {
    // console.log(e);

    axios
      .post(urlbackend + "/deleteplate", { _id: e })
      .then((res) => {
        dispatch(refresh());
      })
      .catch((err) => {});
  };
  return (
    <div
      className={
        selected == 2
          ? "relative left-[20%] h-full w-[80%] flex flex-col"
          : "hidden"
      }
    >
      <div className="w-full py-5 flex items-center justify-center text-[#828181b0] font-bold text-xl shadow-sm center">
        Displayed Plates
      </div>
      <div className="flex">
        <div className=" w-full flex flex-col items-center justify-center mt-8 mx-6 ">
          {datas.map((e) => (
            <DisplayedGen
              key={e._id}
              data={e}
              deleteDisplayedhandler={deleteDisplayedhandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DisplayedPlates;

import React, { useEffect, useState } from "react";
import Legends from "../components/ClockMenus/Legends";
import AboutMe from "../components/ClockMenus/AboutMe";
import AOS from "aos";
import "aos/dist/aos.css";
import MyProjects from "../components/ClockMenus/MyProjects";
import TechSkills from "../components/ClockMenus/TechSkills";
import ContactMe from "../components/ClockMenus/ContactMe";
function index() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const [visible, setvisible] = useState(4)
  const [clockNav, setClockNav] = useState("6 : 152")
  const [hour, setHour] = useState()
  const [minute, setMinute] = useState()
  const clockNaveHandler = (e) => {
    setClockNav(e)
  }
  useEffect(() => {
    switch (clockNav) {
      case "12 : 30": setvisible(0); break;
      case "6 : 30": setvisible(1); break;
      case "6 : 00": setvisible(2); break;
      case "6 : 15": setvisible(3); break;
      case "6 : 152": setvisible(4); break;

    }

  }, [clockNav])
  return <div className="flex  h-screen bg-[#da7baa33]">
    <div className=" flex-[4] flex items-center justify-center ">
      {/* container */}
      <div data-aos="fade-up" className="w-[19rem] h-[19rem] rounded-full relative bg-white /bg-gray-200/20 hover:cursor-pointer flex items-center justify-center ">
        <div onClick={() => setClockNav("12 : 30")} className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl ">9</div>
        <div onClick={() => setClockNav("6 : 30")} className="absolute right-0 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl">3</div>
        <div onClick={() => setClockNav("6 : 00")} className="absolute top-0 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl">12</div>

        <div onClick={() => setClockNav("6 : 15")} className="absolute bottom-0 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl">6</div>
        {/* clock arrow */}
        <div className="w-[12rem] h-[12rem] rounded-full  border-dotted border-2">

        </div>
        {/* <div className="bg-black w-1 h-[calc(50%-38px)] top-10 absolute"></div> */}
        {/* <div className="bg-black w-[calc(50%-12.5%)] h-1 right-10 absolute animatemin"></div> */}
        <div className="bg-black/0 w-4/5 h-1 absolute  animatesecond ">
          <div className="bg-black h-full w-1/2 relative"></div>
        </div>
        {/* minut animation */}
        <div className="bg-black/0 w-[62%] h-[0.25rem] absolute  animatemin ">
          <div className="bg-black h-full w-1/2 relative"></div>
        </div>
        {/*  */}
        <div className="bg-black/0 w-[0.35rem] h-1/2 absolute top-[5.8rem] animatehour  ">
          <div className="bg-black h-[40%] w-full  relative"></div>
        </div>
      </div>

    </div>
    <Legends visible={visible} />
    <AboutMe visible={visible} />
    <MyProjects visible={visible} />
    <TechSkills visible={visible} />
    <ContactMe visible={visible} />
    <div></div>
  </div>;
}

export default index;

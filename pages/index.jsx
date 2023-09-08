import React, { useEffect, useState } from "react";
import Legends from "../components/ClockMenus/Legends";
import AboutMe from "../components/ClockMenus/AboutMe";
import AOS from "aos";
import "aos/dist/aos.css";
import MyProjects from "../components/ClockMenus/MyProjects";
import TechSkills from "../components/ClockMenus/TechSkills";
import ContactMe from "../components/ClockMenus/ContactMe";
import SocialLinks from "../components/ClockMenus/SocialLinks";
import Head from "next/head";
function index() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const [visible, setvisible] = useState(0)
  const [clockNav, setClockNav] = useState("1215")
  const [hour, setHour] = useState(12)
  const [hourClass, setHourClass] = useState("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem]   ")
  const [minuteClass, setMinuteClass] = useState("bg-black/0 w-[62%] h-[0.25rem] absolute  animatemin ")
  const [minute, setMinute] = useState()
  const clockNaveHandler = (e) => {
    setClockNav(e)
  }
  useEffect(() => {
    switch (hour) {
      case 1: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem]  rotate-[120deg] animatehour1"); break;
      case 2: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] rotate-[150deg] animatehour2 "); break;
      case 3: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[180deg] animatehour3"); break;
      case 4: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[210deg] animatehour4"); break;
      case 5: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[240deg] animatehour5"); break;
      case 6: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[270deg] animatehour6"); break;
      case 7: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[297deg] animatehour7"); break;
      case 8: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[326deg] animatehour8"); break;
      case 9: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[360deg] animatehour9"); break;
      case 10: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[30deg] animatehour10"); break;
      case 11: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-[60deg] animatehour11"); break;
      case 12: setHourClass("bg-black/0 w-[35%] h-[0.2rem] absolute top-[9.4rem] animatehour rotate-90 animatehour12"); break;
    }

    switch (minute) {
      case 12: setMinuteClass("bg-black/0 w-[62%] h-[0.25rem] absolute  animatemin12  rotate-90"); break;
      case 9: setMinuteClass("bg-black/0 w-[62%] h-[0.25rem] absolute  animatemin9  rotate-[360deg]"); break;
      case 6: setMinuteClass("bg-black/0 w-[62%] h-[0.25rem] absolute  animatemin6   rotate-[270deg]"); break;
      case 3: setMinuteClass("bg-black/0 w-[62%] h-[0.25rem] absolute  animatemin3   rotate-[180deg]"); break;

    }
  }, [hour, minute])
  useEffect(() => {
    // <Legends 
    // <AboutMe 
    // <MyProjects 
    // <TechSkills 
    // <ContactMe 
    if (hour + minute == 15) {
      setvisible(0)
    }
    else if (hour + minute == 18) {
      setvisible(1)
    }
    else if (hour + minute == 11) {
      setvisible(2)
    }
    else if (hour + minute == 13) {
      setvisible(3)
    }
    else if (hour + minute == 14) {
      setvisible(4)
    }
    else if (hour + minute == 17) {
      setvisible(5)
    }


  }, [clockNav, minute, hour])
  // const [cheat, setOpenCheat] = useState(false)
  return <div className="flex  h-screen bg-[#da7baa33] relative z-10">
    <Head>
      <title>Akibrot-samuel clock portofolio</title>
    </Head>
    <div className=" flex-[4] flex items-center justify-center  relative ">
      <div className="rounded-full absolute h-8 w-16 cursor-pointer bg-black z-20   flex items-center justify-center bottom-7 opacity-20 hover:opacity-70 duration-300 hover:w-20 hover:text-white  left-10 text-black" title="cheat">+=15</div>

      {/* <div className="rounded-full h-8 w-16 bg-white/5 opacity-20   absolute flex items-center justify-center top-[4.5rem] rotate-0 right-48 text-gray-400" title="cheat">33:33</div>
      <div className="rounded-full h-8 w-16 bg-white/5 opacity-20 absolute
       flex items-center justify-center top-[18rem] rotate-90 right-[-8px] text-gray-400" title="cheat">11:11</div>
      <div className="rounded-full h-8 w-16 bg-white/5 opacity-20 absolute flex items-center justify-center bottom-[18rem] rotate-90 left-[-15px] text-gray-400" title="cheat">11:11</div>
      <div className="rounded-full h-8 w-16 bg-white/5 opacity-20 absolute flex items-center justify-center top-[8rem] rotate-[-45deg] left-10 text-gray-400" title="cheat">12:30</div>
      <div className="rounded-full h-8 w-16 bg-white/5 opacity-20 absolute flex items-center justify-center bottom-[7rem] rotate-[-45deg] right-14 text-gray-400" title="cheat">32:30</div>
      <div className="rounded-full h-8 w-16 bg-white/5 opacity-20  absolute flex items-center justify-center top-[8rem] rotate-45 right-14 text-gray-400" title="cheat">5:5</div>
      <div className="rounded-full h-8 w-16 bg-white/5 opacity-20 absolute flex items-center justify-center bottom-[7rem] rotate-45 left-10 text-gray-400" title="cheat">9:30</div>
      <div className="rounded-full h-8 w-16 bg-white/5 opacity-20 absolute flex items-center justify-center bottom-[4.5rem] rotate-0 right-48 text-gray-400" title="cheat">00:30</div> */}

      {/*hour container */}
      <div data-aos="fade-up" className="w-[19rem] h-[19rem] rounded-full relative bg-white    flex items-center justify-center ">
        <div onClick={() => setHour(1)} className="absolute right-16 top-5 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">{/**1 */}</div>
        <div onClick={() => setHour(2)} className="absolute right-5 top-16 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">{/**2 */}</div>
        <div onClick={() => setHour(3)} className="absolute right-0 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer">3</div>
        <div onClick={() => setHour(4)} className="absolute right-5 bottom-[4.3rem] w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">{/**4 */}</div>
        <div onClick={() => setHour(5)} className="absolute right-16 bottom-[1.2rem] w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">{/**5 */}</div>
        <div onClick={() => setHour(6)} className="absolute bottom-0 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer">6</div>
        <div onClick={() => setHour(7)} className="absolute left-16 bottom-5 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">{/**7 */}</div>
        <div onClick={() => setHour(8)} className="absolute left-5 bottom-16 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">{/**8 */}</div>
        <div onClick={() => setHour(9)} className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">9</div>
        <div onClick={() => setHour(10)} className="absolute left-5 top-[4.3rem] w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">{/**10 */}</div>
        <div onClick={() => setHour(11)} className="absolute left-16 top-[1.2rem] w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer ">{/**11 */}</div>
        <div onClick={() => setHour(12)} className="absolute top-0 w-12 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer">12</div>

        {/* minute controller */}
        <div onClick={() => setMinute(12)} className="absolute top-12 w-12 h-8 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer "></div>
        <div onClick={() => setMinute(3)} className="absolute right-12 w-8 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer "></div>
        <div onClick={() => setMinute(6)} className="absolute bottom-12 w-12 h-8 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer "></div>
        <div onClick={() => setMinute(9)} className="absolute left-12 w-8 h-12 rounded-full flex items-center justify-center font-bold opacity-80 text-3xl hover:cursor-pointer "></div>


        {/* clock arrow */}
        <div className="w-[12rem] h-[12rem] rounded-full  border-black/20 border-2">

        </div>
        <div className="bg-black/0 w-4/5 h-1 absolute  animatesecond ">
          <div className="bg-black h-full w-1/2 relative"></div>
        </div>
        {/* minut animation */}
        <div className={minuteClass}>
          <div className="bg-black/20 h-full w-1/2 relative"></div>
        </div>
        {/*  */}
        <div className={hourClass} >
          <div className="bg-black h-full w-1/2  relative"></div>
        </div>
      </div>

    </div>
    {/* <div className={cheat ? " h-screen w-32 bg-black/60 shadow-md flex-col text-white font-light  absolute top-0 right-0 animatecheat flex items-center justify-center" : "duration-75 bottom--16 hidden"} title="cheat">
      <div>12:30</div>
      <div>12:30</div>
      <div>12:30</div>
      <div>12:30</div>
      <div>12:30</div>
      <div>12:30</div>
    </div> */}

    <Legends visible={visible} />
    <AboutMe visible={visible} />
    <MyProjects visible={visible} />
    <TechSkills visible={visible} />
    <ContactMe visible={visible} />
    <SocialLinks visible={visible} />
    <div></div>
  </div>;
}

export default index;

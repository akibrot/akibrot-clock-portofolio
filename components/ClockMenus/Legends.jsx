import React, { useEffect } from 'react'
function Legends({ visible }) {

    return (
        <div className={visible == 0 ? " flex-[7] flex flex-col relative fadeup  " : "hidden "}>
            <div className="h-[12%]"></div>
            <h1 className="text-3xl font-bold opacity-70 pb-4">Legends</h1>
            <p className='pr-40 pl-1 font-light'>This is the time machine !!! yes ... it can take you through the univerce . you just need to provide the co-ordinates through the clock. There are six (6) known co-ordinates that we now the destinations  . dont mess with the time it may take you to the unknown univerce !!! </p>

            <div className='flex w-full flex-wrap gap-6 top-7 relative pl-1 pr-10 '>
                {
                    linksDatas.map((e) => <div key={e.id} className='bg-white w-[12rem] flex items-center justify-center px-10 flex-col py-8 font-light text-md'>{e.title} <p> {e.clock}</p></div>)
                }
            </div></div>

    )
}

export default Legends

export const linksDatas = [
    {
        id: 0,
        title: "About Me",
        clock: "12 : 30"
    }, {
        id: 1,
        title: "My projects",
        clock: "6 : 45"
    },
    {
        id: 2,
        title: "Tech Stacks",
        clock: "7 : 10"
    },
    {
        id: 3,
        title: "Write Me",
        clock: "12 : 60"
    }, {
        id: 4,
        title: "Social Links",
        clock: "9 : 60"
    },
    {
        id: 5,
        title: "Toggel Nav ",
        clock: "9 : 60"
    },

] 
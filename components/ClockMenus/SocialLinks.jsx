import React, { useEffect } from 'react'
function SocialLinks({ visible }) {

    return (
        <div className={visible == 5 ? " flex-[7] flex flex-col relative fadeup  " : "hidden "}>
            <div className="h-[12%]"></div>
            <h1 className="text-3xl font-bold opacity-70 pb-4">Social Links</h1>
            <p className='pr-40 pl-1 font-light'>This is the time machine !!! yes ... it can take you through the univerce . you just need to provide the co-ordinates through the clock. There are six (6) known co-ordinates that we now the destinations  . dont mess with the time it may take you to the unknown univerce !!! </p>

            <div className='flex w-full flex-wrap gap-6 top-7 relative pl-1 pr-10 '>
                {
                    linksDatas.map((e) => <div key={e.id} className='bg-white w-[12rem] flex items-center justify-center px-10 flex-col py-8 font-light text-md'>{e.title} <p> {e.link}</p></div>)
                }
            </div></div>

    )
}

export default SocialLinks

export const linksDatas = [
    {
        id: 0,
        title: "Youtube",
        link: "subscribe"
    }, {
        id: 1,
        title: "Github",
        link: "view"
    },
    {
        id: 2,
        title: "LinkedIn",
        link: "10 : 3"
    },
    {
        id: 3,
        title: "Telegram",
        link: "join"
    }, {
        id: 3,
        title: "Portofolio",
        link: "join"
    },
    {
        id: 3,
        title: "Telegram Bot",
        link: "join"
    },

] 
import React, { useEffect } from 'react'
function MyProjects({ visible }) {

    return (
        <div className={visible == 2 ? " flex-[7] flex flex-col relative fadeup  " : "hidden "}>
            <div className="h-[12%]"></div>
            <h1 className="text-3xl font-bold opacity-70 pb-4">My Projects</h1>
            <p className="pr-40 pl-1 font-light">
                I have seccessfully designed and deployed multiple mobile
                applications, desktop softwares ,Ui-Ux design, web applications
                , apis with latest technologies . I
                already displayed my major projects bellow for more informations
                check out my github page at <b>12:45</b>

            </p>
            <div className='flex w-full flex-wrap gap-6 top-7 relative pl-1 pr-10 '>
                {
                    linksDatas.map((e) => <div key={e.id} className='bg-white w-[12.5rem] rounded cursor-pointer  h-[20rem] '></div>)
                }
            </div></div>

    )
}

export default MyProjects

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
        id: 4,
        title: "Social Links",
        clock: "9 : 60"
    },


] 
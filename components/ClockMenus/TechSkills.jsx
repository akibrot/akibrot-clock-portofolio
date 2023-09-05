

import React, { useEffect } from 'react'
import react from '../../public/react.svg'
import next from '../../public/Nextjs-logo.svg'
import node from '../../public/node.png'
import mongo from '../../public/mongo.png'
import sql from '../../public/SQL.png'
import electron from '../../public/icon.ico'
import flutter from '../../public/flutter.png'
import mysql from '../../public/more.png'
import express from '../../public/express.png'
import Image from 'next/image'
function TechSkills({ visible }) {
    const data = [
        {
            title: 'Reactjs',
            imgurl: react
        },
        {
            title: 'Nextjs',
            imgurl: next
        }, {
            title: 'electron',
            imgurl: electron
        }, {
            title: 'flutter',
            imgurl: flutter
        },
        {
            title: 'Nodejs',
            imgurl: node
        }, {
            title: 'express',
            imgurl: express
        },
        {
            title: 'Mongodb',
            imgurl: mongo
        },

        {
            title: 'sql',
            imgurl: sql
        }, {
            title: 'tailwind css , java ,c++ ',
            imgurl: mysql
        },
        {
            title: 'LINUX',
            imgurl: sql
        },
        {
            title: 'github',
            imgurl: sql
        },
        {
            title: 'typscript',
            imgurl: sql
        }, {
            title: 'uiux-figma',
            imgurl: sql
        },
        {
            title: 'tailwind-css',
            imgurl: sql
        }, {
            title: 'firebase',
            imgurl: flutter
        },

    ]

    return (
        <div className={visible == 3 ? " flex-[7] flex flex-col relative fadeup  " : "hidden "}>
            <div className="h-[12%]"></div>
            <h1 className="text-3xl font-bold opacity-70 pb-4">Tech Skills</h1>
            <p className='pr-40 pl-1 font-light'>I am familier with legacy developmet tools and the newest onece and always learning new trending technologies. most of my favorite tools are shown bellow. </p>

            <div className='flex w-full flex-wrap gap-6 top-7 relative pl-1 pr-20 '>
                {
                    data.map((e) =>
                        <div key={e.title} title={e.title} className=" sm:w- sm:h-[6rem] w-[6.5rem]  rounded hover:scale-105 duration-300  bg-white flex items-center justify-center">
                            <Image src={e.imgurl} width={90} height={90} alt="image" />
                        </div>

                    )
                }
            </div></div>

    )
}

export default TechSkills

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
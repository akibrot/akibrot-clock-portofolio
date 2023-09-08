import React, { useEffect } from 'react'
function ContactMe({ visible }) {

    return (
        <div className={visible == 4 ? " flex-[7] flex flex-col  relative fadeup  " : "hidden hideup "}>
            <div className="h-[12%]"></div>
            <h1 className="text-3xl font-bold opacity-70 pb-2">Write Me</h1>
            <p className='pr-40 pl-1 font-light'>I know redirecting to the native applications sucks . You can simply send me a message through this form or go to <b>9:15</b>.  </p>

            <div className=' w-full flex-wrap gap-6 top-2 relative pl-1 pr-10 left-[3.7rem] '>
                <div className='bg-white px-2 w-2/3 h-10 flex items-center my-3'><input type="email" name="" id="" placeholder='email' className='outline-none w-full' /></div>
                <div className='w-2/3 bg-white' ><textarea name="" id="" cols="40" rows="10" placeholder='message' className='outline-none px-2 pt-1
                '></textarea></div>
                <div className='bg-white w-2/3 mt-3 h-10 flex items-center justify-center'>
                    <button type="submit">send</button>

                </div>
            </div></div>

    )
}

export default ContactMe

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
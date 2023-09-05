import React, { useEffect } from 'react'
function ContactMe({ visible }) {

    return (
        <div className={visible == 4 ? " flex-[7] flex flex-col relative fadeup  " : "hidden "}>
            <div className="h-[12%]"></div>
            <h1 className="text-3xl font-bold opacity-70 pb-4">Contact Me</h1>
            <p className='pr-40 pl-1 font-light'>I know redirecting to the native applications sucks . You can simply send me message through this form . </p>

            <div className=' w-full flex-wrap gap-6 top-7 relative pl-1 pr-10 '>
                <div><input type="email" name="" id="" placeholder='email' className='' /></div>
                <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
                <button type="submit">send</button>
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
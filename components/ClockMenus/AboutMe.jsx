import React from 'react'

function AboutMe({ visible }) {
    return (
        <div className={visible == 1 ? " flex-[7] flex flex-col relative fadeup " : "hidden"}>
            <div className="h-[12%]"></div>
            <h1 className="text-3xl font-bold opacity-70 pb-4">About Me</h1>
            <p className='pr-40 pl-1 font-light'>Hello ! My name is <b>Akibrot Samuel</b> I am from <u>Addis Ababa , Ethiopia.</u>  I am a Full-stack software developer . I gratuated from Jimma univerity institute of technology in Aug 2022 G.C with bachlors of science in <b>computer science</b> ( BSC )  having  <b>CGPA of 3.58.</b> </p><br />
            <p className='pr-40 pl-1 font-light'>I am Solution-oriented hard worker, problem solver,responsible,confident ,adaptable to all
                challenging situations with multiple skills . I built and maintained multiple web and mobile
                applications . Highly skilled in problem solving ,communication, collaboration, and Time Management. </p>
            <br />
            <p className='pr-40 pl-1 font-light'>For furture information you can easly see my CV bellow or contact me directrly through these numbers. </p><br />
            <p className='pr-40 pl-1 font-light'>+251934680311</p>
            <p className='pr-40 pl-1 font-light'>+251934680311</p>
            <div className='flex pl-1  gap-8 mt-5'>
                <div className='py-2 bg-white px-3'>Download cv</div>
                <div className='py-2 bg-white px-3'>Hire me</div>
            </div>
        </div>
    )
}

export default AboutMe
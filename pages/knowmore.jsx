import React from 'react'
import About from '../Components/About'
import Navbar from '../Components/Navbar'
import SideIcons from '../Components/SideIcons'
import Weapons from '../Components/Weapons'
import WhyMe from '../Components/WhyMe'

const aboutmore = () => {
  return (
    <>
     <head>
      <title>About - Vaibhav-Rajpoot</title>
    </head>
        <Navbar />
        <div className='h-screen justify-center flex flex-col items-center gap-40'>

        <div className="about-section">
             <div className="about-main-heading">
                 <h1 className="about-heading">&lt;About /&gt;</h1>
                 <h1 className=" name-heading font-black" style={{width:820}}>Vaibhav Rajpoot</h1>
             </div>
         </div>
         <div className='relative right-80 sm:ml-40'>
             <p className='pb-8 text-4xl text-green-400 font-semibold'>About Me</p>
            <p className='text-4xl text-gray-400'>I am a Front-end creative developer based in Barielly, India. I am a <br/> Computer Science undergraduate from Chandigarh University and<br/> also did some coursework in Designing and Visual Arts.</p>
            <br/>
            <p className='pb-8 text-4xl text-gray-400'>I enjoy using my skill-set to empower people to accomplish their <br/>goals. My development stack is focused on performance &<br/> accessibility with delightful interactions. I create lighting fast<br/> WebApps and Websites using <span className='text-green-400 font-black'>MERN</span> Stack with the help of NextJS.</p>
            <p className='text-3xl pb-5 text-green-400 font-bold'>Want to know more?</p>
         </div>
    </div>
    <SideIcons />   
        <div className='h-screen justify-center flex flex-col items-center gap-40'>

        <div className="about-section">
             <div className="about-main-heading">
                 <h1 className="about-heading">&lt;toolbox /&gt;</h1>
                 <h1 className=" name-heading font-black" style={{width:680}}>Weapons ⚔️</h1>
             </div>
         </div>
         <div className='relative right-96 sm:ml-40'>
             <p className='text-4xl text-green-400 font-semibold'>Technologies that I use</p>
         </div>
         </div>
       
        <div className='flex flex-row gap-6 justify-center'>
        <Weapons 
        image = "/Img/download.png"
        name = "JS  "
        />
        <Weapons 
        image = "/Img/html-1.svg"
        name = "HTML"
        />
        <Weapons 
        image = "/Img/css.png"
        name = "CSS"
        />
        <Weapons 
        image = "/Img/react.svg"
        name = "REACT"
        />
        <Weapons 
        image = "/Img/tailwind.png"
        name = "TAILWIND"
        />
        <Weapons 
        image = "/Img/next-js.png"
        name = "NEXT-JS"
        />
        <Weapons 
        image = "/Img/netlify.png"
        name = "NETLIFY"
        />
        <Weapons 
        image = "/Img/vercel.png"
        name = "VERCEL"
        />
        </div>

        <WhyMe />
        <div className='mt-20 flex flex-col justify-center items-center'>
            <p className='text-2xl text-gray-400 font-semibold'>Designed and Developed with 💖</p>
            <br/>
            
            <p className='text-2xl text-gray-400 font-black'>by Vaibhav Rajpoot</p>

            <br/>
        </div>
    
    </>
  )
}

export default aboutmore
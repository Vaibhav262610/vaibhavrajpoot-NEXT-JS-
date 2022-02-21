import React from 'react'
import Boxes from './Boxes'

const Work = () => {
  return (
    <>
    <div className='justify-center flex flex-col items-center gap-20 mt-40'>
        <div className="about-section">
             <div className="about-main-heading">
                 <h1 className="about-heading">&lt;Work /&gt;</h1>
                 <h1 className=" name-heading font-black " style={{width:870}}>Featured Projects</h1>
             </div>
         </div>
         <div className='work relative right-40 sm:ml-40'>
             <p className="pb-8 text-4xl text-green-400 font-semibold">Some Selected Projects</p>
         </div>
             <div className='boxes grid grid-rows-4 grid-flow-row gap-14 sm:grid-flow-col'>
                 <Boxes 
                  ProjectName = "Replit"
                  image = '/Img/replit.png'
                 />
                 <Boxes 
                  ProjectName = "Log-In Page"
                  image= '/Img/chrome_On5UWtos7f.png'
                />
                  <Boxes 
                   ProjectName = "Portfolio Website"
                   image= '/Img/chrome_UUWRt1wF2S.png'
                 />
                 <Boxes 
                  ProjectName = "Portfolio Website"
                  image= '/Img/chrome_rwgM0iXNYu.png'
                />
                 <Boxes 
                  ProjectName = "Portfolio Website"
                  image= '/Img/portfolio.png'
                  />
                  <Boxes 
                   ProjectName = "Portfolio Website"
                   image= '/Img/chrome_mIA100o9RG.png'
                   />
                 <Boxes 
                  ProjectName = "Todo-App"
                  image= '/Img/portfolio.png'
                />
                 <Boxes 
                  ProjectName = "Todo-App"
                  image= '/Img/portfolio.png'
                 />
             </div>
             <div className='work-btn'>
             <button className='resume-btn hover:text-white' >View More</button>
             </div>
    </div>
    </>
  )
}

export default Work
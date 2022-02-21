import React from 'react'
import Link from 'next/link'
import Contact from '../pages/contact'
const Header = () => {
    const greaterThan = "<"
  return (
    <>
    <div className='flex flex-col items-center ml-96 sm:ml-20 sm:pl-20  '>
      <div className='main h-screen flex flex-col justify-center'>
          <h2 className='text-4xl text-green-400'>👋 Hi, I am</h2>
          <h1 className=' pt-3 text-9xl font-bold'>Vaibhav Rajpoot</h1>
          <h1 className='head-text w-5/6 pt-14 text-8xl text-gray-400 font-semibold'>I speak in <span className=" text-yellow-400">{greaterThan}code /&gt; </span> so you don't have to</h1>
          <p className='main-para pt-10 text-4xl text-gray-400'>I'm a <span className='text-gray-400 font-bold'>Front-End Developer</span> based in Barielly, India specializing in <br/> building exceptional digital experiences. I enjoy using my skill-set to <br/> empower people to accomplish their goals.</p>
          <div className='flex pt-10 gap-5'>
            <Link href='/contact'>
              <button className='contact-btn hover:text-white' >Contact Now</button>
            </Link>
            <a href='https://github.com/Vaibhav262610' target='_blank' >
              <button className='github-btn hover:text-white' >Github</button>
            </a>
          </div>
              
      </div>
    </div>
    </>
  )
}

export default Header
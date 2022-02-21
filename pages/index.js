import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import About from '../Components/About'
import Work from '../Components/Work'
import WhyMe from '../Components/WhyMe'
import Footer from '../Components/Footer'
import SideIcons from '../Components/SideIcons'

export default function Home() {
  return (
    <>
    <head>
      <title>Vaibhav-Rajpoot</title>
    </head>
      <Navbar />
      <SideIcons />
      <Header />
    <div className='h-screen'>
      <About />
    </div>
      <Work />
      <WhyMe />
      <Footer />
    </>
  )
}

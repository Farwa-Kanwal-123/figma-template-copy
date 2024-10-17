import React from 'react'
import Main from '../components/Main'
import About from '../components/About'
import Info from '../components/Info'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Main/>
      <About/>
      <Info/>
      <Blogs/>
      <div className='my-[187px]'></div>
      <Footer/>
    </main>

  )
}

export default Home
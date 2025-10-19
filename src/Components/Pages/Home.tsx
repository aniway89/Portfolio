import About from '../Elements/About'
import Achivements from '../Elements/Achivements'
import Blog from '../Elements/Blog'
import Highlights from '../Elements/Highlights'

import Profile from '../Elements/Profile'
import Technology from '../Elements/Technology'

import { Component } from '../Elements/Timeline_section'

function Home() {
  return (
    <div className="Homie flex-col ">

        <Profile/>
 
        <div className="Technology-title text-2xl font-normal mt-15 mb-8">
            Technology
        </div>
        <Technology/>
        {/* Projects are remaind */}
        <Component/>
        <About/>  
        <Blog/>  
        <Achivements/>
        <Highlights/>
     
        
    </div>
  )
}

export default Home

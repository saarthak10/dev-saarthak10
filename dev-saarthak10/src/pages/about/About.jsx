import React from 'react'
import passportPhoto from "../../assets/passportSize.jpg";


const About = () => {



  return (
    <div class= "mx-auto max-w-7xl py-24">

      <div class="flex justify-center">
        <div class=" bg-gray-200 rounded-lg">
        <p class="px-5 py-1">About me</p>
        </div>
      </div>

      <div class="px-8 pt-12 flex gap-12 justify-evenly items-center">
        <div>
           <img  src={passportPhoto} 
                  class="shadow-[-20px_20px_0] shadow-gray-200"               
                  />
        </div>
        <div>
          <h1 class="text-4xl"> Curious about me ? Here you have it:</h1>
          <p class="pt-6">
               I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). 
               I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to me.
          </p>
          <p class="pt-4">
               I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). 
               I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design,
               and writing clear, readable, highly performant code matters to me.
          </p>
          <p class="pt-4">
               I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). 
               I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design,
               and writing clear, readable, highly performant code matters to me.
          </p>
          <p class="pt-4">
               I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). 
               I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design,
               and writing clear, readable, highly performant code matters to me.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
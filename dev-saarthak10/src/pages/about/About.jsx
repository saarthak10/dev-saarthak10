import React from 'react'
import passportPhoto from "../../assets/passportSize.jpg";


const About = ({theme, ref}) => {



  return (
    <div class= "mx-auto max-w-7xl py-16 md:py-24" ref={ref} id="about">

      <div class="flex justify-center">
        <div class=" bg-gray-200 rounded-lg">
        <p class="px-5 py-1">About me</p>
        </div>
      </div>

      <div class="px-8 pt-12 flex flex-col md:flex-row gap-12 justify-evenly items-center">
        <div>
           <img  src={passportPhoto} 
        class={`shadow-[-10px_10px_0_#e5e7eb] dark:shadow-[-10px_10px_0_#374151]  ${theme === 'dark'? 'md:shadow-[-10px_10px_0_#374151] ':'md:shadow-[-10px_10px_0_#e5e7eb]' }`}
                  />
        </div>
        <div>
          <h1 class="text-2xl md:text-4xl dark:text-white"> Curious about me ? Here you have it:</h1>
          <p class="pt-6 text-justify dark:text-white">
               I'm a self-driven developer passionate about building seamless digital experiences across both web and mobile platforms. With 4.3 years of experience, I specialize in developing applications using React.js, JavaScript, React Native, and Android (Kotlin).
          </p>
          <p class="pt-4 text-justify dark:text-white">
               My journey into development began with a strong curiosity about how things work behind the screen — which quickly turned into a full-fledged career. I hold a degree
                in Computer Science from Baddi University of Emerging Sciences and Technologies, where I built a strong foundation in software engineering principles and problem-solving.Over the years, I've evolved from building
                simple interfaces to architecting scalable, high-performance applications that focus equally on usability and performance.
          </p>
          <p class="pt-4 text-justify dark:text-white">
               I care deeply about writing clean, modular code. I follow Clean Architecture and adhere to SOLID principles to ensure that the systems I build are robust, testable, and easy to maintain as they scale.
                My focus is on delivering intuitive frontends and seamless mobile experiences that integrate smoothly with modern backends.
          </p>
          <p class="pt-4 text-justify dark:text-white">
               From ideation to deployment, I enjoy being part of the entire product lifecycle — whether it’s
              sketching out early prototypes, refining user flows, or launching polished features that users love.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
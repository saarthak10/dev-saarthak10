import React from 'react'
import javascriptIcon from '../../assets/images/javascript_icon.svg'
import reactIcon from '../../assets/images/react_icon.svg'
import javaIcon from '../../assets/images/java_icon.svg'
import kotlinIcon from '../../assets/images/kotlin_icon.svg'
import androidIcon from '../../assets/images/android_icon.svg'
import materialIcon from '../../assets/images/materialui_icon.svg'
import gitIcon from '../../assets/images/git_skill_icon.svg'
import tailwindIcon from '../../assets/images/tailwindcss_icon.svg'
import firebaseIcon from '../../assets/images/firebase_icon.svg'
import socketIcon from '../../assets/images/socket_icon.svg'
import socketDarkIcon from '../../assets/images/socket_dark_icon.svg'
import mysqlIcon from '../../assets/images/mysql_icon.svg'
import mongodbIcon from '../../assets/images/mongodb_icon.svg'



const Skills = ({ref, theme}) => {
  const skills = [
    {id:1, skill:'Javascript', logo:`${javascriptIcon}`},
    {id:2, skill:'React', logo:`${reactIcon}`},
    {id:3, skill:'Java', logo:`${javaIcon}`},
    {id:4, skill:'kotlin', logo:`${kotlinIcon}`},
    {id:5, skill:'Android', logo:`${androidIcon}`},
    {id:6, skill:'React Native', logo:`${reactIcon}`},
    {id:7, skill:'Material UI', logo:`${materialIcon}`},
    {id:8, skill:'Git', logo:`${gitIcon}`},
    {id:9, skill:'Tailwindcss', logo:`${tailwindIcon}`},
    {id:10, skill:'Firebase', logo:`${firebaseIcon}`},
    {id:11, skill:'Socket.io', logo:`${theme === 'dark'?socketDarkIcon :socketIcon}`},
    {id:12, skill:'MySQL', logo:`${mysqlIcon}`},
    {id:13, skill:'MongoDB', logo:`${mongodbIcon}`},
  ]
  return (
    <div class="mx-auto max-w-7xl py-16 px-4 md:py-24 md:px-0 " ref={ref}>
      <div class="flex flex-col justify-center items-center">
        <div class=" bg-gray-200 rounded-lg">
        <p class="px-5 py-1">Skills</p>
        </div>
        <p class="pt-4 dark:text-white text-center" >The skills, tools and technologies I am really good at:</p>
      </div>

      <div class="grid  grid-cols-3 grid-rows-3 md:grid-cols-5  md:grid-rows-2  gap-4 items-center pt-12 ">
        {skills.map((skill)=>(
          <div key={skill.id} class="flex flex-col items-center ">
            <img src={skill.logo} class="px-3 py-2" />
            <p class='text-4.5 dark:text-white'>{skill.skill}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
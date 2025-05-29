import React from "react";
import organisationLogo from '../../assets/images/infostride_icon.svg'
import organisationDarkLogo from '../../assets/images/infostride_dark_icon.svg'


const Experience = ({ref, theme}) => {
  return (
    <div class="mx-auto max-w-7xl py-16 px-4 md:py-24 " ref={ref} id="work">
      <div class="flex flex-col justify-center items-center">
        <div class=" bg-gray-200 rounded-lg">
          <p class="px-5 py-1">Experience</p>
        </div>
        <p class="pt-4 dark:text-white text-center">
          Here is a quick summary of my most recent experience:
        </p>
      </div>
      <div class='pt-12 px-4 lg:px-0'>
          <div class='bg-white dark:bg-gray-dark-100 rounded-xl flex flex-col md:flex-row justify-between px-8 py-8 shadow-2xl'>
            <div class='order-1 flex items-center justify-center'>
            <img class="w-1/2" src={theme === 'dark'?organisationDarkLogo :organisationLogo} />
            </div>
            <div class='flex flex-col order-3 md:order-2 pt-4 md:pt-0'>
              <p class="text-xl dark:text-white">Software Development Engineer</p>
              <ul class='list-disc pt-4 ml-4'>
                <li class="text-base text-gray-600 dark:text-gray-dark-600">Worked with SHCIL (Stock Holding Corporation of India) and Doctalkgo, delivering robust and user-centric digital solutions.</li>
                <li class="text-base text-gray-600 dark:text-gray-dark-600">Built scalable web and mobile apps using React,React Native, Kotlin tailored for performance and user experience.</li>
                <li class="text-base text-gray-600 dark:text-gray-dark-600">Applied Clean Architecture and SOLID principles to ensure code quality, maintainability, and long-term scalability across projects.</li>
                
              </ul>
            </div>
            <div class='order-2  md:order-3 pt-4 md:pt-0'>

            <p class="text-sm text-gray-700 dark:text-gray-dark-600"> March 2021 - Present</p>
            </div>
          </div>


      </div>
    </div>
  );
};

export default Experience;

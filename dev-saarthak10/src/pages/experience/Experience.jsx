import React from "react";
import organisationLogo from '../../assets/org_logo.svg'

const Experience = () => {
  return (
    <div class="mx-auto max-w-7xl py-24 ">
      <div class="flex flex-col justify-center items-center">
        <div class=" bg-gray-200 rounded-lg">
          <p class="px-5 py-1">Experience</p>
        </div>
        <p class="pt-4">
          Here is a quick summary of my most recent experience:
        </p>
      </div>
      <div class='pt-12'>
          <div class='bg-white rounded-xl flex justify-between px-8 py-8'>
            <img src={organisationLogo} />
            <div class='flex flex-col'>
              <p class="text-xl">Software Development Engineer</p>
              <ul class='list-disc pt-4'>
                <li class="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li class="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li class="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li class="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </div>
            <p class="text-base text-gray-700"> March 2021 - Present</p>
          </div>


      </div>
    </div>
  );
};

export default Experience;

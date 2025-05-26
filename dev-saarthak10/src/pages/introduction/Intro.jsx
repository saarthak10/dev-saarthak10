import React from "react";
import passportPhoto from "../../assets/passportSize.jpg";
import locationIcon from "../../assets/location_icon.svg";
import githubIcon from "../../assets/github_icon.svg";
import hackerrankIcon from "../../assets/hackerrank_icon.svg";
import linkdinIcon from "../../assets/linkdin_icon.svg";


const Intro = () => {
  return (
    <div class="py-12 px-8 mx-auto max-w-7xl  flex flex-col  md:flex-row gap-12 justify-between items-center">
      <div class="flex-col order-last md:order-first ">
        <h1 class=" text-4xl  md:text-6xl">Hi, I’m Sagar 👋</h1>
        <p class="text-justify text-base pt-2">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div class="pt-12">
          <div class="flex">
            <img src={locationIcon} />
            <p class="pl-2 text-4">Himachal Pradesh, India</p>
          </div>
        </div>
        <div class="pt-12">
          <div class="flex">
            <img class="px-1" src={githubIcon}  height={'30px'} width={'30px'}/>
            <img class="px-1" src={hackerrankIcon} height={'30px'} width={'30px'} />
            <img class="px-1" src={linkdinIcon} height={'30px'} width={'30px'}/>
          </div>
        </div>
      </div>
      <div class="order-first md:order-last">
        <img  src={passportPhoto} 
        // width={'280px'} 
        // height={'320px'} 
        // class="shadow-[20px_20px_0] shadow-gray-200"
        class={ 'shadow-[-10px_10px_0]  md:shadow-[20px_20px_0] shadow-gray-200 '}
        />
      </div>
    </div>
  );
};

export default Intro;

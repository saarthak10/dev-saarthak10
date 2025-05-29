import React from "react";
import passportPhoto from "../../assets/images/passportSize.jpg";
import locationIcon from "../../assets/images/location_icon.svg";
import githubIcon from "../../assets/images/github_icon.svg";
import githubDarkIcon from "../../assets/images/github_dark_icon.svg";
import hackerrankIcon from "../../assets/images/hackerrank_icon.svg";
import linkdinIcon from "../../assets/images/linkdin_icon.svg";

const Intro = ({ theme }) => {
  const handleOpenGithub = () => {
    window.location.href = "https://github.com/saarthak10";
  };
  const handleOpenHackerRank = () => {
    window.location.href =
      "https://www.hackerrank.com/profile/saarthaksharma87";
  };
  const handleOpenlinkdIn = () => {
    window.location.href =
      "https://www.linkedin.com/in/saarthak-sharma-1210con";
  };
  return (
    <div class="mx-auto max-w-7xl py-16 px-8 flex flex-col  md:flex-row gap-12 justify-between">
      <div class="max-w-2xl flex-col order-last md:order-first ">
        <h1 class=" text-4xl  md:text-6xl dark:text-white">Hi, I’m Saarthak 👋</h1>
        <p class="text-justify text-base pt-2 dark:text-white">
          I'm a passionate software developer with 4.3 years of professional
          experience in building robust and user-centric applications across
          mobile and web platforms. I’ve developed and maintained
          high-performance mobile applications using Android (Kotlin) and React
          Native, blending native capabilities with clean, intuitive user
          experiences. On the web, I specialize in React and JavaScript,
          crafting responsive, scalable, and modern interfaces. Whether it's
          developing cross-platform mobile apps or creating interactive web
          experiences, I thrive on solving problems and building meaningful
          digital solutions.
        </p>
        <div class="pt-12">
          <div class="flex">
            <img src={locationIcon} />
            <p class="pl-2 text-4 dark:text-white">Himachal Pradesh, India</p>
          </div>
        </div>
        <div class="pt-12">
          <div class="flex">
            <a href="https://github.com/saarthak10">
              <img
              class="px-1  cursor-pointer"
              src={theme === "dark" ? githubDarkIcon : githubIcon}
              height={"50px"}
              width={"50px"}
            />
              </a>

            <a href="https://www.hackerrank.com/profile/saarthaksharma87">
              
            <img
              class="px-1  cursor-pointer"
              src={hackerrankIcon}
              height={"50px"}
              width={"50px"}
            />
              </a>  

             <a href="https://www.linkedin.com/in/saarthak-sharma-1210con">
            <img
              class="px-1  cursor-pointer"
              src={linkdinIcon}
             height={"50px"}
              width={"50px"}
            />
              
              
            </a> 
          </div>
        </div>
      </div>
      <div class="max-w-2xl flex items-center justify-center ">
        <img
          src={passportPhoto}
          // width={'280px'}
          // height={'320px'}
          // class="shadow-[20px_20px_0] shadow-gray-200"
          class={`h-auto shadow-[-10px_10px_0_#e5e7eb] ${
            theme === "dark"
              ? "md:shadow-[20px_20px_0_#374151] "
              : "md:shadow-[20px_20px_0_#e5e7eb]"
          } dark:shadow-[-10px_10px_0_#374151`}
        />



      </div>
    </div>
  );
};

export default Intro;

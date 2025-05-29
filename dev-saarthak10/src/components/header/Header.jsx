import React, { useState } from "react";
import themeIcon from "../../assets/images/theme_button.svg";
import darkThemeIcon from "../../assets/images/dark_theme_icon.svg";
import menuIcon from "../../assets/images/menu_icon.svg";
import menuDarkIcon from "../../assets/images/menu_dark_icon.svg";
import closeIcon from "../../assets/images/close_icon.svg";
import closeDarkIcon from "../../assets/images/close_dark_icon.svg";

const Header = ({ pages, handleThemeToggle, theme }) => {
  const head = "<SS />";
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadClick = () => {
    const element = document.createElement("a");
    element.href = "../../assets/files/";
    element.download = "Saarthak_Sharma.pdf";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div class="flex mx-auto max-w-7xl justify-between items-center  py-4 px-8 ">
      <h1 class={`text-2xl dark:text-white ${isOpen ? "hidden" : "block"}`}>
        {head}
      </h1>

      <div class=" hidden md:flex flex-row ">
        <div class="flex flex-row items-center">
          {pages.map((page) => (
            <a
              key={page.id}
              class="mr-2.5 dark:text-white"
              href={`#${page.name}`}
            >
              {page.title}
            </a>
          ))}
        </div>
        <div class="bg-gray-100 w-0.5"></div>
        {theme === "light" ? (
          <img
            src={themeIcon}
            onClick={handleThemeToggle}
            class="cursor-pointer"
          />
        ) : (
          <img
            src={darkThemeIcon}
            onClick={handleThemeToggle}
            class="cursor-pointer"
          />
        )}
        <button
          class="bg-black dark:bg-white text-white dark:text-gray-950 rounded-lg p-2 text-xs "
          onClick={() => handleDownloadClick()}
        >
          {" "}
          Download CV
        </button>
      </div>
      <div class={`md:hidden ${isOpen ? "hidden" : "block"}`}>
        <img
          src={theme === "dark" ? menuDarkIcon : menuIcon}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen ? (
        <div class=" fixed  top-0 right-0 bottom-0 w-full bg-white dark:bg-gray-900 z-50 md:hidden transition-all duration-300 ">
          <div class="flex justify-between pl-4 pt-4 pb-5">
            <h1 class={`text-2xl dark:text-white`}>{head}</h1>
            <img
              src={theme === "dark" ? closeDarkIcon : closeIcon}
              class="pr-4"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div class="bg-gray-100 w-full h-0.5"></div>
          <div class="flex flex-col items-start gap-4">
            {pages.map((page) => (
              <a
                key={page.id}
                class="pl-4 pt-4 dark:text-gray-dark-600"
                href={`#${page.name}`}
              >
                {page.title}
              </a>
            ))}
            <div class="bg-gray-100 w-full h-0.5"></div>
            <div
              class="flex justify-between px-4 py-4 w-full items-center"
              onClick={handleThemeToggle}
            >
              <p class="dark:text-gray-dark-600">Switch Theme</p>
              {theme === "light" ? (
                <img src={themeIcon} class="cursor-pointer" />
              ) : (
                <img src={darkThemeIcon} class="cursor-pointer" />
              )}
            </div>
            <div class="px-4 py-4 w-full">
              <button
                class="bg-black dark:bg-white w-full dark:text-black text-white rounded-lg p-3 text-xs "
                onClick={() => handleDownloadClick()}
              >
                {" "}
                Download CV
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;

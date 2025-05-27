import React, { useState } from "react";
import themeIcon from "../../assets/theme_button.svg";
import darkThemeIcon from "../../assets/dark_theme_icon.svg";
import menuIcon from "../../assets/menu_icon.svg";
import closeIcon from "../../assets/close_icon.svg";

const Header = ({ pages, handleThemeToggle, theme, handleHeaderClick }) => {
  const head = "<SS />";
  const [isOpen, setIsOpen] = useState(false);
 
  console.log(handleHeaderClick, "FUNC")

  return (
    <div class="flex mx-auto max-w-7xl justify-between items-center  py-4 px-8 ">
      <h1 class={`text-2xl dark:text-white ${isOpen ? "hidden" : "block"}`}>{head}</h1>

      <div class=" hidden md:flex flex-row   ">
        {pages.map((page) => (
          <a key={page.id} class="mr-2.5 dark:text-white" href={`#${page.name}`} >
            {page.title}
          </a>
        ))}
        <div class="bg-gray-100 w-0.5"></div>
        {theme === "light" ? (
          <img src={themeIcon} onClick={handleThemeToggle} class='cursor-pointer' />
        ) : (
          <img src={darkThemeIcon} onClick={handleThemeToggle} class='cursor-pointer'  />
        )}
        <button class="bg-black dark:bg-white text-white dark:text-gray-950 rounded-lg p-2 text-xs ">
          {" "}
          Download CV
        </button>
      </div>
      <div class={`md:hidden ${isOpen ? "hidden" : "block"}`}>
        <img src={menuIcon} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen ? (
        <div class=" fixed inset-0 bg-white dark:bg-gray-900 z-50 md:hidden transition-all duration-300 ">
          <div class="flex justify-between p-4">
            <h1 class={`text-2xl `}>{head}</h1>
            <img src={closeIcon} onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div class="bg-gray-100 w-full h-0.5"></div>
          <div class="flex flex-col items-start">
            {pages.map((page) => (
              <a key={page.id} class="pl-6 pt-4" href={`#${page.name}`}>
                {page.title}
              </a>
            ))}
            <div class="bg-gray-100 w-full h-0.5 "></div>
            <div class="flex justify-between px-4 py-4 w-full items-center">
              <p>Switch Theme</p>
              <img src={themeIcon} />
            </div>

            <button class="bg-black text-white rounded-lg p-2 text-xs ">
              {" "}
              Download CV
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;

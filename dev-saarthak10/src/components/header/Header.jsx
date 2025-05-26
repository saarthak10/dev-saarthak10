import React, { useState } from "react";
import themeIcon from "../../assets/theme_button.svg";
import menuIcon from "../../assets/menu_icon.svg";
import closeIcon from "../../assets/close_icon.svg";

const Header = ({ pages }) => {
  const head = "<SS />";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="flex mx-auto max-w-7xl justify-between items-center  py-4 px-8">
      <h1 class={`text-2xl ${isOpen? 'hidden' : 'block'}`}>{head}</h1>

      <div class=" hidden md:flex flex-row   ">
        {pages.map((page) => (
          <button key={page.id} class="mr-2.5">
            {page.title}
          </button>
        ))}
        <div class="bg-gray-100 w-0.5"></div>
        <img src={themeIcon} />
        <button class="bg-black text-white rounded-lg p-2 text-xs ">
          {" "}
          Download CV
        </button>
      </div>
      <div class={`md:hidden ${isOpen? 'hidden' : 'block'}`}>
        <img src={menuIcon} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen ? (
        <div class=" w-full h-full bg-red-200 ">
          <div class="flex justify-between p-4">
            <h1 class={`text-2xl `}>{head}</h1>
            <img src={closeIcon} onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div class="bg-gray-100 w-full h-0.5"></div>
          <div class="flex flex-col items-start">
            {pages.map((page) => (
              <button key={page.id} class="pl-4 pt-4">
                {page.title}
              </button>
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

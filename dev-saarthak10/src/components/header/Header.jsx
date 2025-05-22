import React from "react";
import themeIcon from "../../assets/theme_button.svg";
import menuIcon from "../../assets/menu_icon.svg";

const Header = ({ pages }) => {
  const head = "<SS />";
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div class="flex mx-auto max-w-7xl justify-between items-center  py-4 px-8">
      <h1 class="text-2xl">{head}</h1>

      <div class="flex ">
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
      <div class="lg:hidden">
        <img src={menuIcon} />
      </div>
    </div>
  );
};

export default Header;

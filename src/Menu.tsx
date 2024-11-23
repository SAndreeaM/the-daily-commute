import { FC } from 'react';
import './App.css';
import { 
  IoShareSocialOutline,
  IoShareSocial,
  IoHeartOutline,
  IoHeart,
  IoSunnyOutline,
  IoMoonOutline,
  IoHomeOutline,
  IoHome,
  IoClose,
  IoChevronDown
} from "react-icons/io5";
import { 
  HiOutlineCog6Tooth,
  HiCog6Tooth
} from "react-icons/hi2";

interface Props {
  onMenuClick: (id: string, toggleMenu?: boolean, lightMode?: boolean) => void;
  menuState: boolean;
  lightMode: boolean; // Added lightMode prop to handle light/dark mode
  menuPage: string;  // Add menuPage prop
}

const Menu: FC<Props> = ({ onMenuClick, menuState, lightMode, menuPage }) => {
  const menuItems = [
    { id: "home", icon: menuPage === "home" ? <IoHome /> : <IoHomeOutline /> },
    { id: "credits", icon: menuPage === "credits" ? <IoHeart /> : <IoHeartOutline /> },
    { id: "social", icon: menuPage === "social" ? <IoShareSocial /> : <IoShareSocialOutline /> },
    { id: "settings", icon: menuPage === "settings" ? <HiCog6Tooth /> : <HiOutlineCog6Tooth /> },
    {
      id: "lightMode",
      lightMode: true,
      icon: lightMode ? <IoMoonOutline /> : <IoSunnyOutline />
    },
    {
      id: "menuState",
      toggleMenu: true,
      icon: menuState ? <IoClose /> : <IoChevronDown />
    }
  ];

  return (
    <div className='menu flexbox'>
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onMenuClick(item.id, item.toggleMenu, item.lightMode)}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default Menu;

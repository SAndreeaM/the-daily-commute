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
  lightMode: boolean;
  menuPage: string;
}

// Menu component
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
      {menuItems.map(({ id, icon, toggleMenu, lightMode }) => (
        <button
          key={id}
          onClick={() => onMenuClick(id, toggleMenu, lightMode)}
          aria-label={id}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default Menu;

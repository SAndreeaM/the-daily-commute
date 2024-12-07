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
import { HiOutlineCog6Tooth, HiCog6Tooth } from "react-icons/hi2";
import Navigation from './Navigation';

interface Props {
  onMenuClick: (id: string, toggleMenu?: boolean, lightMode?: boolean) => void;
  menuState: boolean;
  lightMode: boolean;
  menuPage: string;
  socialPopup: boolean;
}

const Menu: FC<Props> = ({ onMenuClick, menuState, lightMode, menuPage, socialPopup }) => {
  const menuItems = [
    { id: "home", icon: menuPage === "home" ? <IoHome /> : <IoHomeOutline /> },
    { id: "credits", icon: menuPage === "credits" ? <IoHeart /> : <IoHeartOutline /> },
    { id: "social", icon: socialPopup ? <IoShareSocial /> : <IoShareSocialOutline /> },
    { id: "settings", icon: menuPage === "settings" ? <HiCog6Tooth /> : <HiOutlineCog6Tooth /> },
    { id: "lightMode", icon: lightMode ? <IoMoonOutline /> : <IoSunnyOutline /> },
    { id: "menuState", icon: menuState ? <IoClose /> : <IoChevronDown /> }
  ];

  return (
    <Navigation
      items={menuItems}
      currentState={menuPage}
      setCurrentState={(state) => {
        if (state === "menuState") {
          onMenuClick(state, true);
        } else {
          onMenuClick(state);
        }
      }}
    />
  );
};

export default Menu;

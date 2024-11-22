import { FC, ReactNode } from 'react';

import './App.css'

import { IoShareSocialOutline, IoHeartOutline, IoSunnyOutline, IoMoonOutline, IoHomeOutline, IoClose } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

interface Props {
    onMenuClick: (id: string) => void; // Function passed from App to handle clicks
  }

const Menu: FC<Props> = ({ onMenuClick }) => {
    const menuItems = [
        {id: "home", icon: <IoHomeOutline />},
        {id: "credits", icon: <IoHeartOutline />},
        {id: "social", icon: <IoShareSocialOutline />},
        {id: "settings", icon: <HiOutlineCog6Tooth />},
        {id: "colorMode", icon: <IoMoonOutline />},
        {id: "menuState", icon: <IoClose />}
    ];

    return (
      <div className='menu flexbox'>
        {
            // Map over menu items and add onClick dynamically
            menuItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onMenuClick(item.id)}
                >
                    {item.icon}
                </button>
            ))
        }
      </div>
    )
  }
  
  export default Menu
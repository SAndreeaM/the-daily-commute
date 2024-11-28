import { useState } from 'react';
import Popup from 'reactjs-popup';

import { 
  FaLinkedinIn,
  FaGithub,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaTiktok,
 } from "react-icons/fa6";

import Menu from './Menu.tsx';
import SharePopup from './SharePopup.tsx';

import './App.css';
import './Section.css';
import './Popup.css';
//import 'reactjs-popup/dist/index.css';

interface Props {
  quip: string;
  lightMode: boolean;
  onToggleLightMode: () => void;
}

function Section1(props: Props) {
  type MenuOption = "home" | "credits" | "social" | "settings"; // Define the menu options
  const [menuPage, setMenuPage] = useState<MenuOption>("home"); // Initialise the menuPage state
  const [menuState, setMenuState] = useState<boolean>(true); // Initialise the menuState state
  const [sharePopup, setSharePopup] = useState<boolean>(false); // Initialise the sharePopup state

  // Handle menu clicks
  const handleMenuClick = (id: string, toggleMenu?: boolean, lightMode?: boolean) => {
    // Check if the id is "lightMode", "social" or a menu option
    if(id === "lightMode") {
      props.onToggleLightMode(); // Call the toggle function from props
      return;
    }

    if(id === "social") {
      setSharePopup(true); // Open the popup
      return;
    }

    if(toggleMenu && id !== "lightMode") {
      setMenuState(prevMenuState => !prevMenuState);
    } else if(id !== "lightMode") {
      setMenuState(true);
      if (["home", "credits", "settings"].includes(id)) {
        setMenuPage(id as MenuOption);
      }
    }
  };

  // Render the content based on the menuPage state
  const renderSection1Content = () => {
    switch (menuPage) {
      case "home":
        return (
          <div className='home-content section-content flexbox'>
            <h1>The Daily Commute</h1>
            <Menu
              onMenuClick={handleMenuClick}
              menuState={menuState}
              lightMode={props.lightMode}
              menuPage={menuPage}
              socialPopup={sharePopup} // Pass sharePopup state
            />
            <p>{props.quip}</p>
          </div>
        );

      case "credits":
        return (
          <div className='credits-content section-content flexbox'>
            <h2>Credits</h2>
            <p>Created by Andreea "PuffyBean" Săndulache</p>
            <p>
              <a href="https://www.linkedin.com/in/andreea-maria-sandulache-312927207/" target="_blank"><FaLinkedinIn /></a> | 
              <a href="https://github.com/SAndreeaM" target="_blank"><FaGithub /></a>
            </p>
            <p>from</p>
            <h3>BlackCatJoystick Studios</h3>
            <p>
              <a href="https://www.twitch.tv/blackcatjoystickstudios" target="_blank"><FaTwitch /></a> | 
              <a href="https://www.youtube.com/@BlackCatJoystickStudios" target="_blank"><FaYoutube /></a> | 
              <a href="https://www.tiktok.com/@blackcatjoystick?lang=en" target="_blank"><FaTiktok /></a> | 
              <a href="https://x.com/BCJ_dev" target="_blank"><FaTwitter /></a>
            </p>
            <h3>Technologies Used</h3>
            <p>React, TypeScript, CSS, HTML</p>
            <h3>Other Credits</h3>
            <p>Inspired by <a href="https://imissmybar.com/lander" target="_blank">I Miss My Bar</a> and <a href="https://imissmycafe.com/" target="_blank">I Miss My Cafe</a>.</p>
          </div>
        );

      case "settings":
        return (
          <div>
            <h2>Settings</h2>
            <p>Adjust your preferences here.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='section1 section flexbox'>
      {/* Render the menu if the menuPage is not "home" or the menuState is false */}
      {(menuPage !== "home" || !menuState) && (
        <Menu
          onMenuClick={handleMenuClick}
          menuState={menuState}
          lightMode={props.lightMode}
          menuPage={menuPage}
          socialPopup={sharePopup} // Pass sharePopup state
        />
      )}

      {/* Render the content if the menuState is true */}
      {menuState && (
        <div className='section-content flexbox hide-scrollbar'>
          {renderSection1Content()}
        </div>
      )}

      {/* Render the share popup */}
      <SharePopup open={sharePopup} onClose={() => setSharePopup(false)} />
    </div>
  );
}

export default Section1;
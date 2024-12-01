import { useState, useEffect } from 'react';
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
  lightMode: boolean;
  onToggleLightMode: () => void;
}

function Section1(props: Props) {
  type MenuOption = "home" | "credits" | "social" | "settings"; // Define the menu options
  const [menuPage, setMenuPage] = useState<MenuOption>("home"); // Initialise the menuPage state
  const [menuState, setMenuState] = useState<boolean>(true); // Initialise the menuState state
  const [sharePopup, setSharePopup] = useState<boolean>(false); // Initialise the sharePopup state

  const quips: string[] = [
    "Mind the gap between procrastination and productivity.",
    "Next stop: Accomplishment Station.",
    "Please stand clear of the closing deadlines.",
    "This train of thought is now departing.",
    "Productivity levels are now approaching maximum capacity.",
    "Missing your stop? Don't worry—another train's on the way.",
    "Every small step gets you closer to your destination.",
    "The journey is just as important as the destination.",
    "There's no wrong way to get where you're going.",
    "Take it one stop at a time—no need to rush.",
    "Even slow trains get to the station eventually.",
    "Need a break? Pull the cord and pause.",
    "Sometimes the best detours lead to better tracks.",
    "Don't forget to enjoy the view along the way.",
    "Missed your train of thought? Another one's coming soon.",
    "Each stop gets you closer to where you want to be.",
    "This is your ride—travel at your own speed."
  ];

  const getRandomInt = (a: number, b: number) => Math.floor(a + Math.random() * (b + 1)); // Function to get a random integer
  const [quip, setQuip] = useState<string>(quips[getRandomInt(0, quips.length - 1)]); // Initialise the quip state

  // Set a new quip every 10 minutes
  useEffect(() => {
    const quipInterval = setInterval(() => {
      setQuip(quips[getRandomInt(0, quips.length - 1)]);
    }, 100000);

    return () => clearInterval(quipInterval);
  }, []);

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
            <p>{quip}</p>
          </div>
        );

      case "credits":
        return (
          <div className='credits-content section-content flexbox'>
            <h2>Credits</h2>
            <p>Created by Andreea "PuffyBean" Săndulache</p>
            <div className='credits-icon-container'>
              <a href="https://www.linkedin.com/in/andreea-maria-sandulache-312927207/" target="_blank"><FaLinkedinIn /></a>
              <a href="https://github.com/SAndreeaM" target="_blank"><FaGithub /></a>
            </div>
            <p>from</p>
            <h3>BlackCatJoystick Studios</h3>
            <div className='credits-icon-container'>
              <a href="https://www.twitch.tv/blackcatjoystickstudios" target="_blank"><FaTwitch /></a>
              <a href="https://www.youtube.com/@BlackCatJoystickStudios" target="_blank"><FaYoutube /></a>
              <a href="https://www.tiktok.com/@blackcatjoystick?lang=en" target="_blank"><FaTiktok /></a>
              <a href="https://x.com/BCJ_dev" target="_blank"><FaTwitter /></a>
            </div>
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
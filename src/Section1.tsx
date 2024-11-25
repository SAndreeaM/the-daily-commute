import { useState } from 'react';
import Menu from './Menu.tsx';
import './App.css';

interface Props {
  quip: string;
}

function Section1(props: Props) {
  type MenuOption = "home" | "credits" | "social" | "settings"; // Define Menu Options type
  const [menuPage, setMenuPage] = useState<MenuOption>("home"); // Initialise default menuPage
  const [menuState, setMenuState] = useState<boolean>(true); // Default to the menu being closed
  const [lightMode, setLightMode] = useState<boolean>(false); // Handle light/dark mode state

  const handleMenuClick = (id: string, toggleMenu?: boolean, lightMode?: boolean) => {
    // If toggleMenu is true, toggle the menu visibility
    if (toggleMenu && id !== "lightMode") {
      setMenuState((prevMenuState) => !prevMenuState);
    } else if (id !== "lightMode") {
      // If a menu option is clicked (and it's not the lightMode), force the menu to open and update the menuPage
      setMenuState(true);  // Open the menu when a menu option is clicked
      if (["home", "credits", "social", "settings"].includes(id)) {
        setMenuPage(id as MenuOption); // Set the current page to the clicked menu option
      }
    }
    
    // Toggle light mode only (without affecting the menu state)
    if (id === "lightMode") {
      setLightMode((prevLightMode) => !prevLightMode); // Toggle light/dark mode
    }
  };

  // Render Section1 content based on the current menuPage
  const renderSection1Content = () => {
    switch (menuPage) {
      case "home":
        return (
          <div className='home-content section-content flexbox'>
            <h1>The Daily Commute</h1>
            <Menu onMenuClick={handleMenuClick} menuState={menuState} lightMode={lightMode} menuPage={menuPage} />
            <p>{props.quip}</p>
          </div>
        );
      case "credits":
        return (
          <div>
            <h2>Credits</h2>
            <p>Here are the credits for the app.</p>
          </div>
        );
      case "social":
        return (
          <div>
            <h2>Social</h2>
            <p>Connect with us on social media!</p>
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
      {/* Render top menu based on the menu state */}
      {
        (menuPage !== "home" || !menuState) && (
          <Menu onMenuClick={handleMenuClick} menuState={menuState} lightMode={lightMode} menuPage={menuPage} />
        )
      }

      {/* Render content based on the menu state */}
      {
        (menuState) && (
          <div className='section-content flexbox hide-scrollbar'>
            {renderSection1Content()}
          </div>
        )
      }
    </div>
  );
}

export default Section1;

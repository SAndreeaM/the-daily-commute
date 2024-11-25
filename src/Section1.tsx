import { useState } from 'react';
import Popup from 'reactjs-popup';

import Menu from './Menu.tsx';

import './App.css';
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
  const [socialPopup, setSocialPopup] = useState<boolean>(false); // Initialise the socialPopup state

  // Handle menu clicks
  const handleMenuClick = (id: string, toggleMenu?: boolean, lightMode?: boolean) => {
    // Check if the id is "lightMode", "social" or a menu option
    if(id === "lightMode") {
      props.onToggleLightMode(); // Call the toggle function from props
      return;
    }

    if(id === "social") {
      setSocialPopup(true); // Open the popup
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
              socialPopup={socialPopup} // Pass socialPopup state
            />
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
          socialPopup={socialPopup} // Pass socialPopup state
        />
      )}

      {/* Render the content if the menuState is true */}
      {menuState && (
        <div className='section-content flexbox hide-scrollbar'>
          {renderSection1Content()}
        </div>
      )}

      {/* Render the social popup */}
      <Popup open={socialPopup} onClose={() => setSocialPopup(false)}>
        <div>
          <h2>Social</h2>
          <p>Social media links and information.</p>
        </div>
      </Popup>
    </div>
  );
}

export default Section1;
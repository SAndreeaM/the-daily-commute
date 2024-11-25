import { useState } from 'react';
import Menu from './Menu.tsx';
import './App.css';

interface Props {
  quip: string;
  lightMode: boolean;
  onToggleLightMode: () => void;
}

function Section1(props: Props) {
  type MenuOption = "home" | "credits" | "social" | "settings"; // Define the menu options
  const [menuPage, setMenuPage] = useState<MenuOption>("home"); // Initialise the menuPage state
  const [menuState, setMenuState] = useState<boolean>(true); // Initialise the menuState state

  // Handle menu clicks
  const handleMenuClick = (id: string, toggleMenu?: boolean, lightMode?: boolean) => {
    if (id === "lightMode") {
      props.onToggleLightMode(); // Call the toggle function from props
      return;
    }

    if (toggleMenu && id !== "lightMode") {
      setMenuState(prevMenuState => !prevMenuState);
    } else if (id !== "lightMode") {
      setMenuState(true);
      if (["home", "credits", "social", "settings"].includes(id)) {
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
      {/* {Render the menu if the menuPage is not "home" or the menuState is false} */}
      {(menuPage !== "home" || !menuState) && (
        <Menu
          onMenuClick={handleMenuClick}
          menuState={menuState}
          lightMode={props.lightMode}
          menuPage={menuPage}
        />
      )}

      {/* {Render the content if the menuState is true} */}
      {menuState && (
        <div className='section-content flexbox hide-scrollbar'>
          {renderSection1Content()}
        </div>
      )}
    </div>
  );
}

export default Section1;
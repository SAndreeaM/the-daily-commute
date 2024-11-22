import { useState, useEffect } from 'react'

import Menu from './Menu.tsx'

import './App.css'

interface Props {
  quip: string;
}

function Section1(props:Props) {
   // Menu Page Handler
   type MenuOption = "home" | "credits" | "social" | "settings"; // Custom type for Menu Options
  
   const [menuPage, setMenuPage] = useState<MenuOption>("home"); // Initialise menuPage update
 
   const handleMenuClick = (id: string) => {
     switch(id) {
       case "home":
         setMenuPage("home");
         break;

       case "credits":
         setMenuPage("credits");
         break;

       case "social":
         setMenuPage("social");
         break;

       case "settings":
         setMenuPage("settings");
         break;

       default:
         setMenuPage("home");
     }
   }
  
  return (
    // Top Menu
    <div className='section1 section flexbox'>
      { // Check if menuPage is "home" ? don't show top menu : show top menu
        menuPage !== "home" && <Menu onMenuClick={handleMenuClick} />
      } 

      {
        // Change Section1 contents based on menuPage
        (() => {
        switch (menuPage) {
          case "home":
            return (
              <div className='home-content flexbox'>
                <h1>The Daily Commute</h1>
                <Menu onMenuClick={handleMenuClick} />
                <p>{props.quip}</p>
              </div>
            );

          case "credits":
            return (
              <div className='section1-content flexbox'>
                <h2>Credits</h2>
                <div>
                  <p>Here are the credits for the app.</p>
                </div>
              </div>
            );

          case "social":
            return (
              <div className='section1-content flexbox'>
                <h2>Social</h2>
                <p>Connect with us on social media!</p>
              </div>
            );

          case "settings":
            return (
              <div className='section1-content flexbox'>
                <h2>Settings</h2>
                <p>Adjust your preferences here.</p>
              </div>
            );

          default:
            return null;
        }
      })()
    }
    </div>
  )
}
  
export default Section1
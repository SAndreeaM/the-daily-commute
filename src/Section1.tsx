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
         console.log("home");
         break;

       case "credits":
         setMenuPage("credits");
         console.log("credits");
         break;

       case "social":
         setMenuPage("social");
         console.log("social");
         break;

       case "settings":
         setMenuPage("settings");
         console.log("settings");
         break;

       default:
         setMenuPage("home");
     }
   }
  
  return (
    <div className='section1 section flexbox'>
      {menuPage !== "home" && <Menu onMenuClick={handleMenuClick} />}

      {menuPage === "home" && (
        <div className='home-content flexbox'>
          <h1>The Daily Commute</h1>
          <Menu
            onMenuClick={handleMenuClick}
            
          />
          <p>{props.quip}</p>
        </div>
      )
    }
    </div>
  )
}
  
export default Section1
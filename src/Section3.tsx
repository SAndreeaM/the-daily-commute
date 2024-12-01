import { useState, useEffect } from 'react';

import './App.css'
import './Section.css'
import { IoMusicalNotes } from 'react-icons/io5';

function Section3() {
  type TabsOption = "ambient" | "pomodoro" | "tasks";
  const [tabsState, setTabsState] = useState<TabsOption>("ambient");

  const tabsItems = [
    {id: "ambientSounds", icon: <IoMusicalNotes />},
  ];

    return (
      <div className='section3 section flexbox'>
        <div className='section-content flexbox'>
          <h2>Section 3</h2>
          <p>This is the third section of the app.</p>
        </div>
      </div>
    )
  }
  
  export default Section3
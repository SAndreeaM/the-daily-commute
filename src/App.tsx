import { useState, useEffect } from 'react';
import Section1 from './Section1.tsx';
import Section2 from './Section2.tsx';
import Section3 from './Section3.tsx';
import './App.css';

function App() {
  const [lightMode, setLightMode] = useState<boolean>(true); // Handle light/dark mode state

  useEffect(() => {
    // Update the data-theme attribute whenever lightMode changes
    document.documentElement.setAttribute('data-theme', lightMode ? 'light' : 'dark');
  }, [lightMode]);

  return (
    <div className='app flexbox'>
      <div className='section-container flexbox'>
        <Section1 
          lightMode={lightMode}
          onToggleLightMode={() => setLightMode(prev => !prev)}
        />
        <Section2 />
        <Section3 />
      </div>
      <footer>
        <p>
          created by andreea "puffybean" săndulache from blackcatjoystick studios.
          inspired by <a href="https://imissmybar.com/lander" target="_blank">i miss my bar</a> and <a href="https://imissmycafe.com/" target="_blank">i miss my cafe</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;

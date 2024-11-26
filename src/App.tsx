import { useState, useEffect } from 'react';
import Section1 from './Section1.tsx';
import Section2 from './Section2.tsx';
import Section3 from './Section3.tsx';
import './App.css';

function App() {
  // GetRandomInt
  function getRandomInt(a: number, b: number) {
    return Math.floor(a + Math.random() * (b + 1));
  }

  // Quip Handler
  let quips: string[] = [
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

  const [quip, setQuip] = useState<string>(quips[getRandomInt(0, quips.length - 1)]); // Initialise quip update
  const [lightMode, setLightMode] = useState<boolean>(true); // Handle light/dark mode state

  useEffect(() => {
    // Update the data-theme attribute whenever lightMode changes
    document.documentElement.setAttribute('data-theme', lightMode ? 'light' : 'dark');
  }, [lightMode]);

  useEffect(() => {
    // Change quip every 20 seconds
    const quipInterval = setInterval(() => {
      setQuip(prevQuip => {
        const quipIndex = getRandomInt(0, quips.length - 1);
        return quips[quipIndex];
      });
    }, 200000);

    return () => clearInterval(quipInterval);
  }, []);

  return (
    <div className='app flexbox'>
      <div className='section-container flexbox'>
        <Section1 
          quip={quip}
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

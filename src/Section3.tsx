import { useState } from 'react';
import './App.css';
import './Section.css';
import Tabs from './Tabs.tsx';

function Section3() {
  type TabsOption = "ambient" | "pomodoro" | "tasks";
  const [tabsState, setTabsState] = useState<TabsOption>("ambient");

  const renderTabContent = () => {
    switch (tabsState) {
      case "ambient":
        return <div>Ambient Content</div>;
      case "pomodoro":
        return <div>Pomodoro Content</div>;
      case "tasks":
        return <div>Tasks Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className='section3 section flexbox'>
      <div className='section-content flexbox'>
        <Tabs tabsState={tabsState} setTabsState={setTabsState} />
        <div className='tab-content'>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default Section3;
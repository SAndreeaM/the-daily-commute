import { FC } from 'react';
import './App.css';
import './Section.css';
import {
  IoMusicalNotes,
  IoMusicalNotesOutline,
  IoTime,
  IoTimeOutline,
  IoList,
  IoListOutline
} from 'react-icons/io5';
import Navigation from './Navigation';

interface TabsProps {
  tabsState: "ambient" | "pomodoro" | "tasks";
  setTabsState: (state: "ambient" | "pomodoro" | "tasks") => void;
}

const Tabs: FC<TabsProps> = ({ tabsState, setTabsState }) => {
  const tabsItems = [
    { id: "ambient", icon: tabsState === "ambient" ? <IoMusicalNotes /> : <IoMusicalNotesOutline /> },
    { id: "pomodoro", icon: tabsState === "pomodoro" ? <IoTime /> : <IoTimeOutline /> },
    { id: "tasks", icon: tabsState === "tasks" ? <IoList /> : <IoListOutline /> }
  ];

  return (
    <Navigation
      items={tabsItems}
      currentState={tabsState}
      setCurrentState={(state) => setTabsState(state as "ambient" | "pomodoro" | "tasks")}
      showArrows={true}
      showCircles={true}
    />
  );
};

export default Tabs;
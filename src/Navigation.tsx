import { FC } from 'react';
import './App.css';
import './Section.css';
import {
  IoEllipse,
  IoEllipseOutline
} from 'react-icons/io5';
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

interface NavigationProps {
  items: { id: string, icon: JSX.Element }[];
  currentState: string;
  setCurrentState: (state: string) => void;
  showArrows?: boolean;
  showCircles?: boolean;
}

const Navigation: FC<NavigationProps> = ({ items, currentState, setCurrentState, showArrows = false, showCircles = false }) => {
  const handleArrowClick = (direction: "back" | "forward") => {
    const currentIndex = items.findIndex(item => item.id === currentState);
    const newIndex = direction === "back"
      ? (currentIndex - 1 + items.length) % items.length
      : (currentIndex + 1) % items.length;
    setCurrentState(items[newIndex].id);
  };

  return (
    <div className='navigation-container menu flexbox'>
      {showArrows && (
        <button onClick={() => handleArrowClick("back")} aria-label="previous">
          <IoIosArrowBack />
        </button>
      )}
      <div className='navigation-items flexbox'>
        {items.map(({ id, icon }) => (
          <div key={id} className='navigation-item'>
            <button
              onClick={() => setCurrentState(id)}
              aria-label={id}
            >
              {icon}
            </button>
            {showCircles && (currentState === id ? <IoEllipse className='small-circle' /> : <IoEllipseOutline className='small-circle' />)}
          </div>
        ))}
      </div>
      {showArrows && (
        <button onClick={() => handleArrowClick("forward")} aria-label="next">
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default Navigation;
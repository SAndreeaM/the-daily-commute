import './App.css'
import { IoShareSocialOutline, IoHeartOutline, IoSunnyOutline, IoMoonOutline, IoHomeOutline, IoClose } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";


function Menu() {

    return (
      <div id='menu' className='flexbox'>
        <button>
            <IoHomeOutline />
        </button>
        <button>
            <IoHeartOutline />
        </button>
        <button>
            <IoShareSocialOutline />
        </button>
        <button>
            <HiOutlineCog6Tooth />
        </button>
        <button>
            <IoMoonOutline />
        </button>
        <button>
            <IoClose />
        </button>
      </div>
    )
  }
  
  export default Menu
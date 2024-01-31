import React, {useContext} from 'react';
import "./header.css";
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import { modeContext } from '../../App';
const Header = () => {
  const {darkMode, setDarkmode} = useContext(modeContext);
  const handleMode=() =>{
    setDarkmode(!darkMode);
  }
  // className={`${darkMode ? "dark" : " "} header`}
  return (
    <header className={`${darkMode ? "dark" : " "} header`} >
        <div className="div">
            <h2>Where in the World?</h2>
        </div>
        <div className="mode_btn" >
            <button onClick={handleMode}>
              <DarkModeTwoToneIcon/> Dark Mode</button>
        </div>
    </header>
  )
}

export default Header;
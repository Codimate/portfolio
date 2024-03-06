
import './topbar.scss';
import { Person, Mail } from '@mui/icons-material';



export const Topbar = ({ menuOpen,setMenuOpen}) => {
  
  return (
    <div className={'topbar ' + (menuOpen && 'active')} id = "topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Codimate.</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+91 8308490268</span>
            </div>
            <div className="itemContainer">
            <Mail className='icon'/>
            <span>anmolkatakwar99@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>

          </div>
        </div>
      </div>
    </div>
  )
}


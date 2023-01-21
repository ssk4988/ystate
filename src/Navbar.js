import './Navbar.css';
import logo from "./img/RRLogo.png"
import * as firebase from './firebase';



function Navbar({ send }) {
    return (
      <div className="Navbar">
        <header className="navbar-elements">
            <img className="logo" src={logo} alt="Logo Image" width="500" height="auto" />
            <button 
                onClick={() => {send("Login");}} type="button">myHabits
            </button>
            <button onClick={() => {send("Click Data");}} type="button">Data Analysis</button>
            <button onClick={() => {send("Click Profile");}} type="button">Profile</button>
            <button onClick={() => {firebase.logout(); send("Sign Out");}} type="button">Log Out</button>
        </header>
      </div>
    );
  }
  
  export default Navbar;

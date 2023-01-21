import './Landing.css';
import HabitView from './HabitView';
import Navbar from "./Navbar"
import Mascot from './Mascot';
import Data from './Data';
import Graph from './Graph';

function Landing({ send }) {
    return (
      <div className="Landing">
        <header className="App-header">
            <HabitView />
            <Mascot send={send}/>
            
        </header>
      </div>
      
    );
  }
  
  export default Landing;

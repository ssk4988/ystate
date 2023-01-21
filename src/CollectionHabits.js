import './CollectionHabits.css';
import Navbar from './Navbar';
import HabitView from './HabitView';

function CollectionHabits( {send} ) {
    return (
      <div className="CollectionHabits">
        <header className="App-header">
            <Navbar send={send}/>

            <h1>Collection of Habits</h1>
            <HabitView />
        </header>
      </div>
    );
  }
  
  export default CollectionHabits;

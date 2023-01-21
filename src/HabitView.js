import React from 'react';
import './HabitView.css';



function HabitView( {send} ) {

    const [habits, setHabits] = React.useState(["Running", "Swimming", "Sleeping Early", "Journaling", "Meditating"])

    const habitsDisplay = habits.map((habit) => {
        return (
            <div>
                <input type="checkbox" className="Habit" name="Habit1" value="Habit1" />
                <label for="vehicle1">{habit}</label><br />
            </div>
        )
    })



    return (
        <div className="HabitView">
            <header className="HabitView">
            <h1>Habit View</h1>
            {habitsDisplay}
            </header>
        </div>

    );
}

export default HabitView;

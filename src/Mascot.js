import React from 'react';
import "./Mascot.css"
import mascot from "./img/RabbitMascot.png"

function Mascot({send}) {
    return (
        <div>
            <h1>Daily Check In</h1>
            <img className="mascotlogo" src={mascot} alt="mascot" />
            <h2>How are you doing?</h2>
            <button onClick={() => {send("Click Go"); }}>Go</button>
        </div>
    );
}

export default Mascot;

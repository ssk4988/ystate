import './App.css';
import Login from "./Login.js"
import Landing from './Landing';
import Habits from './Habits';
import Profile from './Profile';
import Graph from './Graph';
import Signup from './Signup';
import Navbar from './Navbar';
import React from 'react'
import CollectionHabits from './CollectionHabits';
import { useInterpret, useMachine, useSelector } from "@xstate/react";
import { machine } from "./Machine";
import { getAuth } from "firebase/auth";

export default function App() {

  const auth = getAuth();
  const user2 = auth.currentUser;
  const [current, send] = useMachine(machine);
  const [user, updateUser] = React.useState(user2);

  if(current.matches("Login") && user){
    send("Click login");
  }
  

  return (
    <div className="App">
      <header className="App-header">
        {!current.matches("CollectionHabits") && <Navbar send={send} updateUser={updateUser}/>}
        {current.matches("Login") && <Login send={send} user={user} updateUser={updateUser} current={current} />}
        {current.matches("Landing") && <Landing send={send} current={current} />}
        {current.matches("Habits") && <Habits send={send}/>}
        {current.matches("Profile") && <Profile send={send}/>}
        {current.matches("CollectionHabits") && <CollectionHabits send={send} />}
        {current.matches("Data") && <Graph send={send}/>}
        {current.matches("Signup") && <Signup send={send}/>}
      </header>
    </div>
  );
}


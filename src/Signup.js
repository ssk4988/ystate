import React, { useEffect } from "react"
import './Signup.css';
import logo from "./img/habitly.png"
import * as firebase from "./firebase"
import Navbar from "./Navbar";
import { getAuth } from "firebase/auth";


function Signup() {
  const [formData, setFormData] = React.useState(
    { email: "", password: "", user: null, name: "" }
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      // console.log(prevFormData);
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  function updateUser(){
    const auth = getAuth();
    const user = auth.currentUser;
    console.log("User: ");
    console.log(user);
    if(user != null) return;
    if(user == null) return;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        user
      }
    });
  }
  function handleSignup(event) {
    // event.preventDefault();
    console.log(formData);
    if(formData.password.length < 6){
      alert("Password must be at least 6 characters.");
      return;
    }
    firebase.registerWithEmailAndPassword(formData.name, formData.email, formData.password);
    updateUser();
  }

  // useEffect(()=>{updateUser()}, [])
  updateUser();

  // console.log(formData.user);

  return (
    <div className="signup">
      <div className="signup__container">
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          className="signup__textBox"
          name="Name"
          value={formData.name}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          className="signup__textBox"
          value={formData.email}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={handleChange}
          className="signup__textBox"
          name="password"
          value={formData.password}
        />
        <button
          className="signup__btn"
          onClick={() => handleSignup()}
        >
          signup
        </button>
        <button className="signup__btn signup__google" onClick={firebase.signInWithGoogle}>
          Signup with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;

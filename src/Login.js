import React from "react"
import './Login.css';
import logo from "./img/habitly.png"
import * as firebase from "./firebase"
import Navbar from "./Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { send } from "xstate/lib/actions";


function Login(props) {
  const [formData, setFormData] = React.useState(
    { email: "", password: "", user: props.user }
  )

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      props.updateUser(user);
    });
  }, [])

  const auth = getAuth();
  const user = auth.currentUser;
  if (user || formData.user) {
    props.updateUser(user);
  }


  function handleChange(event) {
    setFormData(prevFormData => {
      // console.log(prevFormData);
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  function updateUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log("User: ");
    console.log(user);
    if (user && !formData.user) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          user
        }
      });
    }

  }
  function googleSignIn() {
    firebase.signInWithGoogle();
  }
  function handleLogin(event) {
    // event.preventDefault();
    console.log(formData);
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    firebase.logInWithEmailAndPassword(formData.email, formData.password);
    updateUser();
  }

  // useEffect(()=>{updateUser()}, [])
  updateUser();

  // console.log(formData.user);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          className="login__textBox"
          value={formData.email}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={handleChange}
          className="login__textBox"
          name="password"
          value={formData.password}
        />
        <button
          className="login__btn"
          onClick={() => handleLogin()}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={googleSignIn}>
          Login with Google
        </button>
        <div>
          Don't have an account?&nbsp;
          <button onClick={() => { props.send("Click signup"); }}> Register now</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

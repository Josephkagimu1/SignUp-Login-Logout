import { useRef, useState } from 'react';
import './App.css';
import { signUp, login, useAuth, logout } from './firebase';

export default function App() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setloading] = useState(false);
  const currentUser = useAuth();
  
  async function handleSignUp(){
    setloading(true);
    try {
    await signUp(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("Error");
    }
    setloading(false);
  }

  async function handleLogin(){
    setloading(true);
    try {
    await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("Error logging in !")
    }
    setloading(false);
  }

  async function handleLogout(){
    setloading(true);
    try {
    await logout(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("Error logging out !")
    }
    setloading(false);
  }
  
  return (
    <div className='main'>
      
      <h1> Log in and Sign up page </h1>

     {currentUser && <div id='ward'> <span> Logged in as </span> : {currentUser?.email} </div> }

      <input ref={emailRef} placeholder='Email'/>
      <input ref={passwordRef} type='password' placeholder='password' />

      <button disabled={loading || currentUser} onClick={handleSignUp} >Sign up</button>
      <button disabled={loading || currentUser} onClick={handleLogin} >Log in</button>
      <button disabled={loading || !currentUser} onClick={handleLogout} >Log out</button>
      
    </div>
  );
}

// export default App;

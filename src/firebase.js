// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { useState, useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXBug_VQCmAMJAIhrRY5hlew9J8ycxzNk",
  authDomain: "testing-myself-d3e61.firebaseapp.com",
  projectId: "testing-myself-d3e61",
  storageBucket: "testing-myself-d3e61.appspot.com",
  messagingSenderId: "474078088393",
  appId: "1:474078088393:web:a02e9c549a65e80da05118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}

export function logout(){
  return signOut(auth)
}

export function useAuth(){
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {setCurrentUser(user)} )
    return unsub
  }, [])

  return currentUser
  
}


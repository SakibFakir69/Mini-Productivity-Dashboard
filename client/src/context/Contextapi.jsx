import React, { createContext ,useState,useEffect} from "react";

import { auth } from "../firebase/config";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const MycontextProvider = createContext();
// context created

function Contextapi({ children }) {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState(null);

  const provider = new GoogleAuthProvider();
  // provider

  let signUp = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  // sign up with email and password

  const signUpWithGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };
  // signup with email

  const signOutHandel = () => {
    setloading(true);
    return signOut(auth);
  };
  // sign in with email

  const signIniWithEmailAndPassword = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign with google
  const Provider = new GoogleAuthProvider();
  const signInWithGoole = () => {
    setloading(true);
    return signInWithPopup(auth, Provider);
  };
  // siginin

  const authvalue = {
    loading,
    signUp,
    signUpWithGoogle,
    setloading,
    user,
    signOutHandel,
    signIniWithEmailAndPassword,
    signInWithGoole,
  };

  // effect

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setuser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <MycontextProvider.Provider value={authvalue}>
        {children}
      </MycontextProvider.Provider>
    </div>
  );
}

export default Contextapi;

import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 

const handleGooleSignIn = () =>{
   return signInWithPopup(auth, googleProvider)
   
}

const signIn = (email, password)=>{
 return signInWithEmailAndPassword(auth, email, password)

}
const signUp = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)  
}

const logOut = () =>{
   return signOut(auth);
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    });
    return () => {
      unsubscribe();
    }
}, [])
const AuthInfo = {
    handleGooleSignIn,
    signIn,
    signUp,
    user,
    logOut,
}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
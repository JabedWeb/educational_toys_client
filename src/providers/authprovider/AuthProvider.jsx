import React, { createContext, useEffect, useState } from 'react'
import { getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import app from '../../firebase/firebase.config';

export const authContext =  createContext(null);
const auth=getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loader,setLoader]=useState(false);
    const [user,setUser]=useState(null);

    //google sign in
    const loginUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn=(email,password)=>{
      return signInWithEmailAndPassword(auth, email, password)
  }
    const signInWithGoogle=()=>{
    return signInWithPopup(auth, provider);
    }
    const SignOut=()=>{
      return signOut(auth);

  }
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser);
            setLoader(false)
        }
        else{
            setUser(null);
            setLoader(false)
        }

    });
    return ()=>unsubscribe();

},[user])
    const authInfo={
        loader,
        user,
        loginUser,
        signIn,
        signInWithGoogle,
        SignOut
    }
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider
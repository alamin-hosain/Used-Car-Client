import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false)
        })
        return () => unsubscribe();

    }, [])

    // 1. Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 2. Sign In 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 3. LogOut
    const logOut = () => {
        return signOut(auth)
    }

    // 4. Google Sign In
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const authInfo = { user, loading, createUser, signIn, logOut, googleSignIn };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
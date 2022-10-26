import React from 'react';
import { createContext } from 'react';
import { app } from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'

export const AuthProvider = createContext();

const auth = getAuth(app);

const AuthContext = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const verifyUserEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    
    const authValue = {
        createUser,
        updateUserProfile,
        verifyUserEmail,
        passwordReset,
        userLogin,
        providerLogin,
        
    }

    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
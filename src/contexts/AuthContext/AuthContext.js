import React from 'react';
import { createContext } from 'react';
import { app } from '../../firebase/firebase.config';
import {getAuth} from 'firebase/auth'

export const AuthProvider = createContext();

const auth = getAuth(app);

const AuthContext = ({ children }) => {

    const userName = { name: "Zahid" }
    const authValue = { userName }

    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
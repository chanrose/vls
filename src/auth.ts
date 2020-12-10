import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth as firebaseAuth } from './firebase';

interface Auth {
    loggedIn: boolean;
    userId?: string;
}

interface AuthInit {
    loading: boolean;
    auth?: Auth;
}
interface ThemeContextInt {
    mode: any;
    setMode?: any;
}

export const AuthContext = React.createContext<Auth>({ loggedIn: false });
export const OrgContext = React.createContext({organization: ""});
export const UserContext = React.createContext({organization: "", name: ""});/* 
export const ThemeContext = React.createContext<ThemeContextInt>({themeMode, setThemeMode}); */

export const ThemeContext = React.createContext<ThemeContextInt>({mode: false}); 

export function useAuth(): Auth {
    return useContext(AuthContext);
}

export function useAuthInit() : AuthInit {
    const [authState, setAuthInit] = useState<AuthInit>({loading: true});
    useEffect(() => {
      return firebaseAuth.onAuthStateChanged((firebaseUser) => {
            const auth = firebaseUser ?
                {loggedIn: true, userId: firebaseUser.uid } :
                {loggedIn: false};
            setAuthInit({loading: false, auth});
      });
    }, []);
    return authState;
}
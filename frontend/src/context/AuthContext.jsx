import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth } from '../firebase'; 
// import { 
//     createUserWithEmailAndPassword, 
//     signInWithEmailAndPassword, 
//     signOut, 
//     onAuthStateChanged 
// } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Check localStorage for persisted mock user
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('mock_user');
        return saved ? JSON.parse(saved) : null;
    });
    const [loading, setLoading] = useState(false);

    // Firebase listener typically goes here. For now we skip it.

    const login = async (email, password) => {
        // MOCK LOGIN SUCCESS
        const mockUser = { email: email || 'guest@example.com', uid: 'guest-123' };
        setUser(mockUser);
        localStorage.setItem('mock_user', JSON.stringify(mockUser));
        return Promise.resolve(mockUser);
    };

    const signup = async (email, password) => {
        // MOCK SIGNUP SUCCESS
        return login(email, password);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('mock_user');
        return Promise.resolve();
    };

    const updateUserProfile = (userData) => {
        const updatedUser = { ...user, ...userData };
        setUser(updatedUser);
        localStorage.setItem('mock_user', JSON.stringify(updatedUser));
    };

    const value = {
        user,
        signup,
        login,
        logout,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

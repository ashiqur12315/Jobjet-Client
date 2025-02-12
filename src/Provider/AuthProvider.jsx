import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [on, setOn] = useState(false);
    const [reload, setReload] = useState(false)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser , {
            displayName: name,
            photoURL: photo
        });
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const googleProvider = new GoogleAuthProvider;
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubProvider = new GithubAuthProvider;
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the state auth changed', currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            setLoading(false);
            setOn(false)

            if(currentUser){
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {withCredentials: true})
                .then(() => {
                    // console.log('Token response',res.data)
                })
            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, {withCredentials: true})
                .then(() => {
                    // console.log(res.data)
                })
            }
            
        });
        return () => {
            unSubscribe();
        }
    }, [on, user?.email])

    const authInfo = { createUser , signIn , user, logOut, loading, signInWithGoogle, signInWithGithub, updateUserProfile,
                        on, setOn, setLoading, reload, setReload}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
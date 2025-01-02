import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext,useContext, useState,useEffect} from "react";

import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const AuthContext=createContext();

export const useAuth=()=>{
    return useContext(AuthContext);
}

export const AuthProvide=({children})=>{

    const [currentUser, setCurrentUser] =useState(null)
    const [loading,setLoading]=useState(true);
    //registering a user
    const registerUser=async(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // login a user

    const loginUser=async(email,password)=>{
        return await signInWithEmailAndPassword(auth,email,password)
    }

    //sign up with gmail

    const signInwithgoogle=async()=>{
        return await signInWithPopup(auth,googleProvider)

    }

    //logout user
    const logout=()=>{
        return signOut(auth)
    }
    //manage user
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if(user) {
               
                const {email, displayName, photoURL} = user;
                const userData = {
                    email, username: displayName, photo: photoURL
                } 
            }
        })

        return () => unsubscribe();
    }, [])

    const value={
       currentUser,
       loading,
       registerUser,
       loginUser,
       signInwithgoogle,
       logout,
       

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
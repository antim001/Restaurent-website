import { createContext, useState, useEffect } from 'react';
import { getAuth,onAuthStateChanged ,createUserWithEmailAndPassword,signInWithPopup,
    signInWithEmailAndPassword,GoogleAuthProvider,signOut,updateProfile} from "firebase/auth";
import { app } from './../Firebase/firebase.config';
import useAxiosPublic from './../hooks/useAxiosPublic';
export const AuthContext=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);
    const googleprovider= new GoogleAuthProvider()
    const axiosPublic=useAxiosPublic()
   
    const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        setLoading(true)
       return  signOut(auth)
    }
 const googleSignIn=()=>{
     setLoading(true);
     return signInWithPopup(auth,googleprovider)
 }
    const updateUser=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName:name , photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            if(currentUser){
                const userInfo={email: currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            console.log(currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubscribe();
        }
    },[axiosPublic])
      const authInfo={
        user,
        loading,googleSignIn,
        createUser,signIn,logOut,updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
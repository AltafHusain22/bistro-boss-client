/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const auth = getAuth(app);

	// create user 
	const createUser =(email, password)=>{
		setLoading(true)
		return createUserWithEmailAndPassword(auth , email , password)
	}

	// signIn user 
	const loginUser =(email, password)=>{
		setLoading(true)
		return signInWithEmailAndPassword(auth , email , password)
	}
	
	// signOut
	const logOut =()=>{
		setLoading(true)
		return signOut(auth)
	}


	//  user obsevation
	useEffect(()=>{
		const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
			setUser(currentUser)
		})

		return()=>{
			return unsubscribe()
		}
	},[])


	const authinfo = {
		user,
		loading,
		createUser,
		loginUser,
		logOut,
	}

	return (
		<AuthContext.Provider value={authinfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
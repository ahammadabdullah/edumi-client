import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../config/config.firebase";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createAccWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      setUser(currentUser);
      setLoading(false);
      const loggedUser = { email: userEmail };
      console.log(currentUser);
      // const url = "https://community-food-share-server.vercel.app/jwt";
      // if (currentUser) {
      //   axios
      //     .post(url, loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => console.log(res.data));
      // } else {
      //   axios
      //     .post(
      //       "https://community-food-share-server.vercel.app/logout",
      //       loggedUser,
      //       {
      //         withCredentials: true,
      //       }
      //     )
      //     .then((res) => console.log("cookie cleared", res.data));
      // }
    });
    return () => {
      unsubscribe();
    };
  }, [user?.email]);

  const Authentication = {
    createAccWithEmailPass,
    signInWithEmailPass,
    googleLogin,
    logout,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={Authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign up user
  let signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign In User
  let signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  let signOutUser = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  // Google Sign In
  const googleProvider = new GoogleAuthProvider();
  let googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Auth State Change === Track user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        // verfify token
        let user = { email: currentUser.email };
        axios
          .post("https://job-portal-server-ten-mu.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then(() => {
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://job-portal-server-ten-mu.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    signUp,
    signIn,
    signOutUser,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

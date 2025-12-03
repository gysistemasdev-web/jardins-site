// src/components/firebase/auth.ts
import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";

export const loginAdmin = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutAdmin = () => {
  return signOut(auth);
};

export const listenAuth = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

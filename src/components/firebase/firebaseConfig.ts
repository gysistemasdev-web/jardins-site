// src/components/firebase/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW3F-kprcrarnwxeBqwsi5jR51x76Fw6g",
  authDomain: "jardins-sao-paulo.firebaseapp.com",
  projectId: "jardins-sao-paulo",
  storageBucket: "jardins-sao-paulo.firebasestorage.app",
  messagingSenderId: "557304842006",
  appId: "1:557304842006:web:4554d6f713401210827237",
  measurementId: "G-BLMDSY7BZL"
};

// Inicializar o app
const app = initializeApp(firebaseConfig);

// Exportar Firestore e Auth para usar no projeto
export const db = getFirestore(app);
export const auth = getAuth(app);

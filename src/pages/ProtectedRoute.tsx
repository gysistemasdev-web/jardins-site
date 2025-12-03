import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../components/firebase/firebaseConfig";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

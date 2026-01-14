import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Admin pages
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* ROTA DO SEU SITE NORMAL */}
        <Route
          path="/"
          element={
            <div
              className={`min-h-screen bg-slate-50 transition-opacity duration-1000 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <Header />
              <Hero />
              <About />
              <Services />
              <Process />
              <Portfolio />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* LOGIN DO ADMIN */}
        <Route path="/login" element={<AdminLogin />} />

        {/* PAINEL ADMIN PROTEGIDO */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

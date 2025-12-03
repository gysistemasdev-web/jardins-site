import React, { useState } from "react";
import { loginAdmin } from "../components/firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await loginAdmin(email, password);
      nav("/admin");
    } catch (err) {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">
          Painel Admin
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border px-4 py-3 rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full border px-4 py-3 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#556B2F] hover:bg-[#465726] text-white py-3 rounded-xl font-semibold"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

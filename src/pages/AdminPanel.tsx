import React, { useEffect, useState } from "react";
import { db } from "../components/firebase/firebaseConfig";
import { logoutAdmin, listenAuth } from "../components/firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const nav = useNavigate();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [tips, setTips] = useState<any[]>([]);
  const [newTip, setNewTip] = useState("");

  useEffect(() => {
    const unsub = listenAuth((currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (!currentUser) {
        nav("/login");
      }
    });

    return unsub;
  }, []);

  // LER DICAS
  const loadTips = async () => {
    const snap = await getDocs(collection(db, "dicas"));
    const arr: any[] = [];
    snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
    setTips(arr);
  };

  useEffect(() => {
    loadTips();
  }, []);

  // CRIAR
  const createTip = async () => {
    if (!newTip.trim()) return;

    await addDoc(collection(db, "dicas"), {
      texto: newTip,
      created: new Date()
    });

    setNewTip("");
    loadTips();
  };

  // EDITAR
  const editTip = async (id: string, text: string) => {
    await updateDoc(doc(db, "dicas", id), { texto: text });
    loadTips();
  };

  // APAGAR
  const removeTip = async (id: string) => {
    await deleteDoc(doc(db, "dicas", id));
    loadTips();
  };

  if (loading) return <div className="p-10 text-center">Carregando...</div>;

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Painel Administrativo
          </h2>

          <button
            className="px-4 py-2 bg-red-500 text-white rounded-xl"
            onClick={() => {
              logoutAdmin();
              nav("/login");
            }}
          >
            Sair
          </button>
        </div>

        <h3 className="text-xl font-bold mb-4">Dica da Semana</h3>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            className="flex-1 border px-4 py-3 rounded-xl"
            placeholder="Digite a nova dica..."
            value={newTip}
            onChange={(e) => setNewTip(e.target.value)}
          />
          <button
            className="px-5 py-3 bg-[#556B2F] text-white rounded-xl"
            onClick={createTip}
          >
            Adicionar
          </button>
        </div>

        {/* LISTA */}
        <div className="space-y-4">
          {tips.map((tip) => (
            <div key={tip.id} className="border p-4 rounded-xl flex justify-between">
              <input
                defaultValue={tip.texto}
                onBlur={(e) => editTip(tip.id, e.target.value)}
                className="flex-1 bg-transparent outline-none"
              />

              <button
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-xl"
                onClick={() => removeTip(tip.id)}
              >
                Apagar
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;

"use client";

import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { useCompany } from "../context/CompanyContext";


export default function SettingsPage() {
  const { company, updateCompany } = useCompany();
  const [formData, setFormData] = useState(company);
  const [message, setMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setFormData(company);
  }, [company])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await updateCompany(formData);
    setMessage("Configurações salvas com sucesso!")
    setFadeOut(false);

    setTimeout(() => {
      setFadeOut(true);
    }, 2000)

    setTimeout(() => {
      setMessage("")
    }, 3000)
  }

  return (
    <div className="flex">
      <SideBar />
      <div className="m-auto p-6 h-screen  flex-1 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Configurações</h2>

        {message && (
          <div
            className={`mb-4 text-green-600 text-center font-semibold transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"
              }`}
          >
            {message}
          </div>
        )}

        <div className="flex flex-row items-center gap-3 mb-5">
          <label className="block text-sm font-medium text-gray-500">Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-`30%` p-2 border rounded text-gray-600"
          />

          <label className="block text-sm font-medium text-gray-500">Logo (URL):</label>
          <input
            type="text"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            className="w-`30%` p-2 border rounded"
          />
        </div>

        <div className="flex items-center justify-around">
          <div className="flex items-center mb-6 gap-4">
            <label className="block text-sm font-medium">Cor Primária:</label>
            <input
              type="color"
              name="primaryColor"
              value={formData.primaryColor}
              onChange={handleChange}
              className="h-10 w-10 border-none rounded-full appearance-none cursor-pointer"
            />
          </div>

          <div className="flex items-center mb-6 gap-4">
            <label className="block text-sm font-medium">Cor Secundária:</label>
            <input
              type="color"
              name="secondaryColor"
              value={formData.secondaryColor}
              onChange={handleChange}
              className="h-10 w-10 border-none rounded-full appearance-none cursor-pointer"
            />
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={handleSave}>
          Salvar
        </button>
      </div>
    </div>
  );
}

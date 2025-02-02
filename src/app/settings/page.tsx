"use client";

import { useCompany } from "../context/CompanyContext";


export default function SettingsPage() {
  const { company, updateCompany } = useCompany();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCompany({ [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Configurações</h2>

      <label className="block text-sm font-medium">Nome:</label>
      <input
        type="text"
        name="name"
        value={company.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block text-sm font-medium">Cor Primária:</label>
      <input
        type="color"
        name="primaryColor"
        value={company.primaryColor}
        onChange={handleChange}
        className="w-full h-10 p-2 border rounded mb-4"
      />

      <label className="block text-sm font-medium">Logo (URL):</label>
      <input
        type="text"
        name="logo"
        value={company.logo}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Salvar
      </button>
    </div>
  );
}

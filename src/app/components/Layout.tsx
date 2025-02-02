"use client";

import { useCompany } from "../context/CompanyContext";


export default function Layout({ children }: { children: React.ReactNode }) {
  const { company } = useCompany();

  return (
    <div className="min-h-screen" style={{ backgroundColor: company.primaryColor }}>
      <header className="flex items-center p-4 bg-white shadow-md">
        <img src={company.logo} alt="Logo" className="w-16 h-16 mr-4" />
        <h1 className="text-2xl font-bold">{company.name}</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}

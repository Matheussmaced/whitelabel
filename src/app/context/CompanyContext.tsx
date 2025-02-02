"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Company } from "../model/types";


interface CompanyContextProps {
  company: Company;
  updateCompany: (data: Partial<Company>) => void;
}

const CompanyContext = createContext<CompanyContextProps | undefined>(undefined);

export const CompanyProvider = ({ children }: { children: React.ReactNode }) => {
  const [company, setCompany] = useState<Company>({
    id: "1",
    name: "Minha Empresa",
    logo: "/default-logo.png",
    primaryColor: "#0070f3",
    secondaryColor: "#0070f0"
  });

  useEffect(() => {
    axios.get("/api/company").then((res) => setCompany(res.data));
  }, []);

  const updateCompany = async (data: Partial<Company>) => {
    const res = await axios.put("/api/company", data);
    setCompany(res.data);
  };

  return (
    <CompanyContext.Provider value={{ company, updateCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
};

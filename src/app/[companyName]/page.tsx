"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import CardComponent from "../components/card";

export default function Company() {
  const { companyName } = useParams() as { companyName?: string };

  const [company, setCompany] = useState({
    name: decodeURIComponent(companyName || "Carregando..."),
    logo: "/next.svg",
    primaryColor: "#0070f3",
    secondaryColor: "#fff"
  });

  useEffect(() => {
    if (!companyName) return;

    fetch(`/api/company?name=${decodeURIComponent(companyName)}`)
      .then((res) => res.json())
      .then((data) => setCompany(data))
      .catch((err) => console.error("Erro ao buscar empresa:", err));
  }, [companyName]);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: company.primaryColor }}
    >
      <main className="text-center mb-28">
      <div className="" style={{backgroundColor: company.secondaryColor}}>
        <Image
            className="dark:invert m-auto"
            src={company.logo}
            alt="Company Logo"
            width={156}
            height={127}
            priority
           /> 

          <h1 className="text-1xl" style={{ color: company.secondaryColor }}>{company.name}</h1>
        </div>
      </main>

      <div className="grid grid-cols-3 gap-28 justify-around items-center mx-auto w-fit pb-10">
       <CardComponent />
       <CardComponent />
       <CardComponent />
       <CardComponent />
       <CardComponent />
       <CardComponent />
      </div>
    </div>
  );
}

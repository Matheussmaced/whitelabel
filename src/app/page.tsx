"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [company, setCompany] = useState({
    name: "Carregando...",
    logo: "/next.svg",
    primaryColor: "#0070f3",
    secondaryColor: "#fff"
  });

  useEffect(() => {
    fetch("/api/company")
      .then((res) => res.json())
      .then((data) => setCompany(data))
      .catch((err) => console.error("Erro ao buscar empresa:", err));
  }, []);

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      style={{ backgroundColor: company.primaryColor }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src={company.logo}
          alt="Company Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl" style={{ color: company.secondaryColor }}>{company.name}</h1>
      </main>
    </div>
  );
}

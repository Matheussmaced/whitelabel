import { Coffee } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CardComponent() {
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
    <div style={{backgroundColor: company.secondaryColor}} className="text-white w-44 p-5 flex flex-col gap-1 text-center rounded-2xl">
      <Coffee className="m-auto" size={50}/>
      <h2 className="text-1xl">CAFÉ - 50g</h2>
      <span className="font-bold">R$ 100,00</span>
      <button className="py-1 px-3 cursor-pointer rounded-sm" style={{backgroundColor: company.primaryColor}}>Comprar</button>
    </div>
  )
}
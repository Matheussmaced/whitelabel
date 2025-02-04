"use client";

import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { useCompany } from "../context/CompanyContext";
import { Download, FolderPen, Palette } from "lucide-react";
import Image from "next/image";


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
    <>
      <div className="flex bg-background h-screen z-20">
        <SideBar />
        <div className="m-auto h-screen  flex-1 z-20">
          <div className="bg-white py-4 border-b-4 border-customBeige mb-28">
            <h2 className=" font-medium mb-4 text-center text-textColor text-3xl mt-2">Configurações</h2>
          </div>

          <div className="flex justify-center">

            {message && (
              <div
                className={`mb-6 -mt-16 px-3 py-2 w-96 rounded-2xl border border-[#3FCC33] flex justify-center text-textColor bg-greenBackground text-center font-semibold transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"
                  }`}
              >
                {message}
              </div>
            )}

          </div>

          <div className="max-w-4xl m-auto">
            <div className="flex flex-row items-center gap-3 mb-5 justify-between">
              <div className="flex items-center gap-3">
                <div className="flex">
                  <FolderPen className="z-10" />
                  <div className='absolute bg-customBeige p-3 rounded-full flex-1 ml-2'></div>
                </div>
                <label className="block font-medium text-textColor ">Nome do site:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-`30%` p-1 border rounded text-gray-600"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex">
                  <Download className="z-10" />
                  <div className='absolute bg-customBeige p-3 rounded-full flex-1 ml-2'></div>
                </div>
                <label className="block font-medium text-textColor">Logo (URL):</label>
                <input
                  type="text"
                  name="logo"
                  value={formData.logo}
                  onChange={handleChange}
                  className="w-`30%` p-2 border rounded"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-14">
              <div className="flex items-center mb-6 gap-4">
                <div className="flex">
                  <Palette className="z-10" />
                  <div className='absolute bg-customBeige p-3 rounded-full flex-1 ml-2'></div>
                </div>
                <label className="block font-medium text-textColor">Cor de fundo:</label>
                <input
                  type="color"
                  name="primaryColor"
                  value={formData.primaryColor}
                  onChange={handleChange}
                  className="h-10 w-10 border-none rounded-full appearance-none cursor-pointer"
                />
              </div>

              <div className="flex items-center mb-6 gap-4">
                <div className="flex">
                  <Palette className="z-10" />
                  <div className='absolute bg-customBeige p-3 rounded-full flex-1 ml-2'></div>
                </div>
                <label className="block font-medium text-textColor">Cor Secundária:</label>
                <input
                  type="color"
                  name="secondaryColor"
                  value={formData.secondaryColor}
                  onChange={handleChange}
                  className="h-10 w-10 border-none rounded-full appearance-none cursor-pointer"
                />
              </div>

              <div className="flex items-center mb-6 gap-4">
                <div className="flex">
                  <Palette className="z-10" />
                  <div className='absolute bg-customBeige p-3 rounded-full flex-1 ml-2'></div>
                </div>
                <label className="block font-medium text-textColor">Cor do texto:</label>
                <input
                  type="color"
                  name="textColor"
                  value={formData.textColor}
                  onChange={handleChange}
                  className="h-10 w-10 border-none rounded-full appearance-none cursor-pointer"
                />
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-14" onClick={handleSave}>
              Salvar
            </button>

          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-10">
        <Image
          src="./engine.svg"
          width={300}
          height={400}
          alt="Foto de engrenagens"
        />
      </div>
    </>
  );
}

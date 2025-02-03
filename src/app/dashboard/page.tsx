"use client"

import { SideBar } from "../components/SideBar";
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="flex items-center lex bg-gradient-to-t from-[#D8D2FF] via-[#FFFFFF] to-[#A395FF] h-screen">
      <SideBar />
      <div className="h-screen">
        <div>
          <Image
            src="/vector.svg"
            width={580}
            height={597}
            alt='Imagem da logo de Matheus Engenheiro'
            className='mx-auto absolute bottom-0 right-1'
          />
        </div>
      </div>
    </div>
  )
}
import Link from 'next/link'
import { useCompany } from '../context/CompanyContext';
import Image from 'next/image';
import { House, Settings } from 'lucide-react';

export function SideBar() {
  const { company } = useCompany();


  return (
    <main className='bg-white w-60 h-screen flex flex-col  font-mono text-colorText text-center ml-3'>
      <div className='border-b-4 border-gradient-to-t from-[#D8D2FF] via-[#FFFFFF] to-[#A395FF] ... w-`100%` py-2'>
        <Image
          src="/MatheusLOGO.png"
          width={100}
          height={100}
          alt='Imagem da logo de Matheus Engenheiro'
          className='mx-auto'
        />
      </div>
      <div className='flex flex-col p-10 gap-10 '>
        <div className='flex items-center gap-3'>
          <div className='flex'>
            <House className='z-10' />
            <div className='absolute bg-customBeige p-3 rounded-full flex-1 ml-2'></div>
          </div>
          <Link href={`/${company.name}`} className='font-bold text-textColor'>Meu site</Link>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex'>
            <Settings className='z-10' />
            <div className='absolute bg-customBeige p-3 rounded-full flex-1 ml-2'></div>
          </div>
          <Link href='/settings' className='font-bold text-textColor'>Configurações</Link>
        </div>
      </div>
    </main>
  )
}
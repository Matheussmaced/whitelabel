import Link from 'next/link'
import { useCompany } from '../context/CompanyContext';

export function SideBar() {
  const { company } = useCompany();

  return (
    <main className='bg-background w-`100%` h-screen flex flex-col gap-3 p-5 font-mono text-colorText text-center'>
      <Link href={`/${company.name}`}>Meu site</Link>
      <Link href='/settings'>Configurações</Link>
    </main>
  )
}
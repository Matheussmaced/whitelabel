import Link from 'next/link'

export function SideBar() {
  return (
    <main className='bg-background w-`100%` flex flex-col gap-3 p-5 font-mono text-colorText text-center'>
      <Link href='/'>Meu site</Link>
      <Link href='/settings'>Configurações</Link>
    </main>
  )
}
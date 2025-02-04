import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-background">
      <div className="bg-slate-50 py-3 justify-center flex gap-5">
        <Link href="/createAccount">
          <button className="bg-background text-white py-1 px-5 rounded-2xl">Criar conta</button>
        </Link>
        <Link href="/login">
          <button className="border border-background py-1 px-5 rounded-2xl">Registrar</button>
        </Link>
      </div>
    </div>
  )
}
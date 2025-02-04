import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="h-screen bg-background flex justify-center">
      <div className="bg-white flex flex-col my-auto py-12 px-28 gap-3 rounded-xl">
        <h1 className="text-center">Criar conta</h1>
        <input type="email" placeholder="email" className="py-2 px-5 border border-background rounded-xl" />

        <input type="password" placeholder="senha" className="py-2 px-5 border border-background rounded-xl" />

        <button className="bg-background text-white py-2 px-4 rounded-xl">Criar</button>

        <div className="flex gap-2">
          <p>Você já possui conta?</p>
          <Link href="/login" className="text-background">
            Faça o login
          </Link>
        </div>
      </div>
    </div >
  )
}
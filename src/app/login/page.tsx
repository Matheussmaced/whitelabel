import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen bg-background flex justify-center">
      <div className="bg-white flex flex-col my-auto py-12 px-20 gap-3 rounded-xl">
        <h1 className="text-center">Entrar na conta</h1>
        <input type="email" placeholder="email" className="py-2 px-5 border border-background rounded-xl" />

        <input type="password" placeholder="senha" className="py-2 px-5 border border-background rounded-xl" />

        <button className="bg-background text-white py-2 px-4 rounded-xl">Entrar</button>

        <div className="flex gap-2">
          <p>Você não possui uma conta?</p>
          <Link href="/createAccount" className="text-background">
            Crie uma conta
          </Link>
        </div>
      </div>
    </div >
  )
}
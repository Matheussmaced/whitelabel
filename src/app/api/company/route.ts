import { NextResponse } from "next/server";

let companyData = {
  id: "1",
  name: "Minha Empresa",
  logo: "/default-logo.png",
  primaryColor: "#0070f3",
};

// GET empresa
export async function GET() {
  return NextResponse.json(companyData);
}

// PUT para atualizar a empresa
export async function PUT(req: Request) {
  const newData = await req.json();
  companyData = { ...companyData, ...newData };
  return NextResponse.json(companyData);
}
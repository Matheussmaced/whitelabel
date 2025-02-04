import { NextResponse } from "next/server";

let companyData = {
  id: "1",
  name: "Minha Empresa",
  logo: "/default-logo.png",
  primaryColor: "#0070f3",
  secondaryColor: "#0070f0",
  textColor: "#fff",
};

export async function GET() {
  return NextResponse.json(companyData);
}

export async function PUT(req: Request) {
  const newData = await req.json();
  companyData = { ...companyData, ...newData };
  return NextResponse.json(companyData);
}
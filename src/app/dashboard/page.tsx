"use client"

import { SideBar } from "../components/SideBar";

export default function Dashboard() {
  return (
    <div className="flex items-center">
      <SideBar />
      <div className="h-screen">
        <h1>Dashboard</h1>
      </div>

    </div>
  )
}
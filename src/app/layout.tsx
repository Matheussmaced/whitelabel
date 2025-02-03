import "./globals.css";
import { Rubik } from "next/font/google";

import { CompanyProvider } from "./context/CompanyContext";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={rubik.variable}>
      <body>
        <CompanyProvider>{children}</CompanyProvider>
      </body>
    </html>
  );
}

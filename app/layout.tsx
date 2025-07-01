import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CalendarioTech - Hub Central para Eventos de Tecnologia",
  description: "Portal unificado para descoberta e divulgação de eventos de tecnologia",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-dracula-bg text-dracula-fg">
          <Navigation />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  )
}

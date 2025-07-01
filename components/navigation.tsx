"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, FileText, Plus, Settings, Heart } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Agenda", icon: Calendar },
    { href: "/articles", label: "Artigos", icon: FileText },
    { href: "/manifesto", label: "Manifesto", icon: Heart },
    { href: "/submit-event", label: "Submeter Evento", icon: Plus },
    { href: "/admin", label: "Admin", icon: Settings },
  ]

  return (
    <nav className="bg-dracula-current-line border-b border-dracula-comment">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-dracula-purple">
            CalendarioTech
          </Link>

          <div className="flex space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-dracula-purple text-dracula-bg"
                      : "text-dracula-fg hover:bg-dracula-bg hover:text-dracula-cyan"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

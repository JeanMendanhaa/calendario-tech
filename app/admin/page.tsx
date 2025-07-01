"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventManagement } from "@/components/admin/event-management"
import { ArticleManagement } from "@/components/admin/article-management"
import { checkAuth, logout } from "@/lib/auth"
import { LogOut } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const authenticated = checkAuth()
    if (!authenticated) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-dracula-comment">Carregando...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-dracula-purple mb-2">Painel Administrativo</h1>
          <p className="text-dracula-comment">Gerencie eventos e artigos submetidos</p>
        </div>

        <Button
          onClick={handleLogout}
          variant="outline"
          className="border-dracula-red text-dracula-red hover:bg-dracula-red hover:text-dracula-bg bg-transparent"
        >
          <LogOut size={18} className="mr-2" />
          Sair
        </Button>
      </div>

      <Tabs defaultValue="events" className="space-y-6">
        <TabsList className="bg-dracula-current-line">
          <TabsTrigger
            value="events"
            className="data-[state=active]:bg-dracula-purple data-[state=active]:text-dracula-bg"
          >
            Eventos Pendentes
          </TabsTrigger>
          <TabsTrigger
            value="articles"
            className="data-[state=active]:bg-dracula-purple data-[state=active]:text-dracula-bg"
          >
            Artigos Pendentes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="events">
          <EventManagement />
        </TabsContent>

        <TabsContent value="articles">
          <ArticleManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}

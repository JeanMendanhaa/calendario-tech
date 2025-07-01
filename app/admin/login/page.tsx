"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { login } from "@/lib/auth"

export default function AdminLoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    const success = login(username, password)

    if (success) {
      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando para o painel administrativo...",
      })
      router.push("/admin")
    } else {
      toast({
        title: "Credenciais inválidas",
        description: "Verifique seu usuário e senha.",
        variant: "destructive",
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-dracula-purple mb-4">Acesso Administrativo</h1>
        <p className="text-dracula-comment">Entre com suas credenciais para acessar o painel</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 dracula-card p-6 rounded-lg">
        <div>
          <Label htmlFor="username" className="text-dracula-fg">
            Usuário
          </Label>
          <Input
            id="username"
            name="username"
            required
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            placeholder="Usuário"
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-dracula-fg">
            Senha
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            placeholder="Senha"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-dracula-purple hover:bg-dracula-pink text-dracula-bg"
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </div>
  )
}

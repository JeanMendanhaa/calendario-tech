"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { submitArticle } from "@/lib/data"

export default function SubmitArticlePage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    "Inteligência Artificial",
    "Machine Learning",
    "Desenvolvimento Web",
    "Mobile",
    "DevOps",
    "Segurança",
    "Cloud Computing",
    "Data Science",
    "Blockchain",
    "IoT",
    "Arquitetura de Software",
    "Outros",
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const articleData = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      author: formData.get("author") as string,
      email: formData.get("email") as string,
      abstract: formData.get("abstract") as string,
      content: formData.get("content") as string,
      tags: (formData.get("tags") as string).split(",").map((tag) => tag.trim()),
      url: formData.get("url") as string,
    }

    try {
      await submitArticle(articleData)
      toast({
        title: "Artigo submetido com sucesso!",
        description: "Seu artigo foi enviado para aprovação e será analisado em breve.",
      })

      // Reset form
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      toast({
        title: "Erro ao submeter artigo",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-dracula-purple mb-4">Submeter Artigo</h1>
        <p className="text-dracula-comment">Compartilhe seu conhecimento com a comunidade</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 dracula-card p-6 rounded-lg">
        <div>
          <Label htmlFor="title" className="text-dracula-fg">
            Título do Artigo *
          </Label>
          <Input id="title" name="title" required className="bg-dracula-bg border-dracula-comment text-dracula-fg" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="category" className="text-dracula-fg">
              Categoria *
            </Label>
            <Select name="category" required>
              <SelectTrigger className="bg-dracula-bg border-dracula-comment text-dracula-fg">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent className="bg-dracula-current-line border-dracula-comment">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-dracula-fg">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="author" className="text-dracula-fg">
              Autor *
            </Label>
            <Input
              id="author"
              name="author"
              required
              className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-dracula-fg">
            Email do Autor *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
          />
        </div>

        <div>
          <Label htmlFor="abstract" className="text-dracula-fg">
            Resumo/Abstract *
          </Label>
          <Textarea
            id="abstract"
            name="abstract"
            required
            rows={3}
            placeholder="Breve resumo do artigo..."
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
          />
        </div>

        <div>
          <Label htmlFor="content" className="text-dracula-fg">
            Conteúdo Completo *
          </Label>
          <Textarea
            id="content"
            name="content"
            required
            rows={10}
            placeholder="Conteúdo completo do artigo..."
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
          />
        </div>

        <div>
          <Label htmlFor="tags" className="text-dracula-fg">
            Tags
          </Label>
          <Input
            id="tags"
            name="tags"
            placeholder="Ex: javascript, react, nodejs (separadas por vírgula)"
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
          />
        </div>

        <div>
          <Label htmlFor="url" className="text-dracula-fg">
            Link Externo (opcional)
          </Label>
          <Input
            id="url"
            name="url"
            type="url"
            placeholder="https://exemplo.com/artigo"
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-dracula-green hover:bg-dracula-cyan text-dracula-bg"
        >
          {isSubmitting ? "Submetendo..." : "Submeter Artigo"}
        </Button>
      </form>
    </div>
  )
}

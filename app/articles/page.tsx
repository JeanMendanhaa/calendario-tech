"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArticleCard } from "@/components/article-card"
import { getArticles } from "@/lib/data"
import { Plus, Search } from "lucide-react"
import type { Article } from "@/lib/types"

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setArticles(getArticles())
  }, [])

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-dracula-purple mb-2">Artigos Técnicos</h1>
          <p className="text-dracula-comment">Conhecimento compartilhado pela comunidade</p>
        </div>

        <Link href="/submit-article">
          <Button className="bg-dracula-green hover:bg-dracula-cyan text-dracula-bg">
            <Plus size={18} className="mr-2" />
            Submeter Artigo
          </Button>
        </Link>
      </div>

      <div className="relative max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dracula-comment" />
        <Input
          placeholder="Buscar artigos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-dracula-current-line border-dracula-comment text-dracula-fg"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dracula-comment text-lg">
            {searchTerm ? "Nenhum artigo encontrado." : "Nenhum artigo publicado ainda."}
          </p>
        </div>
      )}
    </div>
  )
}

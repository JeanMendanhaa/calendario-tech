"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArticleCard } from "@/components/article-card"
import { getPendingArticles, approveArticle, rejectArticle } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"
import { Check, X } from "lucide-react"
import type { Article } from "@/lib/types"

export function ArticleManagement() {
  const [pendingArticles, setPendingArticles] = useState<Article[]>([])
  const { toast } = useToast()

  useEffect(() => {
    setPendingArticles(getPendingArticles())
  }, [])

  const handleApprove = async (articleId: string) => {
    try {
      await approveArticle(articleId)
      setPendingArticles((prev) => prev.filter((article) => article.id !== articleId))
      toast({
        title: "Artigo aprovado!",
        description: "O artigo foi publicado na seção de artigos.",
      })
    } catch (error) {
      toast({
        title: "Erro ao aprovar artigo",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      })
    }
  }

  const handleReject = async (articleId: string) => {
    try {
      await rejectArticle(articleId)
      setPendingArticles((prev) => prev.filter((article) => article.id !== articleId))
      toast({
        title: "Artigo rejeitado",
        description: "O artigo foi removido da lista de pendentes.",
      })
    } catch (error) {
      toast({
        title: "Erro ao rejeitar artigo",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      })
    }
  }

  if (pendingArticles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-dracula-comment text-lg">Nenhum artigo pendente de aprovação.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {pendingArticles.map((article) => (
        <div key={article.id} className="dracula-card p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <ArticleCard article={article} />

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dracula-cyan mb-2">Informações do Autor</h4>
                <p className="text-sm text-dracula-fg">
                  <strong>Email:</strong> {article.email}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-dracula-cyan mb-2">Conteúdo Completo</h4>
                <div className="max-h-40 overflow-y-auto text-sm text-dracula-fg bg-dracula-bg p-3 rounded">
                  {article.content}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={() => handleApprove(article.id)}
                  className="bg-dracula-green hover:bg-dracula-cyan text-dracula-bg"
                >
                  <Check size={18} className="mr-2" />
                  Aprovar
                </Button>

                <Button
                  onClick={() => handleReject(article.id)}
                  variant="outline"
                  className="border-dracula-red text-dracula-red hover:bg-dracula-red hover:text-dracula-bg"
                >
                  <X size={18} className="mr-2" />
                  Rejeitar
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

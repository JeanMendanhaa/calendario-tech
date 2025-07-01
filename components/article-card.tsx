import { Calendar, User, Tag } from "lucide-react"
import type { Article } from "@/lib/types"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="dracula-card p-6 rounded-lg space-y-4">
      <div>
        <h3 className="font-semibold text-dracula-cyan text-xl mb-2 line-clamp-2">{article.title}</h3>
        <span className="inline-block px-2 py-1 text-xs bg-dracula-orange text-dracula-bg rounded-full">
          {article.category}
        </span>
      </div>

      <p className="text-dracula-fg text-sm line-clamp-3">{article.abstract}</p>

      <div className="space-y-2 text-sm text-dracula-comment">
        <div className="flex items-center space-x-2">
          <User size={16} />
          <span>{article.author}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Calendar size={16} />
          <span>{new Date(article.publishedAt).toLocaleDateString("pt-BR")}</span>
        </div>

        {article.tags && (
          <div className="flex items-center space-x-2">
            <Tag size={16} />
            <span>{article.tags.join(", ")}</span>
          </div>
        )}
      </div>

      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-dracula-purple hover:text-dracula-pink underline text-sm"
        >
          Ler artigo completo →
        </a>
      )}
    </div>
  )
}

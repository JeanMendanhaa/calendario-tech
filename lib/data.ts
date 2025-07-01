import type { Event, Article } from "./types"

// Mock data storage (in a real app, this would be a database)
const events: Event[] = [
  {
    id: "1",
    name: "React Conference 2024",
    segment: "Desenvolvimento",
    startDate: "2024-12-15T09:00:00",
    endDate: "2024-12-15T18:00:00",
    location: "São Paulo - SP",
    speakers: "Dan Abramov, Sophie Alpert",
    organizer: "React Brasil",
    contact: "(11) 99999-9999",
    description: "A maior conferência de React do Brasil, com palestras sobre as últimas novidades do ecossistema.",
    website: "https://reactconf.com.br",
    price: "Gratuito",
    status: "approved",
    submittedAt: "2024-11-01T10:00:00Z",
  },
  {
    id: "2",
    name: "AI Summit 2024",
    segment: "Inteligência Artificial",
    startDate: "2024-12-20T14:00:00",
    endDate: "2024-12-20T17:00:00",
    location: "Online",
    speakers: "Andrew Ng, Fei-Fei Li",
    organizer: "AI Brasil",
    contact: "(11) 88888-8888",
    description: "Discussões sobre o futuro da IA e suas aplicações práticas.",
    website: "https://aisummit.com.br",
    price: "150.00",
    status: "approved",
    submittedAt: "2024-11-02T14:00:00Z",
  },
]

const pendingEvents: Event[] = []

const articles: Article[] = [
  {
    id: "1",
    title: "Introdução ao Machine Learning com Python",
    category: "Machine Learning",
    author: "João Silva",
    email: "joao@exemplo.com",
    abstract: "Um guia completo para iniciantes em Machine Learning usando Python e scikit-learn.",
    content: "Conteúdo completo do artigo sobre Machine Learning...",
    tags: ["python", "machine-learning", "scikit-learn"],
    url: "https://exemplo.com/ml-python",
    status: "approved",
    submittedAt: "2024-11-01T10:00:00Z",
    publishedAt: "2024-11-05T10:00:00Z",
  },
]

const pendingArticles: Article[] = []

export function getEvents(): Event[] {
  return events.filter((event) => event.status === "approved")
}

export function getPendingEvents(): Event[] {
  return pendingEvents
}

export function getArticles(): Article[] {
  return articles.filter((article) => article.status === "approved")
}

export function getPendingArticles(): Article[] {
  return pendingArticles
}

export async function submitEvent(eventData: any): Promise<void> {
  const newEvent: Event = {
    id: Date.now().toString(),
    ...eventData,
    status: "pending",
    submittedAt: new Date().toISOString(),
  }

  pendingEvents.push(newEvent)

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

export async function submitArticle(articleData: any): Promise<void> {
  const newArticle: Article = {
    id: Date.now().toString(),
    ...articleData,
    status: "pending",
    submittedAt: new Date().toISOString(),
  }

  pendingArticles.push(newArticle)

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

export async function approveEvent(eventId: string): Promise<void> {
  const eventIndex = pendingEvents.findIndex((event) => event.id === eventId)
  if (eventIndex !== -1) {
    const event = pendingEvents[eventIndex]
    event.status = "approved"
    events.push(event)
    pendingEvents.splice(eventIndex, 1)
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
}

export async function rejectEvent(eventId: string): Promise<void> {
  const eventIndex = pendingEvents.findIndex((event) => event.id === eventId)
  if (eventIndex !== -1) {
    pendingEvents.splice(eventIndex, 1)
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
}

export async function approveArticle(articleId: string): Promise<void> {
  const articleIndex = pendingArticles.findIndex((article) => article.id === articleId)
  if (articleIndex !== -1) {
    const article = pendingArticles[articleIndex]
    article.status = "approved"
    article.publishedAt = new Date().toISOString()
    articles.push(article)
    pendingArticles.splice(articleIndex, 1)
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
}

export async function rejectArticle(articleId: string): Promise<void> {
  const articleIndex = pendingArticles.findIndex((article) => article.id === articleId)
  if (articleIndex !== -1) {
    pendingArticles.splice(articleIndex, 1)
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
}

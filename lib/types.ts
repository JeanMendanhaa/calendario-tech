export interface Event {
  id: string
  name: string
  segment: string
  startDate: string
  endDate?: string
  location: string
  speakers?: string
  organizer: string
  contact: string
  description: string
  website?: string
  price?: string
  status: "pending" | "approved" | "rejected"
  submittedAt: string
}

export interface Article {
  id: string
  title: string
  category: string
  author: string
  email: string
  abstract: string
  content: string
  tags?: string[]
  url?: string
  status: "pending" | "approved" | "rejected"
  submittedAt: string
  publishedAt?: string
}

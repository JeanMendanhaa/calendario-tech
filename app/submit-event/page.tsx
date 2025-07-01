"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { submitEvent } from "@/lib/data"

export default function SubmitEventPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const segments = [
    "Desenvolvimento",
    "Inteligência Artificial",
    "Segurança",
    "DevOps",
    "Mobile",
    "Web",
    "Data Science",
    "Cloud",
    "Blockchain",
    "IoT",
    "Outros",
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const eventData = {
      name: formData.get("name") as string,
      segment: formData.get("segment") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      speakers: formData.get("speakers") as string,
      organizer: formData.get("organizer") as string,
      contact: formData.get("contact") as string,
      description: formData.get("description") as string,
      website: formData.get("website") as string,
      price: formData.get("price") as string,
      location: formData.get("location") as string,
    }

    try {
      await submitEvent(eventData)
      toast({
        title: "Evento submetido com sucesso!",
        description: "Seu evento foi enviado para aprovação e será analisado em breve.",
      })

      // Reset form
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      toast({
        title: "Erro ao submeter evento",
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
        <h1 className="text-3xl font-bold text-dracula-purple mb-4">Submeter Evento</h1>
        <p className="text-dracula-comment">Compartilhe seu evento com a comunidade de tecnologia</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 dracula-card p-6 rounded-lg">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="name" className="text-dracula-fg">
              Nome do Evento *
            </Label>
            <Input id="name" name="name" required className="bg-dracula-bg border-dracula-comment text-dracula-fg" />
          </div>

          <div>
            <Label htmlFor="segment" className="text-dracula-fg">
              Segmento *
            </Label>
            <Select name="segment" required>
              <SelectTrigger className="bg-dracula-bg border-dracula-comment text-dracula-fg">
                <SelectValue placeholder="Selecione o segmento" />
              </SelectTrigger>
              <SelectContent className="bg-dracula-current-line border-dracula-comment">
                {segments.map((segment) => (
                  <SelectItem key={segment} value={segment} className="text-dracula-fg">
                    {segment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="startDate" className="text-dracula-fg">
              Data e Hora de Início *
            </Label>
            <Input
              id="startDate"
              name="startDate"
              type="datetime-local"
              required
              className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            />
          </div>

          <div>
            <Label htmlFor="endDate" className="text-dracula-fg">
              Data e Hora de Fim
            </Label>
            <Input
              id="endDate"
              name="endDate"
              type="datetime-local"
              className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="location" className="text-dracula-fg">
            Local *
          </Label>
          <Input
            id="location"
            name="location"
            required
            placeholder="Ex: São Paulo - SP, Online, etc."
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
          />
        </div>

        <div>
          <Label htmlFor="speakers" className="text-dracula-fg">
            Principais Palestrantes/Meetups
          </Label>
          <Input
            id="speakers"
            name="speakers"
            placeholder="Ex: João Silva, Maria Santos"
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="organizer" className="text-dracula-fg">
              Responsável pelo Evento *
            </Label>
            <Input
              id="organizer"
              name="organizer"
              required
              className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            />
          </div>

          <div>
            <Label htmlFor="contact" className="text-dracula-fg">
              Contato Telefônico *
            </Label>
            <Input
              id="contact"
              name="contact"
              type="tel"
              required
              placeholder="(11) 99999-9999"
              className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="text-dracula-fg">
            Descrição Detalhada *
          </Label>
          <Textarea
            id="description"
            name="description"
            required
            rows={4}
            className="bg-dracula-bg border-dracula-comment text-dracula-fg"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="website" className="text-dracula-fg">
              Link do Site do Evento
            </Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://exemplo.com"
              className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            />
          </div>

          <div>
            <Label htmlFor="price" className="text-dracula-fg">
              Valor da Inscrição
            </Label>
            <Input
              id="price"
              name="price"
              placeholder="Ex: Gratuito, 50.00"
              className="bg-dracula-bg border-dracula-comment text-dracula-fg"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-dracula-purple hover:bg-dracula-pink text-dracula-bg"
        >
          {isSubmitting ? "Submetendo..." : "Submeter Evento"}
        </Button>
      </form>
    </div>
  )
}

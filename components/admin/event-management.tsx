"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/event-card"
import { getPendingEvents, approveEvent, rejectEvent } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"
import { Check, X } from "lucide-react"
import type { Event } from "@/lib/types"

export function EventManagement() {
  const [pendingEvents, setPendingEvents] = useState<Event[]>([])
  const { toast } = useToast()

  useEffect(() => {
    setPendingEvents(getPendingEvents())
  }, [])

  const handleApprove = async (eventId: string) => {
    try {
      await approveEvent(eventId)
      setPendingEvents((prev) => prev.filter((event) => event.id !== eventId))
      toast({
        title: "Evento aprovado!",
        description: "O evento foi publicado na agenda.",
      })
    } catch (error) {
      toast({
        title: "Erro ao aprovar evento",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      })
    }
  }

  const handleReject = async (eventId: string) => {
    try {
      await rejectEvent(eventId)
      setPendingEvents((prev) => prev.filter((event) => event.id !== eventId))
      toast({
        title: "Evento rejeitado",
        description: "O evento foi removido da lista de pendentes.",
      })
    } catch (error) {
      toast({
        title: "Erro ao rejeitar evento",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      })
    }
  }

  if (pendingEvents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-dracula-comment text-lg">Nenhum evento pendente de aprovação.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {pendingEvents.map((event) => (
        <div key={event.id} className="dracula-card p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <EventCard event={event} />

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dracula-cyan mb-2">Informações de Contato</h4>
                <p className="text-sm text-dracula-fg">
                  <strong>Responsável:</strong> {event.organizer}
                </p>
                <p className="text-sm text-dracula-fg">
                  <strong>Contato:</strong> {event.contact}
                </p>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={() => handleApprove(event.id)}
                  className="bg-dracula-green hover:bg-dracula-cyan text-dracula-bg"
                >
                  <Check size={18} className="mr-2" />
                  Aprovar
                </Button>

                <Button
                  onClick={() => handleReject(event.id)}
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

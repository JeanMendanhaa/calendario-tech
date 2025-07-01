"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/calendar"
import { EventCard } from "@/components/event-card"
import { getEvents } from "@/lib/data"
import type { Event } from "@/lib/types"

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<Event | null>(null)

  useEffect(() => {
    setEvents(getEvents())
  }, [])

  const eventsForDate = (date: Date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.startDate)
      return eventDate.toDateString() === date.toDateString()
    })
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-dracula-purple mb-4">CalendarioTech</h1>
        <p className="text-dracula-comment text-lg">Hub Central para Eventos de Tecnologia</p>
      </div>

      <div className="relative">
        <Calendar
          events={events}
          onDateSelect={setSelectedDate}
          onEventHover={setHoveredEvent}
          eventsForDate={eventsForDate}
        />

        {hoveredEvent && (
          <div className="absolute top-0 right-0 z-10">
            <EventCard event={hoveredEvent} />
          </div>
        )}
      </div>

      {selectedDate && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-dracula-cyan">
            Eventos para {selectedDate.toLocaleDateString("pt-BR")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {eventsForDate(selectedDate).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Event } from "@/lib/types"

interface CalendarProps {
  events: Event[]
  onDateSelect: (date: Date) => void
  onEventHover: (event: Event | null) => void
  eventsForDate: (date: Date) => Event[]
}

export function Calendar({ events, onDateSelect, onEventHover, eventsForDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const today = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "July",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const renderCalendarDays = () => {
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dayEvents = eventsForDate(date)
      const hasEvents = dayEvents.length > 0
      const isToday = date.toDateString() === today.toDateString()

      days.push(
        <div
          key={day}
          className={`h-12 flex items-center justify-center cursor-pointer calendar-day relative ${
            hasEvents ? "has-event" : ""
          } ${isToday ? "ring-2 ring-dracula-yellow" : ""}`}
          onClick={() => onDateSelect(date)}
          onMouseEnter={() => hasEvents && onEventHover(dayEvents[0])}
          onMouseLeave={() => onEventHover(null)}
        >
          {day}
          {hasEvents && <div className="absolute bottom-1 right-1 w-2 h-2 bg-dracula-green rounded-full"></div>}
        </div>,
      )
    }

    return days
  }

  return (
    <div className="dracula-card p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="sm" onClick={previousMonth} className="text-dracula-fg hover:text-dracula-cyan">
          <ChevronLeft size={20} />
        </Button>

        <h2 className="text-2xl font-semibold text-dracula-purple">
          {monthNames[month]} {year}
        </h2>

        <Button variant="ghost" size="sm" onClick={nextMonth} className="text-dracula-fg hover:text-dracula-cyan">
          <ChevronRight size={20} />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="h-10 flex items-center justify-center font-semibold text-dracula-comment">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  )
}

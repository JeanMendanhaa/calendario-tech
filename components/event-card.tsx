import { Calendar, Clock, MapPin, Users } from "lucide-react"
import type { Event } from "@/lib/types"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="dracula-card p-4 rounded-lg max-w-sm">
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-dracula-cyan text-lg">{event.name}</h3>
          <span className="inline-block px-2 py-1 text-xs bg-dracula-purple text-dracula-bg rounded-full mt-1">
            {event.segment}
          </span>
        </div>

        <div className="space-y-2 text-sm text-dracula-fg">
          <div className="flex items-center space-x-2">
            <Calendar size={16} className="text-dracula-comment" />
            <span>{new Date(event.startDate).toLocaleDateString("pt-BR")}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-dracula-comment" />
            <span>
              {new Date(event.startDate).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              {event.endDate && (
                <>
                  {" "}
                  -{" "}
                  {new Date(event.endDate).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </>
              )}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-dracula-comment" />
            <span>{event.location}</span>
          </div>

          {event.speakers && (
            <div className="flex items-center space-x-2">
              <Users size={16} className="text-dracula-comment" />
              <span>{event.speakers}</span>
            </div>
          )}
        </div>

        {event.description && <p className="text-sm text-dracula-comment line-clamp-3">{event.description}</p>}

        {event.price && (
          <div className="text-dracula-green font-semibold">
            {event.price === "Gratuito" ? "Gratuito" : `R$ ${event.price}`}
          </div>
        )}
      </div>
    </div>
  )
}

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const events = [
  { id: 1, title: "Judô Infantil", time: "08:00", duration: 60, day: 1, color: "bg-primary" },
  { id: 2, title: "Judô Juvenil", time: "09:30", duration: 60, day: 1, color: "bg-primary" },
  { id: 3, title: "Judô Adulto", time: "18:00", duration: 90, day: 2, color: "bg-success" },
  { id: 4, title: "Competição", time: "19:30", duration: 90, day: 2, color: "bg-accent" },
  { id: 5, title: "Judô Infantil", time: "08:00", duration: 60, day: 3, color: "bg-primary" },
  { id: 6, title: "Judô Juvenil", time: "09:30", duration: 60, day: 3, color: "bg-primary" },
  { id: 7, title: "Judô Adulto", time: "18:00", duration: 90, day: 4, color: "bg-success" },
  { id: 8, title: "Competição", time: "19:30", duration: 90, day: 4, color: "bg-accent" },
  { id: 9, title: "Judô Infantil", time: "08:00", duration: 60, day: 5, color: "bg-primary" },
  { id: 10, title: "Judô Juvenil", time: "09:30", duration: 60, day: 5, color: "bg-primary" },
  { id: 11, title: "Judô Feminino", time: "10:00", duration: 90, day: 6, color: "bg-purple-500" },
];

const timeSlots = [
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
];

export default function Agenda() {
  const [currentDate] = useState(new Date());
  
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentDate);
    const diff = date.getDay();
    date.setDate(date.getDate() - diff + i);
    return date;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Agenda</h1>
          <p className="text-muted-foreground">Visualize e gerencie os horários das aulas</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Evento
        </Button>
      </div>

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between rounded-xl bg-card p-4 card-shadow">
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-lg font-semibold text-card-foreground">
          {currentDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
        </h2>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="rounded-xl bg-card card-shadow overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-8 border-b border-border">
          <div className="p-4 text-center text-sm font-medium text-muted-foreground">
            Horário
          </div>
          {weekDays.map((date, i) => (
            <div key={i} className="p-4 text-center border-l border-border">
              <p className="text-sm font-medium text-muted-foreground">{daysOfWeek[i]}</p>
              <p className="text-lg font-semibold text-foreground">{date.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time Grid */}
        <div className="max-h-[600px] overflow-y-auto">
          {timeSlots.map((time) => (
            <div key={time} className="grid grid-cols-8 border-b border-border last:border-0">
              <div className="p-2 text-center text-sm text-muted-foreground">
                {time}
              </div>
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const dayEvents = events.filter(
                  (e) => e.day === dayIndex && e.time === time
                );
                return (
                  <div key={dayIndex} className="p-1 border-l border-border min-h-[60px] relative">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`${event.color} text-white text-xs p-2 rounded-md mb-1 cursor-pointer hover:opacity-90 transition-opacity`}
                      >
                        <p className="font-medium truncate">{event.title}</p>
                        <p className="opacity-80">{event.duration}min</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

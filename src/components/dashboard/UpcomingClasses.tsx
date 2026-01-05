import { Clock, Users } from "lucide-react";

const classes = [
  { id: 1, name: "Judô Infantil", time: "08:00 - 09:00", students: 12, instructor: "Sensei Tanaka" },
  { id: 2, name: "Judô Juvenil", time: "09:30 - 10:30", students: 8, instructor: "Sensei Tanaka" },
  { id: 3, name: "Judô Adulto", time: "18:00 - 19:30", students: 15, instructor: "Sensei Silva" },
  { id: 4, name: "Competição", time: "19:30 - 21:00", students: 6, instructor: "Sensei Silva" },
];

export function UpcomingClasses() {
  return (
    <div className="rounded-xl bg-card p-6 card-shadow animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Aulas de Hoje</h3>
        <a href="/agenda" className="text-sm font-medium text-primary hover:underline">
          Ver agenda
        </a>
      </div>
      <div className="space-y-3">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">柔</span>
              </div>
              <div>
                <p className="font-medium text-card-foreground">{classItem.name}</p>
                <p className="text-sm text-muted-foreground">{classItem.instructor}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{classItem.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{classItem.students}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

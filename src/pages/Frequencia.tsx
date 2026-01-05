import { useState } from "react";
import { Calendar, Check, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const students = [
  { id: 1, name: "Lucas Tanaka", belt: "Branca", attendance: [true, true, false, true, true] },
  { id: 2, name: "Maria Santos", belt: "Amarela", attendance: [true, true, true, true, true] },
  { id: 3, name: "Pedro Oliveira", belt: "Laranja", attendance: [true, false, true, true, true] },
  { id: 4, name: "Ana Costa", belt: "Verde", attendance: [false, true, true, true, false] },
  { id: 5, name: "João Silva", belt: "Azul", attendance: [true, true, true, true, true] },
  { id: 6, name: "Carla Mendes", belt: "Roxa", attendance: [true, true, true, false, true] },
];

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex"];

const classes = [
  { id: 1, name: "Judô Infantil", time: "08:00", students: 12, present: 10 },
  { id: 2, name: "Judô Juvenil", time: "09:30", students: 8, present: 7 },
  { id: 3, name: "Judô Adulto", time: "18:00", students: 15, present: 0 },
  { id: 4, name: "Competição", time: "19:30", students: 6, present: 0 },
];

const beltColors: Record<string, string> = {
  Branca: "bg-gray-100 text-gray-800",
  Amarela: "bg-yellow-100 text-yellow-800",
  Laranja: "bg-orange-100 text-orange-800",
  Verde: "bg-green-100 text-green-800",
  Azul: "bg-blue-100 text-blue-800",
  Roxa: "bg-purple-100 text-purple-800",
};

export default function Frequencia() {
  const [selectedClass, setSelectedClass] = useState(classes[0]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Frequência</h1>
          <p className="text-muted-foreground">Controle de presença dos alunos</p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-5 w-5" />
          <span className="font-medium">
            {new Date().toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </span>
        </div>
      </div>

      {/* Today's Classes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {classes.map((classItem) => (
          <button
            key={classItem.id}
            onClick={() => setSelectedClass(classItem)}
            className={`p-4 rounded-xl text-left transition-all duration-200 ${
              selectedClass.id === classItem.id
                ? "bg-primary text-primary-foreground card-shadow-hover"
                : "bg-card card-shadow hover:card-shadow-hover"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{classItem.time}</span>
            </div>
            <p className={`font-semibold ${selectedClass.id === classItem.id ? "" : "text-card-foreground"}`}>
              {classItem.name}
            </p>
            <p className={`text-sm ${selectedClass.id === classItem.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {classItem.present}/{classItem.students} presentes
            </p>
          </button>
        ))}
      </div>

      {/* Attendance Table */}
      <div className="rounded-xl bg-card p-6 card-shadow">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">{selectedClass.name}</h3>
            <p className="text-sm text-muted-foreground">Frequência da semana</p>
          </div>
          <Button>Salvar Frequência</Button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-4 text-left text-sm font-semibold text-foreground">Aluno</th>
              <th className="pb-4 text-left text-sm font-semibold text-foreground">Faixa</th>
              {weekDays.map((day) => (
                <th key={day} className="pb-4 text-center text-sm font-semibold text-foreground">
                  {day}
                </th>
              ))}
              <th className="pb-4 text-right text-sm font-semibold text-foreground">%</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {students.map((student) => {
              const attendanceRate = Math.round(
                (student.attendance.filter(Boolean).length / student.attendance.length) * 100
              );
              return (
                <tr key={student.id} className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">
                          {student.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <span className="font-medium text-foreground">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${beltColors[student.belt]}`}>
                      {student.belt}
                    </span>
                  </td>
                  {student.attendance.map((present, index) => (
                    <td key={index} className="py-4 text-center">
                      <button
                        className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                          present
                            ? "bg-success/10 text-success hover:bg-success/20"
                            : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                        }`}
                      >
                        {present ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                      </button>
                    </td>
                  ))}
                  <td className="py-4 text-right">
                    <Badge
                      variant={
                        attendanceRate >= 80
                          ? "default"
                          : attendanceRate >= 60
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {attendanceRate}%
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

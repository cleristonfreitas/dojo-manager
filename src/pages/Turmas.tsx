import { Plus, Clock, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const classes = [
  {
    id: 1,
    name: "Judô Infantil",
    description: "Turma para crianças de 6 a 10 anos",
    instructor: "Sensei Tanaka",
    schedule: "Seg, Qua, Sex • 08:00 - 09:00",
    students: 12,
    maxStudents: 15,
    status: "Ativa",
  },
  {
    id: 2,
    name: "Judô Juvenil",
    description: "Turma para jovens de 11 a 15 anos",
    instructor: "Sensei Tanaka",
    schedule: "Seg, Qua, Sex • 09:30 - 10:30",
    students: 8,
    maxStudents: 12,
    status: "Ativa",
  },
  {
    id: 3,
    name: "Judô Adulto Iniciante",
    description: "Turma para adultos iniciantes",
    instructor: "Sensei Silva",
    schedule: "Ter, Qui • 18:00 - 19:30",
    students: 15,
    maxStudents: 20,
    status: "Ativa",
  },
  {
    id: 4,
    name: "Judô Adulto Avançado",
    description: "Turma para atletas de competição",
    instructor: "Sensei Silva",
    schedule: "Ter, Qui • 19:30 - 21:00",
    students: 6,
    maxStudents: 10,
    status: "Ativa",
  },
  {
    id: 5,
    name: "Judô Feminino",
    description: "Turma exclusiva para mulheres",
    instructor: "Sensei Yamamoto",
    schedule: "Sáb • 10:00 - 11:30",
    students: 10,
    maxStudents: 15,
    status: "Ativa",
  },
  {
    id: 6,
    name: "Preparação Olímpica",
    description: "Treinamento intensivo para competições",
    instructor: "Sensei Silva",
    schedule: "Seg a Sex • 06:00 - 08:00",
    students: 4,
    maxStudents: 6,
    status: "Fechada",
  },
];

export default function Turmas() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Turmas</h1>
          <p className="text-muted-foreground">Gerencie as turmas e horários da academia</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Turma
        </Button>
      </div>

      {/* Classes Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="rounded-xl bg-card p-6 card-shadow hover:card-shadow-hover transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">柔</span>
              </div>
              <Badge variant={classItem.status === "Ativa" ? "default" : "secondary"}>
                {classItem.status}
              </Badge>
            </div>

            <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
              {classItem.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">{classItem.description}</p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{classItem.instructor}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{classItem.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>
                  {classItem.students}/{classItem.maxStudents} alunos
                </span>
              </div>
            </div>

            {/* Capacity Bar */}
            <div className="mt-4">
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(classItem.students / classItem.maxStudents) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

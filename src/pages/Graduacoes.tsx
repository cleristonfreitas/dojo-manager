import { Plus, Calendar, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const belts = [
  { name: "Branca", color: "bg-gray-100 border-gray-300", students: 25 },
  { name: "Amarela", color: "bg-yellow-100 border-yellow-400", students: 18 },
  { name: "Laranja", color: "bg-orange-100 border-orange-400", students: 22 },
  { name: "Verde", color: "bg-green-100 border-green-500", students: 15 },
  { name: "Azul", color: "bg-blue-100 border-blue-500", students: 12 },
  { name: "Roxa", color: "bg-purple-100 border-purple-500", students: 8 },
  { name: "Marrom", color: "bg-amber-200 border-amber-700", students: 5 },
  { name: "Preta", color: "bg-gray-800 border-gray-900 text-white", students: 3 },
];

const upcomingExams = [
  { id: 1, date: "2024-01-15", belt: "Amarela", candidates: 8, location: "Dojo Principal" },
  { id: 2, date: "2024-02-10", belt: "Laranja", candidates: 5, location: "Dojo Principal" },
  { id: 3, date: "2024-03-20", belt: "Verde", candidates: 4, location: "Federação" },
];

const recentGraduations = [
  { id: 1, student: "Lucas Tanaka", fromBelt: "Branca", toBelt: "Amarela", date: "2024-01-05" },
  { id: 2, student: "Maria Santos", fromBelt: "Amarela", toBelt: "Laranja", date: "2024-01-05" },
  { id: 3, student: "Pedro Oliveira", fromBelt: "Verde", toBelt: "Azul", date: "2023-12-20" },
  { id: 4, student: "Ana Costa", fromBelt: "Azul", toBelt: "Roxa", date: "2023-12-20" },
];

const beltColors: Record<string, string> = {
  Branca: "bg-gray-100 text-gray-800",
  Amarela: "bg-yellow-100 text-yellow-800",
  Laranja: "bg-orange-100 text-orange-800",
  Verde: "bg-green-100 text-green-800",
  Azul: "bg-blue-100 text-blue-800",
  Roxa: "bg-purple-100 text-purple-800",
  Marrom: "bg-amber-800 text-white",
  Preta: "bg-gray-900 text-white",
};

export default function Graduacoes() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Graduações</h1>
          <p className="text-muted-foreground">Gerencie exames e progressão de faixas</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Exame
        </Button>
      </div>

      {/* Belt Distribution */}
      <div className="rounded-xl bg-card p-6 card-shadow">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Distribuição de Faixas</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {belts.map((belt) => (
            <div key={belt.name} className="text-center">
              <div
                className={`h-16 w-full rounded-lg border-2 ${belt.color} flex items-center justify-center mb-2`}
              >
                <span className="text-2xl font-bold">{belt.students}</span>
              </div>
              <p className="text-sm font-medium text-card-foreground">{belt.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Exams */}
        <div className="rounded-xl bg-card p-6 card-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-card-foreground">Próximos Exames</h3>
            <Badge variant="outline">{upcomingExams.length} agendados</Badge>
          </div>
          <div className="space-y-4">
            {upcomingExams.map((exam) => (
              <div
                key={exam.id}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">
                      Exame Faixa {exam.belt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(exam.date).toLocaleDateString("pt-BR")}</span>
                      <Users className="h-3 w-3 ml-2" />
                      <span>{exam.candidates} candidatos</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${beltColors[exam.belt]}`}>
                  {exam.belt}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Graduations */}
        <div className="rounded-xl bg-card p-6 card-shadow">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Graduações Recentes</h3>
          <div className="space-y-4">
            {recentGraduations.map((graduation) => (
              <div
                key={graduation.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {graduation.student.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{graduation.student}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(graduation.date).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${beltColors[graduation.fromBelt]}`}>
                    {graduation.fromBelt}
                  </span>
                  <span className="text-muted-foreground">→</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${beltColors[graduation.toBelt]}`}>
                    {graduation.toBelt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";

const students = [
  { id: 1, name: "Lucas Tanaka", belt: "Branca", age: 12, status: "Ativo", joined: "Há 3 dias" },
  { id: 2, name: "Maria Santos", belt: "Amarela", age: 15, status: "Ativo", joined: "Há 1 semana" },
  { id: 3, name: "Pedro Oliveira", belt: "Laranja", age: 10, status: "Ativo", joined: "Há 2 semanas" },
  { id: 4, name: "Ana Costa", belt: "Verde", age: 18, status: "Pendente", joined: "Há 3 semanas" },
  { id: 5, name: "João Silva", belt: "Azul", age: 25, status: "Ativo", joined: "Há 1 mês" },
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

export function RecentStudents() {
  return (
    <div className="rounded-xl bg-card p-6 card-shadow animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Alunos Recentes</h3>
        <a href="/alunos" className="text-sm font-medium text-primary hover:underline">
          Ver todos
        </a>
      </div>
      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between py-3 border-b border-border last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">
                  {student.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">{student.name}</p>
                <p className="text-xs text-muted-foreground">{student.age} anos • {student.joined}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${beltColors[student.belt]}`}>
                {student.belt}
              </span>
              <Badge variant={student.status === "Ativo" ? "default" : "secondary"}>
                {student.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

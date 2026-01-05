import { useState } from "react";
import { Search, Plus, Filter, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const students = [
  { id: 1, name: "Lucas Tanaka", email: "lucas@email.com", phone: "(11) 99999-1234", belt: "Branca", age: 12, status: "Ativo", joined: "2024-01-10" },
  { id: 2, name: "Maria Santos", email: "maria@email.com", phone: "(11) 99999-2345", belt: "Amarela", age: 15, status: "Ativo", joined: "2024-01-03" },
  { id: 3, name: "Pedro Oliveira", email: "pedro@email.com", phone: "(11) 99999-3456", belt: "Laranja", age: 10, status: "Ativo", joined: "2023-12-20" },
  { id: 4, name: "Ana Costa", email: "ana@email.com", phone: "(11) 99999-4567", belt: "Verde", age: 18, status: "Pendente", joined: "2023-12-10" },
  { id: 5, name: "João Silva", email: "joao@email.com", phone: "(11) 99999-5678", belt: "Azul", age: 25, status: "Ativo", joined: "2023-11-15" },
  { id: 6, name: "Carla Mendes", email: "carla@email.com", phone: "(11) 99999-6789", belt: "Roxa", age: 22, status: "Ativo", joined: "2023-10-01" },
  { id: 7, name: "Roberto Alves", email: "roberto@email.com", phone: "(11) 99999-7890", belt: "Marrom", age: 30, status: "Inativo", joined: "2023-08-20" },
  { id: 8, name: "Fernanda Lima", email: "fernanda@email.com", phone: "(11) 99999-8901", belt: "Preta", age: 28, status: "Ativo", joined: "2023-05-10" },
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

export default function Alunos() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Alunos</h1>
          <p className="text-muted-foreground">Gerencie os alunos da sua academia</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Aluno
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar alunos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-card card-shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-secondary/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Aluno</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Contato</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Faixa</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Matrícula</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.age} anos</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-foreground">{student.email}</p>
                  <p className="text-sm text-muted-foreground">{student.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${beltColors[student.belt]}`}>
                    {student.belt}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      student.status === "Ativo"
                        ? "default"
                        : student.status === "Pendente"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {student.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {new Date(student.joined).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Histórico</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Desativar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

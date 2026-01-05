import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, MoreHorizontal, Pencil, Trash2, Eye, Filter } from "lucide-react";
import { StudentFormDialog } from "@/components/students/StudentFormDialog";
import { toast } from "sonner";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  belt: string;
  class: string;
  status: string;
  age: number;
}

const initialStudents: Student[] = [
  { id: 1, name: "Lucas Tanaka", email: "lucas@email.com", phone: "(11) 99999-1111", belt: "Branca", class: "Judô Infantil", status: "Ativo", age: 12 },
  { id: 2, name: "Maria Santos", email: "maria@email.com", phone: "(11) 99999-2222", belt: "Amarela", class: "Judô Juvenil", status: "Ativo", age: 15 },
  { id: 3, name: "Pedro Oliveira", email: "pedro@email.com", phone: "(11) 99999-3333", belt: "Laranja", class: "Judô Infantil", status: "Ativo", age: 10 },
  { id: 4, name: "Ana Costa", email: "ana@email.com", phone: "(11) 99999-4444", belt: "Verde", class: "Judô Adulto", status: "Pendente", age: 18 },
  { id: 5, name: "João Silva", email: "joao@email.com", phone: "(11) 99999-5555", belt: "Azul", class: "Competição", status: "Ativo", age: 25 },
  { id: 6, name: "Fernanda Lima", email: "fernanda@email.com", phone: "(11) 99999-6666", belt: "Roxa", class: "Judô Adulto", status: "Ativo", age: 22 },
  { id: 7, name: "Carlos Mendes", email: "carlos@email.com", phone: "(11) 99999-7777", belt: "Marrom", class: "Competição", status: "Ativo", age: 28 },
  { id: 8, name: "Beatriz Souza", email: "beatriz@email.com", phone: "(11) 99999-8888", belt: "Preta", class: "Judô Adulto", status: "Ativo", age: 30 },
];

const beltColors: Record<string, string> = {
  Branca: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  Cinza: "bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100",
  "Azul Clara": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Amarela: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Laranja: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  Verde: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Roxa: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Marrom: "bg-amber-700 text-white",
  Preta: "bg-gray-900 text-white dark:bg-gray-950",
  Azul: "bg-blue-600 text-white",
};

const statusColors: Record<string, string> = {
  Ativo: "bg-success/10 text-success border-success/20",
  Pendente: "bg-accent/10 text-accent-foreground border-accent/20",
  Inativo: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function Alunos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.belt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewStudent = () => {
    setEditingStudent(null);
    setIsFormOpen(true);
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setIsFormOpen(true);
  };

  const handleDeleteStudent = (student: Student) => {
    setStudents(students.filter((s) => s.id !== student.id));
    toast.success(`Aluno ${student.name} removido com sucesso!`);
  };

  const handleSaveStudent = (data: any) => {
    if (editingStudent) {
      setStudents(
        students.map((s) =>
          s.id === editingStudent.id
            ? { ...s, ...data }
            : s
        )
      );
    } else {
      const newStudent: Student = {
        id: Math.max(...students.map((s) => s.id)) + 1,
        name: data.name,
        email: data.email,
        phone: data.phone,
        belt: data.belt,
        class: data.class,
        status: data.status,
        age: new Date().getFullYear() - new Date(data.birthDate).getFullYear(),
      };
      setStudents([...students, newStudent]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Alunos</h1>
          <p className="text-muted-foreground">Gerencie os alunos da sua academia</p>
        </div>
        <Button className="gap-2" onClick={handleNewStudent}>
          <Plus className="h-4 w-4" />
          Novo Aluno
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar alunos por nome, email ou faixa..."
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 border">
          <p className="text-sm text-muted-foreground">Total de Alunos</p>
          <p className="text-2xl font-bold text-foreground">{students.length}</p>
        </div>
        <div className="bg-card rounded-lg p-4 border">
          <p className="text-sm text-muted-foreground">Ativos</p>
          <p className="text-2xl font-bold text-success">{students.filter(s => s.status === "Ativo").length}</p>
        </div>
        <div className="bg-card rounded-lg p-4 border">
          <p className="text-sm text-muted-foreground">Pendentes</p>
          <p className="text-2xl font-bold text-accent-foreground">{students.filter(s => s.status === "Pendente").length}</p>
        </div>
        <div className="bg-card rounded-lg p-4 border">
          <p className="text-sm text-muted-foreground">Inativos</p>
          <p className="text-2xl font-bold text-destructive">{students.filter(s => s.status === "Inativo").length}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Aluno</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Faixa</TableHead>
              <TableHead>Turma</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {student.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.age} anos</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="text-sm text-foreground">{student.email}</p>
                    <p className="text-sm text-muted-foreground">{student.phone}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={beltColors[student.belt] || "bg-gray-100"}>
                    {student.belt}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-foreground">{student.class}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={statusColors[student.status]}>
                    {student.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Detalhes
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditStudent(student)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => handleDeleteStudent(student)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Form Dialog */}
      <StudentFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        student={editingStudent}
        onSave={handleSaveStudent}
      />
    </div>
  );
}

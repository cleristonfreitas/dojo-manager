import { UserPlus, CalendarPlus, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { name: "Novo Aluno", icon: UserPlus, href: "/alunos/novo" },
  { name: "Nova Aula", icon: CalendarPlus, href: "/turmas/nova" },
  { name: "Graduação", icon: Award, href: "/graduacoes/nova" },
  { name: "Relatório", icon: FileText, href: "/relatorios" },
];

export function QuickActions() {
  return (
    <div className="rounded-xl bg-card p-6 card-shadow animate-fade-in">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Ações Rápidas</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.name}
            variant="outline"
            className="h-auto flex-col gap-2 py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={action.href}>
              <action.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{action.name}</span>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}

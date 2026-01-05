import { Users, GraduationCap, Trophy, CreditCard } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentStudents } from "@/components/dashboard/RecentStudents";
import { UpcomingClasses } from "@/components/dashboard/UpcomingClasses";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo de volta, Sensei! Aqui está o resumo da sua academia.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total de Alunos"
          value={156}
          change="+12 este mês"
          changeType="positive"
          icon={Users}
          iconColor="bg-primary/10 text-primary"
        />
        <StatCard
          title="Turmas Ativas"
          value={8}
          change="2 aulas hoje"
          changeType="neutral"
          icon={GraduationCap}
          iconColor="bg-accent/20 text-accent-foreground"
        />
        <StatCard
          title="Graduações"
          value={23}
          change="Próxima: 15 Jan"
          changeType="neutral"
          icon={Trophy}
          iconColor="bg-success/10 text-success"
        />
        <StatCard
          title="Receita Mensal"
          value="R$ 28.450"
          change="+8% vs mês anterior"
          changeType="positive"
          icon={CreditCard}
          iconColor="bg-purple-100 text-purple-600"
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <UpcomingClasses />
          <RecentStudents />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

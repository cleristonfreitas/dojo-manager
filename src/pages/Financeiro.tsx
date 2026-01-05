import { TrendingUp, TrendingDown, DollarSign, CreditCard, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { title: "Receita do Mês", value: "R$ 28.450", change: "+8%", positive: true, icon: TrendingUp },
  { title: "Mensalidades Pagas", value: "142", change: "de 156", positive: true, icon: CheckCircle },
  { title: "Inadimplência", value: "R$ 2.100", change: "14 alunos", positive: false, icon: AlertCircle },
  { title: "Despesas", value: "R$ 8.200", change: "-12%", positive: true, icon: TrendingDown },
];

const transactions = [
  { id: 1, student: "Lucas Tanaka", type: "Mensalidade", amount: 180, status: "Pago", date: "2024-01-10" },
  { id: 2, student: "Maria Santos", type: "Mensalidade", amount: 180, status: "Pago", date: "2024-01-09" },
  { id: 3, student: "Pedro Oliveira", type: "Mensalidade", amount: 150, status: "Pendente", date: "2024-01-08" },
  { id: 4, student: "Ana Costa", type: "Matrícula", amount: 100, status: "Pago", date: "2024-01-07" },
  { id: 5, student: "João Silva", type: "Mensalidade", amount: 200, status: "Atrasado", date: "2024-01-05" },
  { id: 6, student: "Carla Mendes", type: "Exame de Faixa", amount: 80, status: "Pago", date: "2024-01-04" },
];

const plans = [
  { name: "Básico", price: 150, students: 45, description: "2x por semana" },
  { name: "Intermediário", price: 180, students: 68, description: "3x por semana" },
  { name: "Avançado", price: 200, students: 32, description: "Ilimitado" },
  { name: "Competição", price: 350, students: 11, description: "Treino especial" },
];

export default function Financeiro() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Financeiro</h1>
        <p className="text-muted-foreground">Controle financeiro da academia</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-xl bg-card p-6 card-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="mt-2 text-2xl font-bold text-card-foreground">{stat.value}</p>
                <p
                  className={`mt-1 text-sm font-medium ${
                    stat.positive ? "text-success" : "text-destructive"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
              <div
                className={`rounded-lg p-3 ${
                  stat.positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                }`}
              >
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 rounded-xl bg-card p-6 card-shadow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-card-foreground">Transações Recentes</h3>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              Ver todas
            </a>
          </div>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{transaction.student}</p>
                    <p className="text-sm text-muted-foreground">{transaction.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-card-foreground">
                    R$ {transaction.amount.toFixed(2)}
                  </p>
                  <Badge
                    variant={
                      transaction.status === "Pago"
                        ? "default"
                        : transaction.status === "Pendente"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plans Overview */}
        <div className="rounded-xl bg-card p-6 card-shadow">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Planos</h3>
          <div className="space-y-4">
            {plans.map((plan) => (
              <div key={plan.name} className="p-4 rounded-lg bg-secondary/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-card-foreground">{plan.name}</p>
                  <p className="font-bold text-primary">R$ {plan.price}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{plan.description}</p>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{plan.students} alunos</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

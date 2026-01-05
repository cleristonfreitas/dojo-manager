import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  GraduationCap,
  ClipboardCheck,
  DollarSign,
  Settings,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Alunos", href: "/alunos", icon: Users },
  { name: "Turmas", href: "/turmas", icon: BookOpen },
  { name: "Agenda", href: "/agenda", icon: Calendar },
  { name: "Graduações", href: "/graduacoes", icon: GraduationCap },
  { name: "Frequência", href: "/frequencia", icon: ClipboardCheck },
  { name: "Financeiro", href: "/financeiro", icon: DollarSign },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center justify-between px-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary">
              <span className="text-xl font-bold text-sidebar-primary-foreground">柔</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">JudôPro</h1>
              <p className="text-xs text-sidebar-foreground/70">Sistema de Gestão</p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-sidebar-primary flex items-center justify-center">
              <span className="text-sm font-semibold text-sidebar-primary-foreground">S</span>
            </div>
            <div>
              <p className="text-sm font-medium text-sidebar-foreground">Sensei Admin</p>
              <p className="text-xs text-sidebar-foreground/70">Administrador</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

import { Building, Users, Bell, Shield, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const settingsSections = [
  { id: "academia", name: "Academia", icon: Building, description: "Informações gerais da academia" },
  { id: "usuarios", name: "Usuários", icon: Users, description: "Gerenciar acessos e permissões" },
  { id: "notificacoes", name: "Notificações", icon: Bell, description: "Configurar alertas e emails" },
  { id: "seguranca", name: "Segurança", icon: Shield, description: "Senhas e autenticação" },
  { id: "aparencia", name: "Aparência", icon: Palette, description: "Personalizar interface" },
  { id: "integracao", name: "Integrações", icon: Globe, description: "APIs e serviços externos" },
];

export default function Configuracoes() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
        <p className="text-muted-foreground">Gerencie as configurações do sistema</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Navigation */}
        <div className="lg:col-span-1 space-y-2">
          {settingsSections.map((section) => (
            <button
              key={section.id}
              className="w-full flex items-center gap-3 p-4 rounded-lg bg-card card-shadow hover:bg-secondary/50 transition-colors text-left"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <section.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-card-foreground">{section.name}</p>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Academy Info */}
          <div className="rounded-xl bg-card p-6 card-shadow">
            <h3 className="text-lg font-semibold text-card-foreground mb-6">Informações da Academia</h3>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Nome da Academia</Label>
                  <Input id="name" defaultValue="JudôPro Academia" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" defaultValue="12.345.678/0001-90" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Endereço</Label>
                <Input id="address" defaultValue="Rua do Judô, 123 - São Paulo, SP" className="mt-1" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 99999-0000" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="contato@judopro.com.br" className="mt-1" />
                </div>
              </div>
              <Button className="mt-2">Salvar Alterações</Button>
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-xl bg-card p-6 card-shadow">
            <h3 className="text-lg font-semibold text-card-foreground mb-6">Notificações</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">Lembrete de Mensalidade</p>
                  <p className="text-sm text-muted-foreground">Enviar email 5 dias antes do vencimento</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">Aviso de Aula</p>
                  <p className="text-sm text-muted-foreground">Notificar alunos 1 hora antes da aula</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">Aniversários</p>
                  <p className="text-sm text-muted-foreground">Notificar sobre aniversários de alunos</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">Relatórios Semanais</p>
                  <p className="text-sm text-muted-foreground">Receber resumo semanal por email</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

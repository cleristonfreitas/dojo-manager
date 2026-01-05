import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Index from "./pages/Index";
import Alunos from "./pages/Alunos";
import Turmas from "./pages/Turmas";
import Agenda from "./pages/Agenda";
import Graduacoes from "./pages/Graduacoes";
import Frequencia from "./pages/Frequencia";
import Financeiro from "./pages/Financeiro";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/alunos" element={<MainLayout><Alunos /></MainLayout>} />
          <Route path="/turmas" element={<MainLayout><Turmas /></MainLayout>} />
          <Route path="/agenda" element={<MainLayout><Agenda /></MainLayout>} />
          <Route path="/graduacoes" element={<MainLayout><Graduacoes /></MainLayout>} />
          <Route path="/frequencia" element={<MainLayout><Frequencia /></MainLayout>} />
          <Route path="/financeiro" element={<MainLayout><Financeiro /></MainLayout>} />
          <Route path="/configuracoes" element={<MainLayout><Configuracoes /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

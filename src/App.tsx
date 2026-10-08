import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExperienceDetail from "./pages/ExperienceDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-background transition-colors duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(38,190,207,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(38,190,207,0.3),rgba(255,255,255,0))]" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[100px]" />
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

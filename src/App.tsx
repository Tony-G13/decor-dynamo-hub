import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Photozones from "./pages/Photozones";
import Decorations from "./pages/Decorations";
import Props from "./pages/Props";
import Stands from "./pages/Stands";
import SetDesign from "./pages/SetDesign";
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
          <Route path="/photozones" element={<Photozones />} />
          <Route path="/decorations" element={<Decorations />} />
          <Route path="/props" element={<Props />} />
          <Route path="/stands" element={<Stands />} />
          <Route path="/set-design" element={<SetDesign />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

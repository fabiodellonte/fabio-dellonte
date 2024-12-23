import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <div className="min-h-screen bg-background text-foreground">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/fabio-dellonte">
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </div>
    </SettingsProvider>
  </QueryClientProvider>
);

export default App;

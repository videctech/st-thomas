import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import PrePrimary from "./pages/academics/PrePrimary";
import PrimarySchool from "./pages/academics/PrimarySchool";
import HighSchool from "./pages/academics/HighSchool";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Alumni from "./pages/Alumni";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/pre-primary" element={<PrePrimary />} />
            <Route path="/academics/primary" element={<PrimarySchool />} />
            <Route path="/academics/high-school" element={<HighSchool />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/careers" element={<Careers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import SymptomsPage from "./pages/SymptomsPage";
import CausesPage from "./pages/CausesPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import MembershipPage from "./pages/MembershipPage";
import SponsorshipPage from "./pages/SponsorshipPage";
import FooterPage from "./pages/FooterPage";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <main className="pt-16 mx-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/symptoms" element={<SymptomsPage />} />
              <Route path="/causes" element={<CausesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/sponsorship" element={<SponsorshipPage />} />
              <Route path="/footer" element={<FooterPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
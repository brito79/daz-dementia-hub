import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { useState } from "react";
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
import LoginPage from "./pages/(auth)/login/page";
import SignupPage from "./pages/(auth)/signup/page";
import RootLayout from "./layout/RootLayout";
import NotFound from "./pages/NotFound";
import GalleryItem, { galleryLoader } from "./pages/GalleryItem";
import { Gallery } from "./components/Gallery";
import RootGalleryLayout from "./layout/RootGalleryLayout";


const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="symptoms" element={<SymptomsPage />} />
        <Route path="causes" element={<CausesPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gall" element={<RootGalleryLayout />}>
          <Route index element={<GalleryItem />} loader={galleryLoader}/>
          {/* <Route path=":galleryItemId" element={<GalleryItem />} /> */}
          {/* <Route path="items" element={<RootGallery />} />
          <Route path="items/:galleryItemId" element={<GalleryItem />} />
          <Route path="items/:galleryItemId" element={<GalleryItem />} />
          <Route path="items/:galleryItemId" element={<GalleryItem />} /> */}
          </Route>
        <Route path="contact" element={<ContactPage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="sponsorship" element={<SponsorshipPage />} />
        <Route path="footer" element={<FooterPage />} />
        <Route path="faq" element={<FooterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
        )
    );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* <BrowserRouter>
          <Navigation />
          <main className="pt-16 lg:mx-6">
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
              <Route path="/faq" element={<FooterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </main> */}
          {/* <Footer />
        </BrowserRouter> */}
        <main className="pt-16 lg:mx-6">
        <RouterProvider router={router} />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;











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
import RootLayout from "./layout/RootLayout";
import NotFound from "./pages/NotFound";
import GalleryItem, { galleryLoader } from "./pages/GalleryItem";
import RootGalleryLayout from "./layout/RootGalleryLayout";
import GalleryItemDetails, { galleryItemDetailsLoader } from "./pages/GalleryItemDetails";
import ErrorComponent from "./pages/ErrorComponent";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import YoungOnsetDementiaPage from "./pages/YoungOnsetDementiaPage";



const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="symptoms" element={<SymptomsPage />} />
        <Route path="causes" element={<CausesPage />} />
        <Route path="young-onset-dementia" element={<YoungOnsetDementiaPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />

        {/**Image routes */}
        <Route path="gallitems" element={<RootGalleryLayout />}  errorElement={<ErrorComponent/>}>
          <Route index element={<GalleryItem />} loader={galleryLoader}/>
          <Route path=":id" element={<GalleryItemDetails />} loader={galleryItemDetailsLoader}/>
          <Route path="image/:id" element={<GalleryItem />} />
          
        </Route>

        {/**login and sign up pages */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />

        {/**site navigation */}
        <Route path="contact" element={<ContactPage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="sponsorship" element={<SponsorshipPage />} />
        <Route path="footer" element={<FooterPage />} />
        <Route path="faq" element={<FooterPage />} />

        {/**Universal error handler */}
        <Route path="*" element={<NotFound/>} />
      </Route>
        )
    );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <main className="pt-16 lg:mx-6">
        <RouterProvider router={router} />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;











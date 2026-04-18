import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import WhyVoxaris from "./pages/WhyVoxaris";
import Demo from "./pages/Demo";
import BookDemo from "./pages/BookDemo";
import SolutionsAgencies from "./pages/SolutionsAgencies";
import SolutionsDealerships from "./pages/SolutionsDealerships";
import Pricing from "./pages/Pricing";
import VoiceAgent from "./pages/products/VoiceAgent";
import VideoAgent from "./pages/products/VideoAgent";
import StaffingAgent from "./pages/products/StaffingAgent";
import AEO from "./pages/products/AEO";
import Websites from "./pages/products/Websites";
import TalkingPostcard from "./pages/products/TalkingPostcard";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { GlassFilter } from "./components/ui/liquid-glass";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GlassFilter />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-voxaris" element={<WhyVoxaris />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/solutions/agencies" element={<SolutionsAgencies />} />
          <Route path="/solutions/dealerships" element={<SolutionsDealerships />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products/voice-agent" element={<VoiceAgent />} />
          <Route path="/products/video-agent" element={<VideoAgent />} />
          <Route path="/products/staffing-agent" element={<StaffingAgent />} />
          <Route path="/products/aeo" element={<AEO />} />
          <Route path="/products/websites" element={<Websites />} />
          <Route path="/products/talking-postcard" element={<TalkingPostcard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

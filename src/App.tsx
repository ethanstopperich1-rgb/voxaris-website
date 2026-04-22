import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import WhyVoxaris from "./pages/WhyVoxaris";
import Demo from "./pages/Demo";
import BookDemo from "./pages/BookDemo";
import VoiceAgent from "./pages/products/VoiceAgent";
import VideoAgent from "./pages/products/VideoAgent";
import StaffingAgent from "./pages/products/StaffingAgent";
import AEO from "./pages/products/AEO";
import Websites from "./pages/products/Websites";
import TalkingPostcard from "./pages/products/TalkingPostcard";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
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
          {/* /pricing → /book-demo (per repositioning spec) */}
          <Route path="/pricing" element={<Navigate to="/book-demo" replace />} />
          <Route path="/products/aeo" element={<AEO />} />
          <Route path="/products/talking-postcard" element={<TalkingPostcard />} />
          <Route path="/products/websites" element={<Websites />} />
          <Route path="/products/staffing" element={<StaffingAgent />} />
          {/* Backwards-compat: legacy URL */}
          <Route path="/products/staffing-agent" element={<Navigate to="/products/staffing" replace />} />
          <Route path="/products/voice-agent" element={<VoiceAgent />} />
          <Route path="/products/video-agent" element={<VideoAgent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
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

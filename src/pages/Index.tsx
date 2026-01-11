import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedMusic from "@/components/home/FeaturedMusic";
import AboutPreview from "@/components/home/AboutPreview";
import VideoSection from "@/components/home/VideoSection";
import CallToActionSection from "@/components/home/CallToActionSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedMusic />
      <AboutPreview />
      <VideoSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Index;

import Blog2 from "@/components/Blog2/Blog2";
import BlogSection from "@/components/BlogSection/Blog";
import HeroSection from "@/components/HeroSection/Hero";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <BlogSection />
      <Blog2 />
    </div>
  );
}

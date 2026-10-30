import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* tabIndex lets the skip link move real focus, not just scroll. */}
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
